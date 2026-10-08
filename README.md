# Simula VUNESP — Câmara de Itanhaém 2026

Aplicação web estática e responsiva para a realização de simulados preparatórios do Concurso Público da **Câmara Municipal da Estância Balneária de Itanhaém 2026**, organizado pela **Fundação VUNESP**.

---

## 🎯 Cargos Disponíveis

- **Agente Administrativo** (40 questões)
- **Técnico de Informática** (40 questões)

Cada simulado possui **40 questões objetivas** com 5 alternativas (A, B, C, D e E) e apenas uma resposta correta, seguindo a distribuição oficial:

| Disciplina | Questões |
|---|---|
| Língua Portuguesa | 8 |
| Matemática / Raciocínio Lógico | 5 |
| Legislação Municipal de Itanhaém | 3 |
| Conhecimentos Específicos | 24 |
| **Total** | **40** |

---

## 🚀 Principais Funcionalidades

1. **Dois Modos de Realização:**
   - **Modo Prova:** Contagem regressiva de 3 horas com aviso visual e sonoro aos 15 minutos e encerramento automático.
   - **Modo Estudo:** Sem limite de tempo, cronômetro progressivo para resolução no seu ritmo.

2. **Navegação Inteligente:**
   - Uma questão por vez na tela.
   - Painel interativo com os números de 1 a 40 (cinza = não respondida, azul suave = respondida, azul com anel = atual).
   - Barra de progresso contínua ("X de 40 respondidas").
   - Respostas podem ser alteradas livremente antes da finalização.

3. **Confirmação e Segurança:**
   - Ao finalizar, o sistema avisa exatamente quantas questões ainda estão em branco.
   - O gabarito oficial permanece oculto durante a realização do simulado.

4. **Resultados e Estatísticas:**
   - Gráfico de rosca dinâmico em Canvas nativo (acertos, erros e em branco).
   - Tabela detalhada de desempenho por matéria com cálculo percentual.
   - Aproveitamento percentual oficial: `(acertos / 40) * 100`.

5. **Correção Detalhada e Revisão de Erros:**
   - Visualização das 40 questões com justificativa detalhada e fundamentação legal/teórica.
   - Filtros rápidos: *Todas*, *Somente Questões Erradas*, *Somente Questões Corretas* e *Não Respondidas*.
   - Botão **Revisar Meus Erros** na tela de resultados.

6. **Histórico Local e Retomada:**
   - Salva o progresso no `localStorage` a cada resposta.
   - Se fechar a janela, o botão **Continuar Simulado** permite retomar de onde parou.
   - Histórico completo de tentativas anteriores separado por cargo, com opção de rever a correção a qualquer momento.

7. **Acessibilidade por Áudio (Web Speech API):**
   - Botão **Ouvir questão** em português brasileiro (`pt-BR`).
   - Controles de Pausar, Continuar, Parar e ajuste de velocidade (0.75x, 1.0x, 1.25x).
   - **Garantia anti-spoiler:** durante a prova, o leitor vocaliza apenas o enunciado e as alternativas sem revelar o gabarito.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico e acessível.
- **CSS3** puro (Vanilla CSS) com tema acolhedor e paleta suave.
- **JavaScript Vanilla (ES6+)** moderno e modular.
- **Web Speech API** nativa.
- **HTML5 Canvas API** nativa para renderização dos gráficos.
- **LocalStorage** para persistência de dados no navegador.

> **Sem dependências externas, sem npm, sem backend.** Compatível com qualquer servidor estático e com o **GitHub Pages**.

---

## 📂 Estrutura do Projeto

```text
simula-vunesp/
│
├── index.html                  # Interface principal (SPA)
├── css/
│   └── style.css               # Estilos, design system e responsividade
│
├── js/
│   ├── app.js                  # Controlador central e roteamento das views
│   ├── quiz.js                 # Lógica do simulado, cronômetro e navegação
│   ├── results.js              # Cálculo de notas, gráficos Canvas e correção
│   ├── storage.js              # Gerenciador de persistência no LocalStorage
│   └── speech.js               # Gerenciador da síntese de voz (TTS pt-BR)
│
├── data/
│   ├── agente-administrativo.js # 40 questões completas com gabaritos comentados
│   └── tecnico-informatica.js  # 40 questões completas com gabaritos comentados
│
├── assets/
│   └── icons/
│
└── README.md
```

---

## 🌐 Como Executar

### Opção 1: Abrir diretamente no navegador
Basta dar dois cliques no arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Suba todos os arquivos do projeto.
3. Acesse **Settings > Pages** e selecione a branch `main` (ou `master`) na raiz (`/root`).
4. Seu simulado estará publicado e online gratuitamente.
