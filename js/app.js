/**
 * SIMULA VUNESP - ITANHAÉM 2026
 * Controlador Principal da Aplicação (App Controller)
 */

const App = {
  selectedCargoKey: null,
  currentView: 'view-home',

  init() {
    // Inicializa subsistemas
    if (window.SpeechManager) {
      window.SpeechManager.init();
      window.SpeechManager.onStateChange = (state) => this.updateSpeechUI(state);
    }

    this.bindEvents();
    this.checkInProgressQuiz();
    this.renderHomeStatsAndHistory();
    this.switchView('view-home');
  },

  /**
   * Vincula todos os eventos de cliques e interações da interface
   */
  bindEvents() {
    // Botões dos Cartões da Tela Inicial
    const btnStartAdmin = document.getElementById('btn-start-admin');
    const btnStartTI = document.getElementById('btn-start-ti');

    if (btnStartAdmin) {
      btnStartAdmin.addEventListener('click', () => {
        this.openModeSelectModal('agente-administrativo');
      });
    }

    if (btnStartTI) {
      btnStartTI.addEventListener('click', () => {
        this.openModeSelectModal('tecnico-informatica');
      });
    }

    // Clique na logo/brand retorna para a home
    const brandLink = document.getElementById('brand-home-link');
    if (brandLink) {
      brandLink.addEventListener('click', () => {
        if (window.SpeechManager) window.SpeechManager.stop();
        if (window.QuizManager && window.QuizManager.timerInterval) {
          window.QuizManager.stopTimer();
        }
        this.checkInProgressQuiz();
        this.renderHomeStatsAndHistory();
        this.switchView('view-home');
      });
    }

    // Modal de seleção de modo (Prova vs Estudo)
    const btnConfirmModeProva = document.getElementById('btn-mode-prova');
    const btnConfirmModeEstudo = document.getElementById('btn-mode-estudo');
    const btnCloseModeModal = document.getElementById('btn-close-mode-modal');

    if (btnConfirmModeProva) {
      btnConfirmModeProva.addEventListener('click', () => {
        this.startQuizWithSelectedCargo('prova');
      });
    }

    if (btnConfirmModeEstudo) {
      btnConfirmModeEstudo.addEventListener('click', () => {
        this.startQuizWithSelectedCargo('estudo');
      });
    }

    if (btnCloseModeModal) {
      btnCloseModeModal.addEventListener('click', () => {
        this.closeModal('modal-mode-select');
      });
    }

    // Card Continuar Simulado
    const btnResumeQuiz = document.getElementById('btn-resume-quiz');
    if (btnResumeQuiz) {
      btnResumeQuiz.addEventListener('click', () => {
        this.resumeInProgressQuiz();
      });
    }

    // Navegação no Simulado
    const btnPrev = document.getElementById('btn-prev-question');
    const btnNext = document.getElementById('btn-next-question');
    const btnFinish = document.getElementById('btn-finish-quiz');
    const btnExitQuiz = document.getElementById('btn-exit-quiz');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => window.QuizManager.prevQuestion());
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => window.QuizManager.nextQuestion());
    }

    if (btnFinish) {
      btnFinish.addEventListener('click', () => window.QuizManager.requestFinishQuiz());
    }

    if (btnExitQuiz) {
      btnExitQuiz.addEventListener('click', () => {
        if (confirm('Seu progresso está salvo automaticamente. Deseja realmente retornar à página inicial?')) {
          if (window.SpeechManager) window.SpeechManager.stop();
          window.QuizManager.stopTimer();
          this.checkInProgressQuiz();
          this.renderHomeStatsAndHistory();
          this.switchView('view-home');
        }
      });
    }

    // Modal de confirmação de finalização
    const btnModalContinue = document.getElementById('btn-modal-continue');
    const btnModalFinishNow = document.getElementById('btn-modal-finish-now');

    if (btnModalContinue) {
      btnModalContinue.addEventListener('click', () => {
        this.closeModal('modal-finish-confirm');
      });
    }

    if (btnModalFinishNow) {
      btnModalFinishNow.addEventListener('click', () => {
        window.QuizManager.confirmFinishQuiz();
      });
    }

    // Controles de Áudio (Speech) na barra do Simulado
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    const btnAudioStop = document.getElementById('btn-audio-stop');
    const selectAudioRate = document.getElementById('select-audio-rate');

    if (btnAudioToggle) {
      btnAudioToggle.addEventListener('click', () => {
        if (!window.SpeechManager) return;
        if (window.SpeechManager.isPlaying && !window.SpeechManager.isPaused) {
          window.SpeechManager.pause();
        } else if (window.SpeechManager.isPaused) {
          window.SpeechManager.resume();
        } else {
          const curQ = window.QuizManager.questions[window.QuizManager.currentIndex];
          window.SpeechManager.speakQuestion(curQ, false); // Não revela o gabarito durante a prova!
        }
      });
    }

    if (btnAudioStop) {
      btnAudioStop.addEventListener('click', () => {
        if (window.SpeechManager) window.SpeechManager.stop();
      });
    }

    if (selectAudioRate) {
      selectAudioRate.addEventListener('change', (e) => {
        if (window.SpeechManager) {
          window.SpeechManager.setRate(parseFloat(e.target.value) || 1.0);
        }
      });
    }

    // Ações da Tela de Resultados
    const btnResReview = document.getElementById('btn-res-review');
    const btnResReviewErrors = document.getElementById('btn-res-review-errors');
    const btnResRetry = document.getElementById('btn-res-retry');
    const btnResHome = document.getElementById('btn-res-home');

    if (btnResReview) {
      btnResReview.addEventListener('click', () => {
        window.ResultsManager.openReviewScreen('all');
      });
    }

    if (btnResReviewErrors) {
      btnResReviewErrors.addEventListener('click', () => {
        window.ResultsManager.openReviewScreen('wrong');
      });
    }

    if (btnResRetry) {
      btnResRetry.addEventListener('click', () => {
        if (window.ResultsManager.currentResult) {
          this.openModeSelectModal(window.ResultsManager.currentResult.cargoKey);
        }
      });
    }

    if (btnResHome) {
      btnResHome.addEventListener('click', () => {
        this.checkInProgressQuiz();
        this.renderHomeStatsAndHistory();
        this.switchView('view-home');
      });
    }

    // Filtros da Tela de Correção Detalhada
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        window.ResultsManager.setReviewFilter(filter);
      });
    });

    // Botões de Voltar da Correção
    const btnReviewBack = document.getElementById('btn-review-back-results');
    const btnReviewHome = document.getElementById('btn-review-home');

    if (btnReviewBack) {
      btnReviewBack.addEventListener('click', () => {
        if (window.SpeechManager) window.SpeechManager.stop();
        this.switchView('view-results');
      });
    }

    if (btnReviewHome) {
      btnReviewHome.addEventListener('click', () => {
        if (window.SpeechManager) window.SpeechManager.stop();
        this.checkInProgressQuiz();
        this.renderHomeStatsAndHistory();
        this.switchView('view-home');
      });
    }

    // Filtros de Cargo no Histórico
    const historyFilters = document.querySelectorAll('.hist-cargo-pill');
    historyFilters.forEach(pill => {
      pill.addEventListener('click', (e) => {
        historyFilters.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const cargo = e.currentTarget.getAttribute('data-cargo');
        this.renderHistoryList(cargo === 'todos' ? null : cargo);
      });
    });

    // Botão de Limpar Histórico
    const btnClearHistory = document.getElementById('btn-clear-history');
    if (btnClearHistory) {
      btnClearHistory.addEventListener('click', () => {
        if (confirm('Deseja realmente apagar todo o histórico de simulados? Esta ação não pode ser desfeita.')) {
          window.StorageManager.clearHistory();
          this.renderHomeStatsAndHistory();
        }
      });
    }
  },

  /**
   * Alterna entre as telas da aplicação
   */
  switchView(viewId) {
    const views = ['view-home', 'view-quiz', 'view-results', 'view-review'];
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === viewId) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }
    });

    this.currentView = viewId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Abre o modal de seleção de modo (Prova ou Estudo)
   */
  openModeSelectModal(cargoKey) {
    this.selectedCargoKey = cargoKey;
    const modal = document.getElementById('modal-mode-select');
    const modalCargoTitle = document.getElementById('modal-mode-cargo-name');

    if (modalCargoTitle) {
      modalCargoTitle.textContent = cargoKey === 'agente-administrativo' 
        ? 'Agente Administrativo' 
        : 'Técnico de Informática';
    }

    if (modal) modal.classList.add('active');
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  },

  /**
   * Inicia o simulado com o cargo e modo selecionados
   */
  startQuizWithSelectedCargo(mode) {
    this.closeModal('modal-mode-select');
    if (!this.selectedCargoKey) return;

    this.switchView('view-quiz');
    window.QuizManager.startQuiz(this.selectedCargoKey, mode);
  },

  /**
   * Verifica se há simulado em andamento e exibe o card na Home
   */
  checkInProgressQuiz() {
    const inProgress = window.StorageManager.getInProgress();
    const resumeSection = document.getElementById('home-resume-section');
    const resumeTitle = document.getElementById('resume-quiz-title');
    const resumeInfo = document.getElementById('resume-quiz-info');
    const resumeBar = document.getElementById('resume-quiz-bar');

    if (!resumeSection) return;

    if (inProgress) {
      const answeredCount = Object.keys(inProgress.answers || {}).length;
      const total = 40;
      const pct = Math.round((answeredCount / total) * 100);

      if (resumeTitle) resumeTitle.textContent = inProgress.cargoName;
      if (resumeInfo) resumeInfo.textContent = `${answeredCount} de ${total} questões respondidas (${pct}%) • Modo ${inProgress.mode === 'prova' ? 'Prova (3h)' : 'Estudo'}`;
      if (resumeBar) resumeBar.style.width = `${pct}%`;

      resumeSection.style.display = 'block';
    } else {
      resumeSection.style.display = 'none';
    }
  },

  /**
   * Retoma o simulado em andamento
   */
  resumeInProgressQuiz() {
    const inProgress = window.StorageManager.getInProgress();
    if (!inProgress) return;

    this.switchView('view-quiz');
    window.QuizManager.startQuiz(inProgress.cargoKey, inProgress.mode, inProgress);
  },

  /**
   * Renderiza as estatísticas consolidadas e a lista do histórico na Home
   */
  renderHomeStatsAndHistory() {
    const allHistory = window.StorageManager.getHistory();
    const statsTotalSimulados = document.getElementById('stat-total-simulados');
    const statsMediaGeral = document.getElementById('stat-media-geral');
    const statsTotalAcertos = document.getElementById('stat-total-acertos');

    if (statsTotalSimulados && statsMediaGeral && statsTotalAcertos) {
      const count = allHistory.length;
      if (count === 0) {
        statsTotalSimulados.textContent = '0';
        statsMediaGeral.textContent = '0%';
        statsTotalAcertos.textContent = '0';
      } else {
        const sumPct = allHistory.reduce((acc, item) => acc + (item.scorePercentage || 0), 0);
        const sumCorrect = allHistory.reduce((acc, item) => acc + (item.correctCount || 0), 0);
        const avgPct = (sumPct / count).toFixed(1);

        statsTotalSimulados.textContent = count;
        statsMediaGeral.textContent = `${avgPct}%`;
        statsTotalAcertos.textContent = sumCorrect;
      }
    }

    this.renderHistoryList();
  },

  /**
   * Renderiza a lista de tentativas anteriores no histórico
   */
  renderHistoryList(filterCargo = null) {
    const listEl = document.getElementById('home-history-list');
    const emptyNotice = document.getElementById('history-empty-notice');
    if (!listEl) return;

    const items = window.StorageManager.getHistory(filterCargo);
    listEl.innerHTML = '';

    if (items.length === 0) {
      if (emptyNotice) emptyNotice.style.display = 'block';
      return;
    }

    if (emptyNotice) emptyNotice.style.display = 'none';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'history-item-card';

      const dateObj = new Date(item.date);
      const dateFormatted = dateObj.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      card.innerHTML = `
        <div class="hist-card-main">
          <div class="hist-card-header">
            <span class="hist-badge-cargo">${item.cargoName}</span>
            <span class="hist-date">${dateFormatted}</span>
          </div>
          <div class="hist-stats-row">
            <div class="hist-stat-col">
              <span class="hist-stat-label">Aproveitamento</span>
              <span class="hist-stat-val text-pct">${item.scorePercentage}%</span>
            </div>
            <div class="hist-stat-col">
              <span class="hist-stat-label">Acertos / Erros</span>
              <span class="hist-stat-val">${item.correctCount} acertos • ${item.errorCount} erros</span>
            </div>
            <div class="hist-stat-col">
              <span class="hist-stat-label">Tempo</span>
              <span class="hist-stat-val">${item.timeFormatted}</span>
            </div>
          </div>
        </div>
        <div class="hist-card-action">
          <button type="button" class="btn-hist-review" data-id="${item.id}">
            Rever Correção
          </button>
        </div>
      `;

      const reviewBtn = card.querySelector('.btn-hist-review');
      if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
          const itemToLoad = window.StorageManager.getHistoryItemById(item.id);
          if (itemToLoad) {
            window.ResultsManager.loadFromHistory(itemToLoad);
          }
        });
      }

      listEl.appendChild(card);
    });
  },

  /**
   * Atualiza os ícones e texto do botão de áudio de acordo com o estado do sintetizador
   */
  updateSpeechUI(state) {
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    const btnAudioStop = document.getElementById('btn-audio-stop');
    const audioStatusIndicator = document.getElementById('audio-status-indicator');

    if (!btnAudioToggle) return;

    if (state.isPlaying && !state.isPaused) {
      btnAudioToggle.classList.add('playing');
      btnAudioToggle.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        <span>Pausar</span>
      `;
      if (btnAudioStop) btnAudioStop.style.display = 'inline-flex';
      if (audioStatusIndicator) {
        audioStatusIndicator.textContent = 'Lendo questão...';
        audioStatusIndicator.classList.add('active');
      }
    } else if (state.isPaused) {
      btnAudioToggle.classList.remove('playing');
      btnAudioToggle.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>Continuar</span>
      `;
      if (btnAudioStop) btnAudioStop.style.display = 'inline-flex';
      if (audioStatusIndicator) {
        audioStatusIndicator.textContent = 'Leitura pausada';
        audioStatusIndicator.classList.add('active');
      }
    } else {
      btnAudioToggle.classList.remove('playing');
      btnAudioToggle.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <span>Ouvir questão</span>
      `;
      if (btnAudioStop) btnAudioStop.style.display = 'none';
      if (audioStatusIndicator) {
        audioStatusIndicator.textContent = '';
        audioStatusIndicator.classList.remove('active');
      }
    }
  }
};

window.App = App;

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
