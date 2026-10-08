/**
 * SIMULA VUNESP - ITANHAÉM 2026
 * Módulo de Armazenamento Local (LocalStorage)
 */

const STORAGE_KEYS = {
  IN_PROGRESS: 'simula_vunesp_in_progress',
  HISTORY: 'simula_vunesp_history',
  PREFERENCES: 'simula_vunesp_prefs'
};

const StorageManager = {
  /**
   * Salva o estado do simulado em andamento
   */
  saveInProgress(quizState) {
    try {
      const data = {
        cargoKey: quizState.cargoKey,
        cargoName: quizState.cargoName,
        mode: quizState.mode, // 'prova' ou 'estudo'
        timeElapsed: quizState.timeElapsed,
        timeRemaining: quizState.timeRemaining,
        currentIndex: quizState.currentIndex,
        answers: quizState.answers,
        startedAt: quizState.startedAt || new Date().toISOString(),
        lastUpdatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.IN_PROGRESS, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Erro ao salvar simulado em andamento:', e);
      return false;
    }
  },

  /**
   * Recupera o simulado em andamento, se houver
   */
  getInProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.IN_PROGRESS);
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Validação básica da estrutura
      if (data && data.cargoKey && data.answers && typeof data.currentIndex === 'number') {
        return data;
      }
      return null;
    } catch (e) {
      console.error('Erro ao ler simulado em andamento:', e);
      return null;
    }
  },

  /**
   * Remove o simulado em andamento
   */
  clearInProgress() {
    try {
      localStorage.removeItem(STORAGE_KEYS.IN_PROGRESS);
    } catch (e) {
      console.error('Erro ao limpar simulado em andamento:', e);
    }
  },

  /**
   * Salva uma tentativa finalizada no histórico
   */
  saveHistoryItem(resultItem) {
    try {
      const history = this.getHistory();
      // Insere o novo item no início da lista
      history.unshift({
        id: 'sim_' + Date.now(),
        date: new Date().toISOString(),
        cargoKey: resultItem.cargoKey,
        cargoName: resultItem.cargoName,
        mode: resultItem.mode,
        totalQuestions: resultItem.totalQuestions,
        correctCount: resultItem.correctCount,
        errorCount: resultItem.errorCount,
        unansweredCount: resultItem.unansweredCount,
        scorePercentage: resultItem.scorePercentage,
        timeFormatted: resultItem.timeFormatted,
        timeSeconds: resultItem.timeSeconds,
        bySubject: resultItem.bySubject,
        answers: resultItem.answers // Guarda as respostas para poder rever a correção no futuro!
      });
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      return true;
    } catch (e) {
      console.error('Erro ao salvar no histórico:', e);
      return false;
    }
  },

  /**
   * Obtém todo o histórico de simulados salvos
   */
  getHistory(cargoKey = null) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
      if (!raw) return [];
      const list = JSON.parse(raw);
      if (!Array.isArray(list)) return [];
      if (cargoKey) {
        return list.filter(item => item.cargoKey === cargoKey);
      }
      return list;
    } catch (e) {
      console.error('Erro ao ler histórico:', e);
      return [];
    }
  },

  /**
   * Obtém um item específico do histórico pelo ID
   */
  getHistoryItemById(id) {
    const list = this.getHistory();
    return list.find(item => item.id === id) || null;
  },

  /**
   * Limpa o histórico de tentativas (opcionalmente por cargo)
   */
  clearHistory(cargoKey = null) {
    try {
      if (!cargoKey) {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
      } else {
        const history = this.getHistory().filter(item => item.cargoKey !== cargoKey);
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      }
      return true;
    } catch (e) {
      console.error('Erro ao limpar histórico:', e);
      return false;
    }
  },

  /**
   * Salva preferências do usuário (ex: velocidade de voz)
   */
  savePreference(key, value) {
    try {
      const prefs = this.getPreferences();
      prefs[key] = value;
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs));
    } catch (e) {
      console.error('Erro ao salvar preferência:', e);
    }
  },

  /**
   * Obtém preferências salvas
   */
  getPreferences() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
};

window.StorageManager = StorageManager;
