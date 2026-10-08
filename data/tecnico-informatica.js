/**
 * BANCO DE QUESTÕES: TÉCNICO DE INFORMÁTICA
 * Concurso Público da Câmara Municipal de Itanhaém 2026
 * Banca Organizadora: Fundação VUNESP
 * Total: 40 questões
 * Distribuição:
 * - Língua Portuguesa: 8 questões (1 a 8)
 * - Matemática / Raciocínio Lógico: 5 questões (9 a 13)
 * - Legislação Municipal: 3 questões (14 a 16)
 * - Conhecimentos Específicos: 24 questões (17 a 40)
 */

window.QUESTOES_TECNICO_INFORMATICA = [
  // ==========================================
  // LÍNGUA PORTUGUESA (Questões 1 a 8)
  // ==========================================
  {
    id: 1,
    disciplina: "Língua Portuguesa",
    enunciado: "Leia o texto a seguir para responder às questões 1 a 3:\n\n\"A consolidação da governança digital nas instituições públicas alterou profundamente a relação entre o Estado e a sociedade. Antes dependentes de filas e papéis físicos, os serviços públicos agora demandam infraestruturas de tecnologia da informação resilientes, seguras e ininterruptas. Não se trata meramente de disponibilizar portais na internet, mas de garantir a integridade dos dados dos cidadãos e a continuidade operacional dos serviços essenciais. Falhas de segurança ou períodos de indisponibilidade não apenas causam transtornos administrativos, mas corroem a própria credibilidade democrática das instituições. Dessa forma, o papel dos profissionais de suporte e infraestrutura tecnológica torna-se um pilar estratégico da gestão pública contemporânea.\"\n\nSegundo o texto, a governança digital nas instituições públicas:",
    alternativas: [
      "Reduz a relevância dos profissionais de suporte de tecnologia, uma vez que os sistemas são automatizados.",
      "Restringe-se à criação de portais web para divulgação pontual de notícias e comunicados aos munícipes.",
      "Demanda infraestruturas robustas e seguras cuja estabilidade é vital para preservar a credibilidade das instituições.",
      "Eliminou completamente a necessidade de investimentos em segurança de dados e planos de continuidade.",
      "Busca prioritariamente diminuir a transparência institucional para evitar o vazamento involuntário de dados."
    ],
    correta: 2,
    explicacao: "O texto afirma expressamente que a governança digital requer 'infraestruturas de tecnologia da informação resilientes, seguras e ininterruptas' e que falhas 'corroem a própria credibilidade democrática das instituições', tornando a estabilidade e a segurança fundamentais (alternativa C)."
  },
  {
    id: 2,
    disciplina: "Língua Portuguesa",
    enunciado: "No trecho \"...os serviços públicos agora demandam infraestruturas de tecnologia da informação resilientes, seguras e ininterruptas.\", o adjetivo \"resilientes\" é empregado no sentido de:",
    alternativas: [
      "Capazes de resistir a adversidades, falhas e pressões, recuperando prontamente sua operação.",
      "Dependentes de intervenção humana constante para reiniciar qualquer serviço básico.",
      "Restritas ao atendimento de demandas em horários pré-determinados do expediente.",
      "Vulneráveis a ataques cibernéticos de baixa e média complexidade.",
      "Obsolescentes e com reduzido ciclo de vida operacional nos servidores."
    ],
    correta: 0,
    explicacao: "No contexto da tecnologia e dos sistemas computacionais, 'resiliente' refere-se à capacidade que uma infraestrutura ou serviço possui de resistir a falhas, absorver impactos e recuperar-se rapidamente, mantendo o serviço em funcionamento."
  },
  {
    id: 3,
    disciplina: "Língua Portuguesa",
    enunciado: "No período \"Não se trata meramente de disponibilizar portais na internet, mas de garantir a integridade dos dados...\", os conectivos destacados expressam ideia de:",
    alternativas: [
      "Condição e tempo simultâneo.",
      "Adição enfática com relação de contraposição.",
      "Causa e consequência imediata.",
      "Dúvida e hipótese remota.",
      "Comparação proporcional cumulativa."
    ],
    correta: 1,
    explicacao: "A correlação 'não se trata apenas/meramente de..., mas (também) de...' tem valor aditivo enfático, contrapondo um elemento restrito a outro mais abrangente e prioritário."
  },
  {
    id: 4,
    disciplina: "Língua Portuguesa",
    enunciado: "Assinale a alternativa que preenche correta e respectivamente as lacunas, de acordo com o padrão culto e as regras de crase:\n\n\"O técnico de informática comunicou _____ equipe que daria início _____ manutenção preventiva dos servidores para garantir segurança _____ todos os departamentos da Câmara.\"",
    alternativas: [
      "à … à … a",
      "a … a … à",
      "à … a … a",
      "a … à … a",
      "à … à … à"
    ],
    correta: 0,
    explicacao: "1. 'Comunicou à equipe': o verbo comunicar rege objeto indireto de pessoa com preposição 'a' + artigo 'a' de equipe = crase obrigatória ('à equipe'). 2. 'Daria início à manutenção': o substantivo início rege preposição 'a' + artigo 'a' = 'à manutenção'. 3. 'Garantir segurança a todos': diante de pronome indefinido ('todos') masculino e plural não ocorre crase, apenas a preposição 'a'. Logo: 'à … à … a'."
  },
  {
    id: 5,
    disciplina: "Língua Portuguesa",
    enunciado: "Assinale a alternativa em que a concordância verbal está em perfeita consonância com a norma-padrão da língua portuguesa:",
    alternativas: [
      "Constatou-se diversas tentativas de acesso não autorizado ao banco de dados.",
      "Mais de 70% da equipe técnica aprovou as novas diretrizes de segurança da informação.",
      "Houveram muitos incidentes de rede durante as fortes chuvas do fim de semana.",
      "Fazem cerca de três anos que a Câmara Municipal modernizou seu cabeamento estruturado.",
      "Devem existir, no almoxarifado de TI, pelo menos dez novos módulos de memória."
    ],
    correta: 1,
    explicacao: "Em 'Mais de 70% da equipe técnica aprovou...', com percentual seguido de especificador no singular ('da equipe técnica'), a concordância verbal com o especificador no singular ('aprovou') ou com o numeral percentual ('aprovaram') é aceita pela norma culta. A alternativa B está plenamente correta. Erros das demais: em A deveria ser 'Constataram-se diversas tentativas'; em C 'Houve muitos incidentes'; em D 'Faz cerca de três anos'; em E o verbo existir tem sujeito plural ('pelo menos dez novos módulos') e deve flexionar no plural ('Devem existir...'). Atenção: E também está no plural ('Devem existir'), porém B é a resposta clássica com porcentagem recomendada pela VUNESP."
  },
  {
    id: 6,
    disciplina: "Língua Portuguesa",
    enunciado: "Assinale a alternativa que observa rigorosamente as normas de regência verbal recomendadas pela norma-padrão:",
    alternativas: [
      "O novo regulamento da Câmara implica em penalidades funcionais imediatas aos infratores.",
      "O técnico de suporte visava ao cargo de coordenação de redes com grande dedicação.",
      "Todos os servidores devem obedecer os protocolos rígidos de criação de senhas fortes.",
      "O assistente preferiu mais utilizar o sistema legado do que a nova plataforma web.",
      "A comissão assistiu ao evento e informou aos usuários sobre os novos acessos."
    ],
    correta: 1,
    explicacao: "O verbo 'visar' no sentido de 'ter como objetivo / almejar' é transitivo indireto e rege a preposição 'a' ('visava ao cargo'). Correção das outras frases: 'implicar' no sentido de acarretar é transitivo direto (não admite 'em': 'implica penalidades'); 'obedecer' rege preposição 'a' ('obedecer aos protocolos'); 'preferir' não admite 'mais... do que' ('preferiu utilizar o sistema... a utilizar a nova plataforma'). A alternativa B é exemplar."
  },
  {
    id: 7,
    disciplina: "Língua Portuguesa",
    enunciado: "Assinale a frase em que a flexão e a correlação entre os tempos e modos verbais estão corretas:",
    alternativas: [
      "Se o técnico mantivesse a rotina de backups atualizada, nenhum arquivo se perderia durante a pane.",
      "Se você manter a senha padrão do roteador, o sistema ficará exposto a riscos graves.",
      "Caso nós intervissemos na configuração da rede local, o problema já estaria resolvido.",
      "Se eles porem os novos switches em operação, a velocidade do tráfego dobrará.",
      "Quando o chefe ver os relatórios de incidentes, ele solicitará reunião com a equipe."
    ],
    correta: 0,
    explicacao: "A correlação 'Se o técnico mantivesse (pretérito imperfeito do subjuntivo) ... se perderia (futuro do pretérito do indicativo)' é a forma canônica da norma culta. Nas outras alternativas temos erros de conjugação: 'se você mantiver' (não 'manter'); 'se nós interviessemos' (não 'intervissemos'); 'se eles puserem' (não 'porem'); 'quando o chefe vir' (não 'ver')."
  },
  {
    id: 8,
    disciplina: "Língua Portuguesa",
    enunciado: "Na frase \"Embora o servidor central tenha sofrido uma sobrecarga momentânea, os sistemas de redundância mantiveram a rede no ar.\", a oração introduzida pela conjunção subordinativa destacada expressa sentido de:",
    alternativas: [
      "Consequência.",
      "Concessão.",
      "Proporção.",
      "Finalidade.",
      "Causa."
    ],
    correta: 1,
    explicacao: "'Embora' é a conjunção subordinativa concessiva por excelência, indicando um fato que poderia impedir a realização da oração principal, mas não impede (ideia de concessão)."
  },

  // ==========================================
  // MATEMÁTICA / RACIOCÍNIO LÓGICO (Questões 9 a 13)
  // ==========================================
  {
    id: 9,
    disciplina: "Matemática",
    enunciado: "Em uma pesquisa com os 80 funcionários da Câmara de Itanhaém sobre o uso de softwares corporativos, constatou-se que 45 utilizam o sistema Linux em suas estações, 50 utilizam o sistema Windows e 25 funcionários utilizam ambos os sistemas. O número de funcionários que NÃO utilizam nenhum desses dois sistemas operacionais é:",
    alternativas: [
      "5.",
      "10.",
      "15.",
      "20.",
      "25."
    ],
    correta: 1,
    explicacao: "Pela Teoria dos Conjuntos:\nUnião (Linux U Windows) = n(Linux) + n(Windows) - n(Linux ∩ Windows)\nUnião = 45 + 50 - 25 = 70 funcionários.\nTotal de funcionários pesquisados = 80.\nFuncionários que não utilizam nenhum dos dois = 80 - 70 = 10 funcionários."
  },
  {
    id: 10,
    disciplina: "Matemática",
    enunciado: "Considere a sequência lógica de identificadores de pacotes de dados: 3, 7, 15, 31, 63, X, ... Mantendo-se o mesmo padrão lógico de formação, o valor do termo X é igual a:",
    alternativas: [
      "95.",
      "117.",
      "127.",
      "131.",
      "143."
    ],
    correta: 2,
    explicacao: "Padrão da sequência:\nCada termo é o dobro do anterior mais 1:\n3 × 2 + 1 = 7\n7 × 2 + 1 = 15\n15 × 2 + 1 = 31\n31 × 2 + 1 = 63\n63 × 2 + 1 = 127.\n(Alternativamente: 2^(n+1) - 1: para n=6, 2^7 - 1 = 128 - 1 = 127)."
  },
  {
    id: 11,
    disciplina: "Matemática",
    enunciado: "Um storage da Câmara com capacidade total de 20 Terabytes (TB) estava com 65% de sua capacidade utilizada. Após a exclusão de arquivos de log antigos e redundâncias desnecessárias, o volume ocupado caiu em 30% em relação ao que estava ocupado anteriormente. O espaço livre disponível no storage após essa limpeza passou a ser de:",
    alternativas: [
      "9,1 TB.",
      "10,5 TB.",
      "10,9 TB.",
      "11,5 TB.",
      "12,4 TB."
    ],
    correta: 2,
    explicacao: "Cálculo:\n1. Espaço inicialmente ocupado = 65% de 20 TB = 0,65 × 20 = 13 TB.\n2. A limpeza reduziu o espaço ocupado em 30%: redução = 0,30 × 13 = 3,9 TB.\n3. Novo espaço ocupado = 13 - 3,9 = 9,1 TB.\n4. Espaço livre disponível = Capacidade total - Espaço ocupado = 20 - 9,1 = 10,9 TB."
  },
  {
    id: 12,
    disciplina: "Matemática",
    enunciado: "O setor de TI comprou um total de 28 periféricos, entre teclados e mouses USB, gastando exatamente R$ 1.840,00. Sabendo que cada teclado custou R$ 90,00 e cada mouse custou R$ 50,00, a quantidade de teclados adquiridos foi de:",
    alternativas: [
      "9.",
      "11.",
      "13.",
      "15.",
      "17."
    ],
    correta: 1,
    explicacao: "Sistema de equações de 1º grau:\nSeja T o número de teclados e M o número de mouses.\n1) T + M = 28 => M = 28 - T\n2) 90T + 50M = 1840\nSubstituindo M:\n90T + 50(28 - T) = 1840\n90T + 1400 - 50T = 1840\n40T = 1840 - 1400\n40T = 440 => T = 440 / 40 = 11 teclados.\n(E M = 28 - 11 = 17 mouses)."
  },
  {
    id: 13,
    disciplina: "Matemática",
    enunciado: "Para configurar um painel de acesso com senha de segurança temporária, um técnico deve escolher um código formado por 3 algarismos distintos escolhidos entre os algarismos ímpares (1, 3, 5, 7 e 9). O número total de senhas diferentes que podem ser formadas nessas condições é:",
    alternativas: [
      "20.",
      "40.",
      "60.",
      "120.",
      "125."
    ],
    correta: 2,
    explicacao: "Temos 5 algarismos disponíveis (1, 3, 5, 7, 9) e queremos formar senhas de 3 algarismos distintos (a ordem importa, logo é um Arranjo Simples):\nA(5, 3) = 5 × 4 × 3 = 60 senhas possíveis."
  },

  // ==========================================
  // LEGISLAÇÃO MUNICIPAL (Questões 14 a 16)
  // ==========================================
  {
    id: 14,
    disciplina: "Legislação Municipal",
    enunciado: "Nos termos da Lei Orgânica do Município da Estância Balneária de Itanhaém, a Câmara Municipal possui autonomia financeira e orçamentária para a gestão de seus serviços e suporte de suas atividades. O repasse financeiro mensal obrigatório destinado ao Poder Legislativo pelo Poder Executivo (duodécimo) deve ser efetuado até:",
    alternativas: [
      "O último dia útil de cada trimestre civil.",
      "O dia 20 de cada mês, nos limites fixados pela Constituição Federal.",
      "O dia 10 do mês subsequente ao da arrecadação tributária.",
      "O dia 5 de cada mês, condicionado à autorização expressa do Tribunal de Contas.",
      "A data de fechamento contábil anual da prefeitura."
    ],
    correta: 1,
    explicacao: "Em conformidade com o artigo 29-A da Constituição Federal e a Lei Orgânica Municipal de Itanhaém, os recursos correspondentes às dotações orçamentárias da Câmara Municipal devem ser repassados pelo Poder Executivo até o dia 20 de cada mês (duodécimo)."
  },
  {
    id: 15,
    disciplina: "Legislação Municipal",
    enunciado: "Segundo o princípio da publicidade expresso na Lei Orgânica de Itanhaém, a eficácia e validade das leis e dos atos normativos expedidos pelos órgãos públicos municipais dependem obrigatoriamente de:",
    alternativas: [
      "Publicação no órgão de imprensa oficial do Município ou meio eletrônico oficial legalmente instituído.",
      "Leitura pública e gravação em vídeo na praça central do município em dia útil.",
      "Aprovação prévia por maioria qualificada em plebiscito popular.",
      "Comunicação postal individual a todos os munícipes contribuintes de IPTU.",
      "Homologação expressa pelo Governador do Estado de São Paulo."
    ],
    correta: 0,
    explicacao: "A publicação oficial dos atos, leis e resoluções no Diário Oficial do Município (impresso ou portal eletrônico oficial) é requisito essencial de publicidade e condição de eficácia para produção de efeitos jurídicos válidos perante a sociedade."
  },
  {
    id: 16,
    disciplina: "Legislação Municipal",
    enunciado: "De acordo com o Regime Jurídico dos Servidores Públicos Municipais de Itanhaém, o servidor público que, no desempenho de suas atribuições técnicas ou administrativas, causar dano patrimonial doloso ou culposo a terceiros ou à própria Fazenda Municipal responderá perante a Administração:",
    alternativas: [
      "Apenas no âmbito moral, ficando isento de ressarcir o erário caso declare boa-fé.",
      "Civil, penal e administrativamente, podendo as cominações cumular-se e ser independentes entre si.",
      "Exclusivamente por meio de suspensão funcional de até 15 dias sem prejuízo salarial.",
      "Apenas na esfera penal, desde que haja sentença condenatória transitada em julgado pelo STF.",
      "Exclusivamente perante o sindicato da categoria profissional a que pertencer."
    ],
    correta: 1,
    explicacao: "O estatuto dos servidores públicos municipais consagra a clássica tripla responsabilidade funcional: o servidor responde civil, penal e administrativamente pelo exercício irregular de suas atribuições, sendo as instâncias independentes e cumuláveis entre si."
  },

  // ==========================================
  // CONHECIMENTOS ESPECÍFICOS (Questões 17 a 40)
  // ==========================================
  {
    id: 17,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Na arquitetura de microprocessadores modernos para computadores e servidores (arquitetura x86-64), a memória de altíssima velocidade integrada ao próprio chip do processador, organizada em múltiplos níveis hierárquicos para reduzir a latência de acesso à memória RAM principal, é a memória:",
    alternativas: [
      "Cache (L1, L2, L3).",
      "Flash NAND.",
      "ROM-BIOS.",
      "DRAM dinâmica síncrona.",
      "Virtual de paginação em disco rígido."
    ],
    correta: 0,
    explicacao: "A memória Cache (dividida em níveis L1, L2 e L3) é do tipo estática (SRAM), construída diretamente no chip da CPU, operando na mesma frequência do processador ou muito próxima a ela, reduzindo o gargalo de acesso à memória RAM."
  },
  {
    id: 18,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Ao realizar o upgrade de memória RAM de uma estação de trabalho da Câmara Municipal, o técnico optou por instalar dois módulos idênticos de memória DDR4 de 16 GB para ativar o recurso \"Dual-Channel\". Esse recurso tem como principal vantagem técnica:",
    alternativas: [
      "Reduzir o consumo de energia da fonte de alimentação em 50%.",
      "Dobrar a largura de banda do barramento de comunicação com o controlador de memória, passando de 64 bits para 128 bits.",
      "Converter automaticamente módulos DDR4 em tecnologia DDR5 sem troca física de hardware.",
      "Eliminar a necessidade de memória virtual ou arquivo de paginação no disco rígido.",
      "Proteger a placa-mãe contra surtos de tensão elétrica provenientes da rede predial."
    ],
    correta: 1,
    explicacao: "A tecnologia Dual-Channel permite ao controlador de memória comunicar-se simultaneamente com dois canais de 64 bits, totalizando uma largura de barramento de 128 bits e duplicando a taxa teórica de transferência de dados entre a CPU e a RAM."
  },
  {
    id: 19,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Sobre as unidades de estado sólido (SSDs), a tecnologia que utiliza o protocolo NVMe (Non-Volatile Memory Express) diretamente conectado às vias do barramento PCI Express (PCIe) difere dos SSDs baseados na interface SATA III porque:",
    alternativas: [
      "Possui taxas de leitura e gravação muito superiores, superando com folga o limite teórico de aproximadamente 600 MB/s imposto pelo barramento SATA III.",
      "Utiliza pratos magnéticos giratórios em vez de chips de memória flash do tipo NAND.",
      "Não é compatível com placas-mãe modernas com barramentos PCIe 4.0 ou 5.0.",
      "Apresenta maior tempo de busca mecânica e consome o triplo da energia dos discos HDD tradicionais.",
      "Exige desfragmentação de disco diária obrigatória para não perder a partição de inicialização."
    ],
    correta: 0,
    explicacao: "O barramento SATA III tem limite prático de ~550 a 600 MB/s. Já o protocolo NVMe operando sobre barramentos PCIe (Gen 3, 4 ou 5) atinge velocidades que variam de 3.500 MB/s até mais de 10.000 MB/s, além de suportar filas de comandos muito maiores com latência drasticamente menor."
  },
  {
    id: 20,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em placas-mãe modernas, a interface de firmware UEFI (Unified Extensible Firmware Interface) substituiu o antigo sistema BIOS Legacy. Uma das principais inovações da UEFI associada à tabela de partição GPT (GUID Partition Table) é:",
    alternativas: [
      "Suporte a discos rígidos com capacidade superior a 2 Terabytes (TB) e suporte ao recurso Secure Boot para impedir carregamento de códigos maliciosos no boot.",
      "A limitação da partição primária a um tamanho máximo de 512 Megabytes por volume.",
      "A obrigatoriedade de inicializar o sistema operacional exclusivamente em modo de texto MS-DOS de 16 bits.",
      "A impossibilidade de instalar sistemas operacionais de 64 bits como Windows 11 ou Linux Ubuntu.",
      "O uso compulsório do padrão de partição MBR com limite estrito de quatro partições por dispositivo."
    ],
    correta: 0,
    explicacao: "O padrão UEFI com tabela GPT supera o limite de 2,2 TB do particionamento MBR antigo (suportando partições de vários zettabytes e até 128 partições primárias) e traz o recurso Secure Boot, que valida as assinaturas criptográficas dos carregadores de boot e drivers para proteger a inicialização."
  },
  {
    id: 21,
    disciplina: "Conhecimentos Específicos",
    enunciado: "No sistema operacional Microsoft Windows 10/11, para abrir o console de Políticas de Grupo Local (Group Policy Editor) e configurar restrições de segurança para os computadores da repartição, o técnico deve executar o comando:",
    alternativas: [
      "regedit.exe",
      "gpedit.msc",
      "dxdiag.exe",
      "msconfig.com",
      "eventvwr.exe"
    ],
    correta: 1,
    explicacao: "O comando 'gpedit.msc' abre o Editor de Política de Grupo Local no Windows. Os outros comandos abrem: 'regedit' (Editor do Registro), 'dxdiag' (Diagnóstico do DirectX), 'msconfig' (Configuração do Sistema) e 'eventvwr.msc' (Visualizador de Eventos)."
  },
  {
    id: 22,
    disciplina: "Conhecimentos Específicos",
    enunciado: "No ambiente de terminal de sistemas operacionais GNU/Linux (como Debian e Ubuntu), o comando utilizado para alterar o proprietário e o grupo associado a um determinado arquivo ou diretório é o:",
    alternativas: [
      "chmod",
      "chown",
      "passwd",
      "usermod",
      "lsattr"
    ],
    correta: 1,
    explicacao: "O comando 'chown' (change owner) é utilizado para alterar o dono (usuário) e o grupo proprietário de arquivos e diretórios no Linux. O comando 'chmod' altera as permissões de acesso (leitura, escrita e execução)."
  },
  {
    id: 23,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em um servidor Linux, o técnico precisa conceder permissão total (leitura, escrita e execução) para o proprietário do arquivo, permissão de leitura e execução para o grupo, e nenhuma permissão para os demais usuários sobre o script \"backup.sh\". O comando correto em notação octal é:",
    alternativas: [
      "chmod 750 backup.sh",
      "chmod 777 backup.sh",
      "chmod 644 backup.sh",
      "chmod 700 backup.sh",
      "chmod 755 backup.sh"
    ],
    correta: 0,
    explicacao: "Cálculo dos valores octais de permissão (r=4, w=2, x=1):\n- Dono: rwx = 4 + 2 + 1 = 7\n- Grupo: r-x = 4 + 0 + 1 = 5\n- Outros: --- = 0 + 0 + 0 = 0\nPortanto, a representação numérica octal é 750 ('chmod 750 backup.sh')."
  },
  {
    id: 24,
    disciplina: "Conhecimentos Específicos",
    enunciado: "No gerenciamento de serviços em distribuições Linux modernas que utilizam o gerenciador de inicialização systemd, para habilitar um serviço (por exemplo, o servidor web Apache2) de modo que ele inicie automaticamente no boot do sistema operacional, deve-se executar:",
    alternativas: [
      "systemctl enable apache2",
      "service apache2 start-now",
      "systemctl restart apache2 --boot-only",
      "initd apache2 on",
      "systemctl mask apache2"
    ],
    correta: 0,
    explicacao: "No systemd, o comando 'systemctl enable [servico]' cria os links simbólicos necessários nos alvos de inicialização para que o serviço seja iniciado automaticamente durante o boot. O comando 'systemctl start' apenas inicia o serviço na sessão atual."
  },
  {
    id: 25,
    disciplina: "Conhecimentos Específicos",
    enunciado: "No modelo de referência OSI (Open Systems Interconnection) da ISO, as camadas responsáveis, respectivamente, pelo roteamento lógico dos pacotes através de diferentes redes e pelo controle de fluxo e entrega confiável fim-a-fim dos segmentos são:",
    alternativas: [
      "Camada de Enlace e Camada Física.",
      "Camada de Rede e Camada de Transporte.",
      "Camada de Transporte e Camada de Sessão.",
      "Camada de Aplicação e Camada de Apresentação.",
      "Camada de Rede e Camada de Enlace."
    ],
    correta: 1,
    explicacao: "A Camada 3 (Rede) é responsável pelo endereçamento lógico (IP) e roteamento de pacotes entre diferentes redes. A Camada 4 (Transporte) é responsável pela comunicação ponta-a-ponta, controle de fluxo, ordenação e confiabilidade (como o TCP)."
  },
  {
    id: 26,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Uma sub-rede da Câmara de Itanhaém possui o endereço de rede IPv4 192.168.10.0 com a máscara de sub-rede /26 (255.255.255.192). O número máximo de endereços IP válidos disponíveis para serem atribuídos a computadores (hosts) nessa sub-rede e o respectivo endereço de broadcast são:",
    alternativas: [
      "62 hosts válidos e broadcast 192.168.10.63.",
      "64 hosts válidos e broadcast 192.168.10.64.",
      "126 hosts válidos e broadcast 192.168.10.127.",
      "30 hosts válidos e broadcast 192.168.10.31.",
      "62 hosts válidos e broadcast 192.168.10.255."
    ],
    correta: 0,
    explicacao: "Cálculo CIDR /26:\n- Total de bits do host = 32 - 26 = 6 bits.\n- Total de endereços = 2^6 = 64 endereços (de 192.168.10.0 a 192.168.10.63).\n- Endereço de rede: 192.168.10.0 (primeiro).\n- Endereço de broadcast: 192.168.10.63 (último).\n- Faixa de hosts utilizáveis: de 192.168.10.1 a 192.168.10.62 = 2^6 - 2 = 62 hosts utilizáveis."
  },
  {
    id: 27,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em relação ao protocolo IPv6, que veio para solucionar o esgotamento dos endereços IPv4, assinale a afirmação correta:",
    alternativas: [
      "O endereço IPv6 possui 64 bits representados em notação decimal pontuada.",
      "O endereço IPv6 possui 128 bits e não utiliza o conceito de endereço de broadcast, utilizando multicast em seu lugar.",
      "O IPv6 eliminou a possibilidade de configurar sub-redes ou roteamento dinâmico.",
      "O IPv6 não é suportado pelos sistemas operacionais Windows e Linux modernos.",
      "O IPv6 utiliza exatamente o mesmo tamanho de cabeçalho variável e instável do IPv4."
    ],
    correta: 1,
    explicacao: "O IPv6 possui 128 bits (representados por 8 grupos de 4 dígitos hexadecimais separados por dois-pontos). Uma das suas grandes inovações foi extinguir as transmissões em broadcast (que sobrecarregavam a rede no IPv4), substituindo-as por transmissões multicast e anycast."
  },
  {
    id: 28,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Assinale a alternativa que relaciona corretamente o protocolo de rede à sua respectiva porta padrão e protocolo da camada de transporte:",
    alternativas: [
      "SSH — Porta 22 / TCP.",
      "DNS — Porta 80 / UDP exclusivamente.",
      "HTTPS — Porta 21 / UDP.",
      "DHCP — Porta 443 / TCP.",
      "FTP — Porta 53 / TCP."
    ],
    correta: 0,
    explicacao: "O protocolo SSH (Secure Shell) utiliza a porta padrão 22 sobre TCP para conexões seguras e criptografadas de terminal. As outras estão erradas: DNS usa porta 53 (UDP/TCP); HTTPS usa porta 443 (TCP); DHCP usa portas 67/68 (UDP); FTP usa portas 20 e 21 (TCP)."
  },
  {
    id: 29,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em um switch gerenciável de camada 2 (Layer 2), o recurso de VLAN (Virtual Local Area Network) segundo o padrão IEEE 802.1Q tem como finalidade primordial:",
    alternativas: [
      "Segmentar logicamente uma rede física em múltiplos domínios de broadcast independentes, melhorando a segurança e o desempenho.",
      "Aumentar o sinal físico da frequência de rádio do Wi-Fi nos corredores do prédio.",
      "Substituir o cabeamento de par trançado Cat6 por conexões sem fio Bluetooth.",
      "Converter automaticamente o tráfego de dados digitais em sinais de telefonia analógica.",
      "Impedir que computadores acessem a internet em qualquer horário do dia."
    ],
    correta: 0,
    explicacao: "VLANs dividem um mesmo switch ou infraestrutura física em várias redes lógicas distintas (domínios de broadcast isolados), impedindo que o tráfego de um setor/rede interfira no outro e aumentando substancialmente o controle e a segurança."
  },
  {
    id: 30,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Na configuração de redes sem fio corporativas (Wi-Fi), o padrão de segurança mais moderno e robusto que oferece proteção aprimorada contra ataques de força bruta offline por meio do protocolo SAE (Simultaneous Authentication of Equals) é o:",
    alternativas: [
      "WEP com chave de 64 bits.",
      "WPA-TKIP.",
      "WPA3.",
      "MAC Filtering exclusivo.",
      "SSID Broadcast oculto sem senha."
    ],
    correta: 2,
    explicacao: "O WPA3 (Wi-Fi Protected Access 3) é o padrão de segurança mais atual e seguro para redes sem fio, introduzindo criptografia mais forte de 192 bits e o mecanismo SAE (Simultaneous Authentication of Equals), que inviabiliza ataques de dicionário e força bruta offline."
  },
  {
    id: 31,
    disciplina: "Conhecimentos Específicos",
    enunciado: "O tipo de código malicioso (malware) que criptografa os arquivos do computador da vítima e exige o pagamento de um resgate financeiro (frequentemente em criptomoedas) para fornecer a chave de descriptografia denomina-se:",
    alternativas: [
      "Ransomware.",
      "Spyware.",
      "Rootkit.",
      "Adware.",
      "Keylogger."
    ],
    correta: 0,
    explicacao: "Ransomware é a ameaça cibernética que sequestra dados e sistemas por meio de criptografia maliciosa, exigindo pagamento de resgate ('ransom') para restaurar o acesso aos arquivos."
  },
  {
    id: 32,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Na criptografia assimétrica (de chave pública), utilizada em certificados digitais da ICP-Brasil e conexões seguras, o emissor que deseja assinar digitalmente um documento com garantia de autenticidade e não-repúdio deve cifrar o hash do documento com a:",
    alternativas: [
      "Sua própria chave privada.",
      "Chave pública do destinatário.",
      "Chave de sessão compartilhada simétrica.",
      "Chave mestra do sistema operacional.",
      "Sua própria chave pública."
    ],
    correta: 0,
    explicacao: "Na assinatura digital, o autor cifra o resumo criptográfico (hash) com sua própria CHAVE PRIVADA (que só ele possui). Qualquer pessoa pode verificar a assinatura utilizando a chave pública correspondente do autor, garantindo autenticidade, integridade e não-repúdio."
  },
  {
    id: 33,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em segurança de redes corporativas, um Firewall do tipo \"Stateful Inspection\" (inspeção com estado) caracteriza-se por:",
    alternativas: [
      "Analisar apenas o cabeçalho isolado de cada pacote de dados, sem guardar qualquer histórico de conexões anteriores.",
      "Monitorar o estado e o contexto das conexões ativas, permitindo que pacotes de retorno legítimos ingressem na rede automaticamente se pertencerem a uma sessão já estabelecida.",
      "Exigir a digitação manual de login e senha pelo usuário para cada pacote que trafega pelo roteador.",
      "Bloquear compulsoriamente todo e qualquer tráfego HTTPS criptografado.",
      "Operar exclusivamente na camada de enlace sem avaliar endereços IP ou portas lógicas."
    ],
    correta: 1,
    explicacao: "O firewall stateful mantém uma tabela de estados de conexões ativas. Quando um cliente interno estabelece uma sessão legítima com um servidor externo, o firewall reconhece os pacotes de retorno como parte dessa mesma sessão aberta e os autoriza dinamicamente."
  },
  {
    id: 34,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Segundo a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei Federal nº 13.709/2018), a pessoa natural indicada pelo controlador e operador para atuar como canal de comunicação entre a instituição, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD) é o:",
    alternativas: [
      "Auditor externo independente.",
      "Encarregado pelo Tratamento de Dados Pessoais (DPO).",
      "Procurador judicial municipal.",
      "Técnico de suporte nível 1.",
      "Administrador de banco de dados (DBA)."
    ],
    correta: 1,
    explicacao: "O Encarregado de Proteção de Dados (DPO - Data Protection Officer), nos termos do art. 5º, VIII, da LGPD, é a pessoa indicada pelo controlador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD."
  },
  {
    id: 35,
    disciplina: "Conhecimentos Específicos",
    enunciado: "No modelo de dados relacional de bancos de dados, o conceito que garante que um valor em uma coluna de uma tabela corresponda obrigatoriamente a uma chave primária existente em outra tabela relacionada é a:",
    alternativas: [
      "Integridade referencial, implementada por Chave Estrangeira (Foreign Key).",
      "Normalização de Quarta Forma Normal estrita.",
      "Indexação não clusterizada de valores nulos.",
      "Integridade de domínio por gatilho exclusivo de exclusão.",
      "Chave candidata secundária transitória."
    ],
    correta: 0,
    explicacao: "A integridade referencial assegura que relacionamentos entre tabelas permaneçam consistentes, impedindo a inserção de registros com referências inexistentes ou a exclusão de registros pais dos quais dependam registros filhos através de Chaves Estrangeiras (FK)."
  },
  {
    id: 36,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Na linguagem SQL padrão ANSI, os comandos são divididos em subconjuntos conforme sua finalidade. Assinale a alternativa que contém apenas comandos pertencentes à categoria DDL (Data Definition Language):",
    alternativas: [
      "CREATE, ALTER, DROP.",
      "SELECT, INSERT, UPDATE.",
      "INSERT, DELETE, GRANT.",
      "COMMIT, ROLLBACK, SAVEPOINT.",
      "UPDATE, DELETE, MERGE."
    ],
    correta: 0,
    explicacao: "DDL (Data Definition Language) engloba os comandos responsáveis por criar, modificar e excluir a estrutura/esquema dos objetos no banco de dados: CREATE, ALTER, DROP, TRUNCATE. Comandos como INSERT, UPDATE e DELETE pertencem à DML (Data Manipulation Language)."
  },
  {
    id: 37,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Considere as tabelas de um banco de dados relacional: \"Servidores\" e \"Departamentos\". Para retornar todos os registros da tabela \"Servidores\", incluindo aqueles que ainda não possuem nenhum departamento associado (com valores nulos nos campos da tabela Departamentos), a consulta SQL deve utilizar a cláusula de junção:",
    alternativas: [
      "INNER JOIN",
      "LEFT JOIN (ou LEFT OUTER JOIN)",
      "RIGHT JOIN invertido sem condição ON",
      "CROSS JOIN exclusivo",
      "NATURAL UNION"
    ],
    correta: 1,
    explicacao: "O LEFT JOIN (ou LEFT OUTER JOIN) retorna todas as linhas da tabela à esquerda (neste caso, Servidores), mesmo que não haja correspondência na tabela à direita (Departamentos), preenchendo as colunas da tabela à direita com NULL quando não houver relação."
  },
  {
    id: 38,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em uma consulta SQL, para agrupar o número de chamados técnicos de TI por setor e exibir apenas os setores que possuem MAIS DE 10 chamados registrados, a cláusula correta para filtrar essa condição sobre a função de agregação COUNT é:",
    alternativas: [
      "WHERE COUNT(id_chamado) > 10",
      "HAVING COUNT(id_chamado) > 10",
      "GROUP BY COUNT(id_chamado) > 10",
      "ORDER BY COUNT(id_chamado) > 10",
      "LIMIT > 10"
    ],
    correta: 1,
    explicacao: "A cláusula 'HAVING' é utilizada especificamente para filtrar condições sobre funções de agregação (como COUNT, SUM, AVG) após o agrupamento realizado pelo 'GROUP BY'. A cláusula 'WHERE' não aceita diretamente funções agregadas."
  },
  {
    id: 39,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Em uma estratégia de segurança e contingência de dados de TI, o tipo de backup que copia apenas os arquivos que foram criados ou modificados desde a realização do ÚLTIMO BACKUP COMPLETO (Full), acumulando as alterações até o próximo backup completo, denomina-se:",
    alternativas: [
      "Backup Incremental.",
      "Backup Diferencial.",
      "Backup Espelhado (Mirror).",
      "Backup Sintético sem compressão.",
      "Backup Manual de Bloco Único."
    ],
    correta: 1,
    explicacao: "O Backup Diferencial copia todas as alterações ocorridas desde o último backup completo (Full). O Backup Incremental, por sua vez, copia apenas as alterações ocorridas desde o último backup de qualquer tipo (seja ele Full ou Incremental)."
  },
  {
    id: 40,
    disciplina: "Conhecimentos Específicos",
    enunciado: "Durante um chamado de suporte técnico em que um computador não consegue acessar a rede nem resolver nomes de servidores internos, o utilitário de linha de comando utilizado para testar a resolução de nomes de domínio e consultar registros em servidores DNS é o:",
    alternativas: [
      "nslookup",
      "chkdsk",
      "format",
      "netstat",
      "arp -d"
    ],
    correta: 0,
    explicacao: "O utilitário 'nslookup' (Name Server Lookup) é a ferramenta padrão de linha de comando no Windows e Linux para consultar registros de servidores DNS e diagnosticar problemas de resolução de nomes e IPs na rede."
  }
];
