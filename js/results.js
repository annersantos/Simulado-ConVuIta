/**
 * SIMULA VUNESP - ITANHAÉM 2026
 * Módulo de Resultados e Correção Detalhada
 */

const ResultsManager = {
  currentResult: null,
  activeFilter: 'all', // 'all', 'wrong', 'correct', 'unanswered'

  /**
   * Processa os resultados de um simulado recém-concluído
   */
  processQuizResults(payload) {
    const { cargoKey, cargoName, mode, questions, answers, timeElapsed } = payload;

    let correctCount = 0;
    let errorCount = 0;
    let unansweredCount = 0;

    // Estatísticas por disciplina
    const bySubject = {};

    questions.forEach((q, idx) => {
      const subject = q.disciplina || 'Geral';
      if (!bySubject[subject]) {
        bySubject[subject] = { correct: 0, total: 0 };
      }
      bySubject[subject].total++;

      const userAnswer = answers[idx];
      if (userAnswer === undefined || userAnswer === null) {
        unansweredCount++;
      } else if (userAnswer === q.correta) {
        correctCount++;
        bySubject[subject].correct++;
      } else {
        errorCount++;
      }
    });

    const totalQuestions = questions.length;
    const scorePercentage = totalQuestions > 0 ? ((correctCount / totalQuestions) * 100).toFixed(1) : '0.0';

    const timeFormatted = this.formatDuration(timeElapsed);

    const resultData = {
      cargoKey,
      cargoName,
      mode,
      questions,
      answers,
      totalQuestions,
      correctCount,
      errorCount,
      unansweredCount,
      scorePercentage: parseFloat(scorePercentage),
      timeSeconds: timeElapsed,
      timeFormatted,
      bySubject
    };

    this.currentResult = resultData;

    // Salva no histórico LocalStorage
    window.StorageManager.saveHistoryItem(resultData);

    // Exibe tela de resultados
    this.displayResults(resultData);
    if (window.App) {
      window.App.switchView('view-results');
    }
  },

  /**
   * Formata duração em texto amigável (ex: "1h 35min" ou "42min 10s")
   */
  formatDuration(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    if (minutes > 0) {
      return `${minutes}min ${secs}s`;
    }
    return `${secs} segundos`;
  },

  /**
   * Renderiza a tela de resultados
   */
  displayResults(data) {
    // Cabeçalho de resultados
    const cargoEl = document.getElementById('res-cargo-name');
    const scoreEl = document.getElementById('res-score-pct');
    const correctEl = document.getElementById('res-correct-count');
    const errorEl = document.getElementById('res-error-count');
    const unansEl = document.getElementById('res-unanswered-count');
    const timeEl = document.getElementById('res-time-spent');

    if (cargoEl) cargoEl.textContent = data.cargoName;
    if (scoreEl) scoreEl.textContent = `${data.scorePercentage}%`;
    if (correctEl) correctEl.textContent = data.correctCount;
    if (errorEl) errorEl.textContent = data.errorCount;
    if (unansEl) unansEl.textContent = data.unansweredCount;
    if (timeEl) timeEl.textContent = data.timeFormatted;

    // Renderizar gráfico de rosca nativo em Canvas
    this.drawDonutChart(data.correctCount, data.errorCount, data.unansweredCount);

    // Renderizar tabela por matérias
    this.renderSubjectTable(data.bySubject);
  },

  /**
   * Desenha o gráfico de rosca (Donut Chart) via Canvas API nativa
   */
  drawDonutChart(correct, error, unanswered) {
    const canvas = document.getElementById('results-donut-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Ajuste de nitidez para telas Retina / High-DPI
    const width = 220;
    const height = 220;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const total = correct + error + unanswered;
    if (total === 0) return;

    const centerX = width / 2;
    const centerY = height / 2;
    const outerRadius = 90;
    const innerRadius = 58;

    const slices = [
      { value: correct, color: '#2E8B57' },    // Verde suave (acertos)
      { value: error, color: '#D66A6A' },      // Vermelho suave (erros)
      { value: unanswered, color: '#CBD5E1' }  // Cinza claro (não respondidas)
    ];

    let startAngle = -Math.PI / 2;

    slices.forEach(slice => {
      if (slice.value <= 0) return;
      const sliceAngle = (slice.value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle, false);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fillStyle = slice.color;
      ctx.fill();

      startAngle = endAngle;
    });

    // Texto no centro do Donut
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#334155';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillText(`${correct}/${total}`, centerX, centerY - 6);

    ctx.fillStyle = '#64748B';
    ctx.font = '12px system-ui, -apple-system, sans-serif';
    ctx.fillText('Acertos', centerX, centerY + 14);
  },

  /**
   * Renderiza a tabela de desempenho por matéria
   */
  renderSubjectTable(bySubject) {
    const tbody = document.getElementById('subject-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const order = [
      'Língua Portuguesa',
      'Matemática',
      'Legislação Municipal',
      'Conhecimentos Específicos'
    ];

    // Ordena de acordo com o padrão do edital
    const sortedSubjects = Object.keys(bySubject).sort((a, b) => {
      const idxA = order.indexOf(a);
      const idxB = order.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      return a.localeCompare(b);
    });

    sortedSubjects.forEach(subject => {
      const stats = bySubject[subject];
      const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="td-subject"><strong>${subject}</strong></td>
        <td class="td-correct">${stats.correct}</td>
        <td class="td-total">${stats.total}</td>
        <td class="td-pct">
          <div class="table-progress-bar">
            <div class="table-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span>${pct}%</span>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  /**
   * Prepara e abre a tela de correção detalhada
   */
  openReviewScreen(filter = 'all') {
    this.activeFilter = filter;
    if (!this.currentResult) {
      alert('Nenhum resultado de simulado disponível para revisão.');
      return;
    }

    if (window.App) {
      window.App.switchView('view-review');
    }

    this.renderReviewQuestions();
  },

  /**
   * Define o filtro de questões na tela de revisão
   */
  setReviewFilter(filter) {
    this.activeFilter = filter;
    // Atualiza botões de filtro
    const filterButtons = document.querySelectorAll('.filter-pill');
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.renderReviewQuestions();
  },

  /**
   * Renderiza a lista de questões corrigidas
   */
  renderReviewQuestions() {
    const container = document.getElementById('review-questions-list');
    const emptyNotice = document.getElementById('review-empty-notice');
    if (!container || !this.currentResult) return;

    container.innerHTML = '';
    const { questions, answers } = this.currentResult;
    const letters = ['A', 'B', 'C', 'D', 'E'];

    let visibleCount = 0;

    questions.forEach((q, idx) => {
      const userAnswer = answers[idx];
      const isUnanswered = userAnswer === undefined || userAnswer === null;
      const isCorrect = !isUnanswered && userAnswer === q.correta;
      const isWrong = !isUnanswered && userAnswer !== q.correta;

      // Filtragem
      if (this.activeFilter === 'wrong' && !isWrong) return;
      if (this.activeFilter === 'correct' && !isCorrect) return;
      if (this.activeFilter === 'unanswered' && !isUnanswered) return;

      visibleCount++;

      let statusBadge = '';
      let cardClass = '';

      if (isCorrect) {
        statusBadge = `<span class="review-status-badge badge-correct">Correta</span>`;
        cardClass = 'status-correct';
      } else if (isWrong) {
        statusBadge = `<span class="review-status-badge badge-wrong">Incorreta</span>`;
        cardClass = 'status-wrong';
      } else {
        statusBadge = `<span class="review-status-badge badge-unanswered">Não respondida</span>`;
        cardClass = 'status-unanswered';
      }

      const qCard = document.createElement('div');
      qCard.className = `review-question-card ${cardClass}`;
      qCard.id = `review-q-${idx}`;

      let optionsHtml = '';
      q.alternativas.forEach((alt, optIdx) => {
        let optStateClass = '';
        let optBadge = '';

        if (optIdx === q.correta) {
          optStateClass = 'correct-answer';
          optBadge = '<span class="opt-tag tag-correct-ans">Gabarito oficial</span>';
        }
        if (!isUnanswered && optIdx === userAnswer) {
          if (isCorrect) {
            optStateClass = 'correct-answer selected-by-user';
            optBadge = '<span class="opt-tag tag-correct-ans">Sua resposta (Correta)</span>';
          } else {
            optStateClass = 'wrong-answer selected-by-user';
            optBadge = '<span class="opt-tag tag-wrong-ans">Sua resposta (Incorreta)</span>';
          }
        }

        optionsHtml += `
          <div class="review-option-item ${optStateClass}">
            <div class="review-opt-left">
              <span class="review-opt-letter">${letters[optIdx]}</span>
              <span class="review-opt-text">${alt}</span>
            </div>
            ${optBadge}
          </div>
        `;
      });

      qCard.innerHTML = `
        <div class="review-q-header">
          <div class="review-q-meta">
            <span class="review-q-number">Questão ${idx + 1}</span>
            <span class="review-q-subject">${q.disciplina}</span>
          </div>
          <div class="review-q-actions">
            ${statusBadge}
            <button type="button" class="btn-review-audio" data-index="${idx}" aria-label="Ouvir questão com explicação">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span>Ouvir</span>
            </button>
          </div>
        </div>

        <div class="review-q-statement">${q.enunciado}</div>

        <div class="review-q-options">
          ${optionsHtml}
        </div>

        <div class="review-explanation-box">
          <div class="explanation-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <strong>Explicação e Fundamentação:</strong>
          </div>
          <p class="explanation-content">${q.explicacao || 'Gabarito oficial fundamentado de acordo com a banca examinadora.'}</p>
        </div>
      `;

      // Event listener do áudio na questão da revisão (inclui gabarito e explicação!)
      const audioBtn = qCard.querySelector('.btn-review-audio');
      if (audioBtn) {
        audioBtn.addEventListener('click', () => {
          if (window.SpeechManager) {
            window.SpeechManager.speakQuestion(q, true);
          }
        });
      }

      container.appendChild(qCard);
    });

    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  },

  /**
   * Abre um item histórico existente para visualizar seus resultados e correção
   */
  loadFromHistory(historyItem) {
    if (!historyItem) return;

    // Recupera a lista original de questões pelo cargoKey
    let questions = [];
    if (historyItem.cargoKey === 'agente-administrativo') {
      questions = window.QUESTOES_AGENTE_ADMINISTRATIVO || [];
    } else if (historyItem.cargoKey === 'tecnico-informatica') {
      questions = window.QUESTOES_TECNICO_INFORMATICA || [];
    }

    this.currentResult = {
      cargoKey: historyItem.cargoKey,
      cargoName: historyItem.cargoName,
      mode: historyItem.mode,
      questions: questions,
      answers: historyItem.answers || {},
      totalQuestions: historyItem.totalQuestions,
      correctCount: historyItem.correctCount,
      errorCount: historyItem.errorCount,
      unansweredCount: historyItem.unansweredCount,
      scorePercentage: historyItem.scorePercentage,
      timeSeconds: historyItem.timeSeconds,
      timeFormatted: historyItem.timeFormatted,
      bySubject: historyItem.bySubject
    };

    this.displayResults(this.currentResult);
    if (window.App) {
      window.App.switchView('view-results');
    }
  }
};

window.ResultsManager = ResultsManager;
