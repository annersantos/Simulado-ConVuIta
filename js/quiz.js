/**
 * SIMULA VUNESP - ITANHAÉM 2026
 * Módulo de Controle do Simulado (Quiz)
 */

const QuizManager = {
  cargoKey: null,
  cargoName: '',
  questions: [],
  currentIndex: 0,
  answers: {}, // { [questionIndex]: optionIndex }
  mode: 'prova', // 'prova' (3h regressivo) ou 'estudo' (progressivo)
  timeElapsed: 0, // Segundos passados
  timeRemaining: 10800, // 3 horas = 10800 segundos
  timerInterval: null,
  warned15Min: false,
  isFinished: false,

  /**
   * Inicia um novo simulado ou restaura um existente
   */
  startQuiz(cargoKey, mode = 'prova', resumeData = null) {
    this.cargoKey = cargoKey;
    this.mode = mode;
    this.isFinished = false;
    this.warned15Min = false;

    // Identificar nome do cargo e array de questões
    if (cargoKey === 'agente-administrativo') {
      this.cargoName = 'Agente Administrativo';
      this.questions = window.QUESTOES_AGENTE_ADMINISTRATIVO || [];
    } else if (cargoKey === 'tecnico-informatica') {
      this.cargoName = 'Técnico de Informática';
      this.questions = window.QUESTOES_TECNICO_INFORMATICA || [];
    } else {
      console.error('Cargo desconhecido:', cargoKey);
      return;
    }

    if (this.questions.length === 0) {
      alert('Erro: Questões não encontradas para o cargo selecionado.');
      return;
    }

    // Se estiver retomando
    if (resumeData) {
      this.mode = resumeData.mode || mode;
      this.timeElapsed = resumeData.timeElapsed || 0;
      this.timeRemaining = resumeData.timeRemaining !== undefined ? resumeData.timeRemaining : 10800;
      this.currentIndex = resumeData.currentIndex || 0;
      this.answers = resumeData.answers || {};
    } else {
      this.currentIndex = 0;
      this.answers = {};
      this.timeElapsed = 0;
      this.timeRemaining = 10800; // 3 horas no modo prova
    }

    this.startTimer();
    this.saveState();
    this.renderCurrentQuestion();
    this.renderNavigationGrid();
  },

  /**
   * Inicia o cronômetro
   */
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeElapsed++;

      if (this.mode === 'prova') {
        this.timeRemaining--;

        // Aviso quando faltam 15 minutos (900 segundos)
        if (this.timeRemaining === 900 && !this.warned15Min) {
          this.warned15Min = true;
          this.showTimeAlert('Atenção: Restam apenas 15 minutos para o encerramento do simulado!');
        }

        // Tempo esgotado
        if (this.timeRemaining <= 0) {
          this.timeRemaining = 0;
          clearInterval(this.timerInterval);
          this.updateTimerDisplay();
          alert('Tempo esgotado! O simulado será finalizado automaticamente.');
          this.confirmFinishQuiz(true);
          return;
        }
      }

      this.updateTimerDisplay();

      // Salva progresso a cada 10 segundos
      if (this.timeElapsed % 10 === 0) {
        this.saveState();
      }
    }, 1000);
  },

  /**
   * Para o cronômetro
   */
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  /**
   * Formata segundos para HH:MM:SS ou MM:SS
   */
  formatSeconds(sec) {
    const s = Math.max(0, Math.floor(sec));
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;

    const pad = (num) => String(num).padStart(2, '0');
    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  },

  /**
   * Atualiza o display do cronômetro na interface
   */
  updateTimerDisplay() {
    const timerEl = document.getElementById('quiz-timer-text');
    const timerBox = document.getElementById('quiz-timer-container');
    if (!timerEl) return;

    if (this.mode === 'prova') {
      timerEl.textContent = this.formatSeconds(this.timeRemaining);
      // Destaque visual quando faltar menos de 15 minutos
      if (this.timeRemaining <= 900 && timerBox) {
        timerBox.classList.add('timer-warning');
      } else if (timerBox) {
        timerBox.classList.remove('timer-warning');
      }
    } else {
      timerEl.textContent = this.formatSeconds(this.timeElapsed);
      if (timerBox) timerBox.classList.remove('timer-warning');
    }
  },

  showTimeAlert(message) {
    const toast = document.getElementById('quiz-toast');
    if (!toast) {
      alert(message);
      return;
    }
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 6000);
  },

  /**
   * Salva o estado atual no LocalStorage
   */
  saveState() {
    if (this.isFinished) return;
    window.StorageManager.saveInProgress({
      cargoKey: this.cargoKey,
      cargoName: this.cargoName,
      mode: this.mode,
      timeElapsed: this.timeElapsed,
      timeRemaining: this.timeRemaining,
      currentIndex: this.currentIndex,
      answers: this.answers
    });
  },

  /**
   * Renderiza a questão atual na tela
   */
  renderCurrentQuestion() {
    const question = this.questions[this.currentIndex];
    if (!question) return;

    // Para qualquer fala em andamento ao trocar de questão
    if (window.SpeechManager) {
      window.SpeechManager.stop();
    }

    // Elementos da interface
    const numEl = document.getElementById('question-number');
    const subjectEl = document.getElementById('question-subject');
    const textEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('question-options');
    const prevBtn = document.getElementById('btn-prev-question');
    const nextBtn = document.getElementById('btn-next-question');

    if (numEl) numEl.textContent = `Questão ${this.currentIndex + 1} de ${this.questions.length}`;
    if (subjectEl) subjectEl.textContent = question.disciplina;
    if (textEl) textEl.textContent = question.enunciado;

    // Renderizar alternativas
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D', 'E'];
      const selectedAnswer = this.answers[this.currentIndex];

      question.alternativas.forEach((alt, idx) => {
        const optionCard = document.createElement('div');
        optionCard.className = `option-card ${selectedAnswer === idx ? 'selected' : ''}`;
        optionCard.setAttribute('data-index', idx);
        optionCard.id = `option-${idx}`;
        optionCard.tabIndex = 0;
        optionCard.setAttribute('role', 'button');
        optionCard.setAttribute('aria-label', `Alternativa ${letters[idx]}: ${alt}`);

        optionCard.innerHTML = `
          <span class="option-letter">${letters[idx]}</span>
          <span class="option-text">${alt}</span>
        `;

        optionCard.addEventListener('click', () => {
          this.selectOption(idx);
        });

        // Acessibilidade por teclado (Enter / Espaço)
        optionCard.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.selectOption(idx);
          }
        });

        optionsContainer.appendChild(optionCard);
      });
    }

    // Controle dos botões de navegação
    if (prevBtn) {
      prevBtn.disabled = this.currentIndex === 0;
    }
    if (nextBtn) {
      if (this.currentIndex === this.questions.length - 1) {
        nextBtn.innerHTML = `<span>Revisar Final</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      } else {
        nextBtn.innerHTML = `<span>Próxima</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
      }
    }

    // Atualiza progresso e navegação
    this.updateProgress();
    this.updateNavigationGridState();
  },

  /**
   * Seleciona uma alternativa para a questão atual
   */
  selectOption(optionIndex) {
    if (this.isFinished) return;

    // Se já estava selecionada, mantém (ou permite trocar)
    this.answers[this.currentIndex] = optionIndex;
    this.saveState();

    // Atualiza visualmente os cartões da questão
    const container = document.getElementById('question-options');
    if (container) {
      const cards = container.querySelectorAll('.option-card');
      cards.forEach((c, idx) => {
        if (idx === optionIndex) {
          c.classList.add('selected');
        } else {
          c.classList.remove('selected');
        }
      });
    }

    this.updateProgress();
    this.updateNavigationGridState();
  },

  /**
   * Atualiza a barra de progresso
   */
  updateProgress() {
    const answeredCount = Object.keys(this.answers).length;
    const total = this.questions.length;
    const percentage = total > 0 ? (answeredCount / total) * 100 : 0;

    const progressText = document.getElementById('quiz-progress-text');
    const progressBar = document.getElementById('quiz-progress-fill');

    if (progressText) {
      progressText.textContent = `${answeredCount} de ${total} respondidas`;
    }
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }
  },

  /**
   * Constrói o painel de navegação de 1 a 40
   */
  renderNavigationGrid() {
    const grid = document.getElementById('question-nav-grid');
    if (!grid) return;

    grid.innerHTML = '';
    this.questions.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-num-btn';
      btn.id = `nav-num-${idx}`;
      btn.textContent = idx + 1;
      btn.setAttribute('aria-label', `Ir para questão ${idx + 1}`);

      btn.addEventListener('click', () => {
        this.goToQuestion(idx);
      });

      grid.appendChild(btn);
    });

    this.updateNavigationGridState();
  },

  /**
   * Atualiza as cores do painel de navegação
   * - Cinza: não respondida
   * - Azul suave: respondida
   * - Azul destacado: atual
   */
  updateNavigationGridState() {
    this.questions.forEach((_, idx) => {
      const btn = document.getElementById(`nav-num-${idx}`);
      if (!btn) return;

      btn.className = 'nav-num-btn';

      if (this.answers[idx] !== undefined) {
        btn.classList.add('answered'); // Azul suave
      } else {
        btn.classList.add('unanswered'); // Cinza
      }

      if (idx === this.currentIndex) {
        btn.classList.add('current'); // Azul destacado com contorno
      }
    });
  },

  /**
   * Navega para a questão anterior
   */
  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentQuestion();
      this.saveState();
    }
  },

  /**
   * Navega para a próxima questão
   */
  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
      this.saveState();
    } else {
      // Se estiver na última, solicita finalizar
      this.requestFinishQuiz();
    }
  },

  /**
   * Salta direto para uma questão específica
   */
  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.renderCurrentQuestion();
      this.saveState();
    }
  },

  /**
   * Retorna a contagem de questões não respondidas
   */
  getUnansweredCount() {
    const answeredCount = Object.keys(this.answers).length;
    return Math.max(0, this.questions.length - answeredCount);
  },

  /**
   * Abre confirmação de finalização do simulado
   */
  requestFinishQuiz() {
    const unanswered = this.getUnansweredCount();
    const modal = document.getElementById('modal-finish-confirm');
    const msgEl = document.getElementById('finish-modal-message');

    if (!modal) {
      if (confirm(`Deseja realmente finalizar? Você ainda possui ${unanswered} questões sem resposta.`)) {
        this.confirmFinishQuiz();
      }
      return;
    }

    if (unanswered > 0) {
      msgEl.innerHTML = `Deseja realmente finalizar? Você ainda possui <strong>${unanswered}</strong> questão(ões) sem resposta.`;
    } else {
      msgEl.innerHTML = `Parabéns! Você respondeu todas as <strong>40</strong> questões. Deseja finalizar agora para ver o resultado?`;
    }

    modal.classList.add('active');
  },

  /**
   * Conclui o simulado e calcula os resultados
   */
  confirmFinishQuiz(autoFinished = false) {
    this.isFinished = true;
    this.stopTimer();

    if (window.SpeechManager) {
      window.SpeechManager.stop();
    }

    const modal = document.getElementById('modal-finish-confirm');
    if (modal) modal.classList.remove('active');

    // Limpa estado em andamento
    window.StorageManager.clearInProgress();

    // Passa os dados para o módulo ResultsManager
    if (window.ResultsManager) {
      window.ResultsManager.processQuizResults({
        cargoKey: this.cargoKey,
        cargoName: this.cargoName,
        mode: this.mode,
        questions: this.questions,
        answers: this.answers,
        timeElapsed: this.timeElapsed,
        autoFinished: autoFinished
      });
    }
  }
};

window.QuizManager = QuizManager;
