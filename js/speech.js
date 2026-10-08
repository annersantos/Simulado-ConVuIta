/**
 * SIMULA VUNESP - ITANHAÉM 2026
 * Módulo de Acessibilidade por Áudio (Web Speech API)
 */

const SpeechManager = {
  isSupported: 'speechSynthesis' in window,
  synth: window.speechSynthesis || null,
  currentUtterance: null,
  rate: 1.0, // 0.75, 1.0, 1.25
  isPlaying: false,
  isPaused: false,
  selectedVoice: null,
  onStateChange: null, // Callback para atualizar a UI

  init() {
    if (!this.isSupported) {
      console.warn('SpeechSynthesis não suportado neste navegador.');
      return;
    }

    // Carregar preferência de velocidade
    const prefs = window.StorageManager ? window.StorageManager.getPreferences() : {};
    if (prefs.speechRate) {
      this.rate = parseFloat(prefs.speechRate) || 1.0;
    }

    // Carregar vozes disponíveis
    this.loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  },

  loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioriza vozes em pt-BR (Google português, Luciana, Daniel, Francisca, etc.)
    this.selectedVoice = voices.find(v => v.lang === 'pt-BR') ||
                         voices.find(v => v.lang && v.lang.startsWith('pt')) ||
                         null;
  },

  /**
   * Prepara o texto para leitura da questão
   * @param {Object} question Objeto da questão
   * @param {Boolean} includeAnswer Se true, inclui o gabarito e a explicação (usado apenas na revisão!)
   */
  buildSpeechText(question, includeAnswer = false) {
    if (!question) return '';

    let text = `Disciplina: ${question.disciplina}. `;
    text += `Enunciado da questão: ${question.enunciado}. `;
    text += `Alternativas: `;

    const letras = ['A', 'B', 'C', 'D', 'E'];
    question.alternativas.forEach((alt, idx) => {
      text += `Alternativa ${letras[idx]}: ${alt}. `;
    });

    if (includeAnswer) {
      const letraCorreta = letras[question.correta];
      text += `Gabarito oficial: Alternativa ${letraCorreta}. `;
      if (question.explicacao) {
        text += `Explicação: ${question.explicacao}`;
      }
    }

    return text;
  },

  /**
   * Inicia a leitura em voz alta da questão
   */
  speakQuestion(question, includeAnswer = false) {
    if (!this.isSupported || !this.synth) {
      alert('A síntese de voz não é suportada pelo seu navegador.');
      return;
    }

    this.stop(); // Interrompe qualquer leitura anterior

    const textToSpeak = this.buildSpeechText(question, includeAnswer);
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'pt-BR';
    utterance.rate = this.rate;
    utterance.pitch = 1.0;

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.notifyState();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notifyState();
    };

    utterance.onerror = (e) => {
      console.warn('Erro na síntese de voz:', e);
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
      this.notifyState();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  },

  /**
   * Pausa a leitura atual
   */
  pause() {
    if (!this.synth || !this.isPlaying) return;
    this.synth.pause();
    this.isPaused = true;
    this.notifyState();
  },

  /**
   * Retoma a leitura pausada
   */
  resume() {
    if (!this.synth || !this.isPaused) return;
    this.synth.resume();
    this.isPaused = false;
    this.notifyState();
  },

  /**
   * Para completamente a leitura
   */
  stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.notifyState();
  },

  /**
   * Ajusta a velocidade de fala
   * @param {Number} newRate 0.75, 1.0 ou 1.25
   */
  setRate(newRate) {
    this.rate = Math.max(0.75, Math.min(1.25, parseFloat(newRate) || 1.0));
    if (window.StorageManager) {
      window.StorageManager.savePreference('speechRate', this.rate);
    }
  },

  /**
   * Notifica a interface sobre a mudança de estado
   */
  notifyState() {
    if (typeof this.onStateChange === 'function') {
      this.onStateChange({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        rate: this.rate
      });
    }
  }
};

window.SpeechManager = SpeechManager;
