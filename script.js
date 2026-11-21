const PALAVRAS = [
  {
    num: 1,
    dir: 'V',
    linha: 0,
    col: 0,
    resposta: 'EEPROM',
    pista: 'Memória que guarda dados mesmo sem energia e pode ser regravada eletricamente.',
    extra: 'Aparece na BIOS e em cartões. Começa com E.'
  },
  {
    num: 2,
    dir: 'V',
    linha: 0,
    col: 4,
    resposta: 'DUALCORE',
    pista: 'Processador com dois núcleos que executam tarefas ao mesmo tempo.',
    extra: 'Dois núcleos no mesmo chip. Começa com D.'
  },
  {
    num: 3,
    dir: 'V',
    linha: 0,
    col: 10,
    resposta: 'QUADCORE',
    pista: 'Processador com quatro núcleos trabalhando em paralelo no mesmo chip.',
    extra: 'Quatro núcleos. Começa com Q.'
  },
  {
    num: 4,
    dir: 'V',
    linha: 0,
    col: 12,
    resposta: 'ULA',
    pista: 'Parte da CPU que faz as contas e as operações lógicas.',
    extra: 'Fica dentro do processador. Começa com U.'
  },
  {
    num: 5,
    dir: 'H',
    linha: 1,
    col: 4,
    resposta: 'UC',
    pista: 'Parte da CPU que dirige e coordena todas as operações do computador.',
    extra: 'Comanda o passo a passo. Começa com U.'
  },
  {
    num: 6,
    dir: 'H',
    linha: 2,
    col: 9,
    resposta: 'DATABUS',
    pista: 'Conjunto de fios que leva as informações entre os componentes.',
    extra: 'Não confunda com o barramento de endereços. Começa com D.'
  },
  {
    num: 7,
    dir: 'H',
    linha: 3,
    col: 3,
    resposta: 'FLASH',
    pista: 'Memória usada em pendrives, apagada e gravada em blocos de uma vez.',
    extra: 'Pendrive e SSD. Começa com F.'
  },
  {
    num: 8,
    dir: 'V',
    linha: 4,
    col: 12,
    resposta: 'RAM',
    pista: 'Memória temporária onde ficam as tarefas em execução; some ao desligar.',
    extra: 'É a memória que mais se aumenta. Começa com R.'
  },
  {
    num: 9,
    dir: 'H',
    linha: 5,
    col: 0,
    resposta: 'MICROCONTROLADOR',
    pista: 'Computador inteiro cabendo num único chip, com memória e entradas e saídas.',
    extra: 'Está em eletrodomésticos e sensores. Começa com M.'
  },
  {
    num: 10,
    dir: 'V',
    linha: 5,
    col: 2,
    resposta: 'CPU',
    pista: 'Cérebro do computador, responsável por executar as instruções dos programas.',
    extra: 'A sigla mais famosa da aula. Começa com C.'
  },
  {
    num: 11,
    dir: 'V',
    linha: 5,
    col: 15,
    resposta: 'ROM',
    pista: 'Memória que vem com instruções gravadas de fábrica e não muda.',
    extra: 'Não se apaga ao desligar. Começa com R.'
  },
  {
    num: 12,
    dir: 'H',
    linha: 7,
    col: 6,
    resposta: 'CACHE',
    pista: 'Memória rápida e pequena que guarda cópias dos dados mais usados.',
    extra: 'Fica entre o processador e a RAM. Começa com C.'
  }
];

const GRADE = [
  'E...D.....Q.U...',
  'E...UC....U.L...',
  'P...A....DATABUS',
  'R..FLASH..D.....',
  'O...C.....C.R...',
  'MICROCONTROLADOR',
  '..P.R.....R.M..O',
  '..U.E.CACHE....M'
];

const PUZZLES = [
  {
    titulo: '1. Porta da entrada',
    descricao: 'A primeira porta exige as duas entradas ligadas; a segunda inverte o sinal.',
    slots: [
      { pista: 'Só deixa passar energia se as duas entradas estiverem ligadas.', resposta: 'AND' },
      { pista: 'Inverte o sinal: onde havia energia, agora não há.', resposta: 'NOT' }
    ],
    opcoes: ['NOT', 'AND', 'OR']
  },
  {
    titulo: '2. Porta do processador',
    descricao: 'Uma das portas aceita qualquer entrada ligada; a outra só aceita entradas diferentes.',
    slots: [
      { pista: 'Deixa passar se pelo menos uma entrada estiver ligada.', resposta: 'OR' },
      { pista: 'Deixa passar apenas quando as entradas são diferentes.', resposta: 'XOR' }
    ],
    opcoes: ['XOR', 'AND', 'OR']
  },
  {
    titulo: '3. Porta de saída',
    descricao: 'A última etapa precisa de três portas na ordem certa.',
    slots: [
      { pista: 'Exige as duas entradas ligadas para passar energia.', resposta: 'AND' },
      { pista: 'Deixa passar se qualquer entrada estiver ligada.', resposta: 'OR' },
      { pista: 'Troca ligado por desligado.', resposta: 'NOT' }
    ],
    opcoes: ['OR', 'NOT', 'AND', 'XOR']
  }
];

const TABELAS = {
  AND: '00→0 · 01→0 · 10→0 · 11→1',
  OR: '00→0 · 01→1 · 10→1 · 11→1',
  NOT: '0→1 · 1→0',
  XOR: '00→0 · 01→1 · 10→1 · 11→0'
};

const CLOCKS = [
  {
    titulo: 'Conta 1 · Período do ciclo',
    enunciado: 'Um ciclo de clock não pode durar mais que 0,5 ns. Qual é a menor frequência que atende? Use f = 1 / período.',
    opcoes: ['1 GHz', '1,5 GHz', '2 GHz', '4 GHz'],
    resposta: '2 GHz'
  },
  {
    titulo: 'Conta 2 · Instruções por segundo',
    enunciado: 'Cada instrução gasta 4 ciclos. Para 750 milhões de instruções por segundo, qual é o menor clock necessário?',
    opcoes: ['2 GHz', '2,5 GHz', '3 GHz', '5 GHz'],
    resposta: '3 GHz'
  }
];

const MEMORIA = {
  titulo: 'Hierarquia de memória',
  descricao: 'O fantasma embaralhou a ordem. Coloque da mais lenta para a mais rápida.',
  slots: [
    { pista: 'Memória principal; é a mais lenta das três.', resposta: 'RAM' },
    { pista: 'Cópia pequena e rápida dos dados mais usados.', resposta: 'CACHE' },
    { pista: 'Fica dentro da CPU; é a mais rápida de todas.', resposta: 'REGISTRADORES' }
  ],
  opcoes: ['REGISTRADORES', 'RAM', 'CACHE']
};

const TOTAL_DESAFIOS = PUZZLES.length + CLOCKS.length + 1;

const CHAVES = {
  vidas: 'fantasma_vidas',
  bonus: 'fantasma_bonus',
  bonusQtd: 'fantasma_bonus_qtd',
  portas: 'fantasma_portas',
  cruzadinha: 'fantasma_cruzadinha',
  tabuleiro: 'fantasma_tabuleiro',
  progresso: 'fantasma_progresso',
  ritmo: 'fantasma_ritmo',
  clockOk: 'fantasma_clock_ok',
  vitorias: 'fantasma_vitorias'
};

const memoria = {
  ler(chave) {
    try {
      const valor = localStorage.getItem(chave);
      if (valor !== null) return valor;
    } catch (erro) {
      return null;
    }
    try {
      return sessionStorage.getItem(chave);
    } catch (erro) {
      return null;
    }
  },
  salvar(chave, valor) {
    const texto = String(valor);
    try {
      localStorage.setItem(chave, texto);
    } catch (erro) {
      return;
    }
    try {
      sessionStorage.setItem(chave, texto);
    } catch (erro) {
      return;
    }
  }
};

function lerVidas() {
  const bruto = memoria.ler(CHAVES.vidas);
  if (bruto === null) return 3;
  const valor = Number(bruto);
  return Number.isFinite(valor) ? valor : 3;
}

function salvarVidas(valor) {
  memoria.salvar(CHAVES.vidas, Math.max(0, valor));
}

function bonusAtivo() {
  return memoria.ler(CHAVES.bonus) === '1';
}

function estadoFantasma() {
  const estado = memoria.ler(CHAVES.portas);
  return estado === 'morto' || estado === 'escondido' || estado === '1' ? estado : null;
}

function portasResolvidas() {
  return estadoFantasma() !== null;
}

function bonusQuantidade() {
  if (!bonusAtivo()) return 0;
  const valor = Number(memoria.ler(CHAVES.bonusQtd));
  return Number.isFinite(valor) && valor > 0 ? valor : 1;
}

function totalVidas() {
  return 3 + bonusQuantidade();
}

function darBonus(quantidade) {
  if (bonusAtivo()) return 0;
  memoria.salvar(CHAVES.bonus, 1);
  memoria.salvar(CHAVES.bonusQtd, quantidade);
  const atual = lerVidas();
  salvarVidas(atual > 0 ? atual + quantidade : 3 + quantidade);
  return quantidade;
}

function totalVitorias() {
  const valor = Number(memoria.ler(CHAVES.vitorias));
  return Number.isFinite(valor) && valor > 0 ? valor : 0;
}

function clockRelampagoAprovado() {
  return memoria.ler(CHAVES.clockOk) === '1';
}

function registrarVitoria() {
  memoria.salvar(CHAVES.vitorias, totalVitorias() + 1);
}

function limparQuiz() {
  memoria.salvar(CHAVES.portas, '0');
  memoria.salvar(CHAVES.progresso, '[]');
  memoria.salvar(CHAVES.clockOk, '0');
  PUZZLES.forEach((puzzle, indice) => {
    estadoPortas[indice] = [];
  });
  CLOCKS.forEach((clock, indice) => {
    estadoClocks[indice] = null;
  });
  estadoMemoria = [];
  slotAtivo = null;
  tentativas = 0;
  const computador = document.getElementById('computador');
  if (computador) computador.classList.remove('ligado');
  const tela = document.getElementById('texto-tela');
  if (tela) tela.textContent = 'SEM ENERGIA';
  const recompensa = document.getElementById('recompensa');
  if (recompensa) recompensa.hidden = true;
  const explicacao = document.getElementById('explicacao');
  if (explicacao) explicacao.hidden = true;
  const enviar = document.getElementById('enviar');
  if (enviar) enviar.disabled = false;
  const botaoLimpar = document.getElementById('limpar-tudo');
  if (botaoLimpar) botaoLimpar.disabled = false;
  document.querySelectorAll('#puzzles button, #clocks button, #memoria-puzzle button').forEach(botao => {
    botao.disabled = false;
  });
  document.querySelectorAll('#puzzles .puzzle, #clocks .clock-card, #memoria-puzzle').forEach(card => {
    card.classList.remove('resolvido');
  });
  PUZZLES.forEach((puzzle, indice) => atualizarPuzzle(indice));
  CLOCKS.forEach((clock, indice) => atualizarClock(indice));
  atualizarMemoria();
  limparMarcacoes();
  atualizarTentativas();
  reiniciarClockRelampago();
  if (document.querySelector('.etapa-quiz')) mostrarEtapa(0);
}

function desenharVidas(elemento, restantes) {
  if (!elemento) return;
  elemento.textContent = '';
  const total = Math.max(totalVidas(), restantes);
  for (let i = 0; i < total; i++) {
    const coracao = document.createElement('span');
    coracao.className = i < restantes ? 'vida' : 'vida perdida';
    elemento.appendChild(coracao);
  }
}

function montarHome() {
  if (!document.querySelector('.home')) return;
  const restantes = lerVidas();
  desenharVidas(document.getElementById('coracoes'), restantes);
  const total = document.getElementById('total-vidas');
  if (total) total.textContent = restantes + '/' + totalVidas();
  const cruzadinha = document.getElementById('status-cruzadinha');
  if (cruzadinha) {
    cruzadinha.textContent = memoria.ler(CHAVES.cruzadinha) === '1' ? 'Concluída' : 'Pendente';
  }
  const quiz = document.getElementById('status-portas');
  if (quiz) quiz.textContent = portasResolvidas() ? 'Concluído' : 'Pendente';
  const computador = document.getElementById('status-pc');
  if (computador) {
    computador.textContent = portasResolvidas() ? 'Ligado' : 'Desligado';
  }
  const ritmo = document.getElementById('status-ritmo');
  if (ritmo) {
    ritmo.textContent = memoria.ler(CHAVES.ritmo) === '1' ? 'Derrotado' : 'Pendente';
  }
  const vitorias = document.getElementById('status-vitorias');
  if (vitorias) vitorias.textContent = totalVitorias();
  const fantasma = document.getElementById('status-fantasma');
  if (fantasma) {
    const estado = estadoFantasma();
    const venceuRitmo = memoria.ler(CHAVES.ritmo) === '1';
    fantasma.textContent = venceuRitmo || estado === 'morto'
      ? 'Derrotado'
      : estado === 'escondido' ? 'Escondido' : 'Solto pela placa';
  }
}

const direcao = { atual: 'H' };
let vidas = lerVidas();
let derrotado = false;
let acaoOverlay = null;

function casa(linha, col) {
  return document.querySelector('#tabuleiro [data-linha="' + linha + '"][data-coluna="' + col + '"]');
}

function limparCor(input) {
  const celula = input.parentElement;
  celula.classList.remove('certo', 'amarelo', 'errado');
}

function andar(input, passo) {
  const linha = Number(input.dataset.linha);
  const col = Number(input.dataset.coluna);
  const proximaLinha = linha + (direcao.atual === 'V' ? passo : 0);
  const proximaCol = col + (direcao.atual === 'H' ? passo : 0);
  const destino = casa(proximaLinha, proximaCol);
  if (destino && destino.tagName === 'INPUT') {
    destino.focus();
  }
}

function destinoInicial(input) {
  const linha = Number(input.dataset.linha);
  const col = Number(input.dataset.coluna);
  const palavra = PALAVRAS.find(p => {
    return p.linha <= linha && linha < p.linha + (p.dir === 'V' ? p.resposta.length : 1) &&
      p.col <= col && col < p.col + (p.dir === 'H' ? p.resposta.length : 1);
  });
  if (palavra) {
    direcao.atual = palavra.dir;
  }
}

function salvarTabuleiro() {
  const valores = [];
  document.querySelectorAll('#tabuleiro input').forEach(input => {
    valores.push([input.dataset.linha, input.dataset.coluna, input.value]);
  });
  memoria.salvar(CHAVES.tabuleiro, JSON.stringify(valores));
}

function restaurarTabuleiro() {
  let valores;
  try {
    valores = JSON.parse(memoria.ler(CHAVES.tabuleiro));
  } catch (erro) {
    return;
  }
  if (!Array.isArray(valores)) return;
  valores.forEach(([linha, coluna, valor]) => {
    const input = casa(Number(linha), Number(coluna));
    if (input) input.value = String(valor || '');
  });
}

function montarTabuleiro() {
  const tabuleiro = document.getElementById('tabuleiro');
  if (!tabuleiro) return;

  GRADE.forEach((linha, i) => {
    Array.from(linha).forEach((caracter, j) => {
      const celula = document.createElement('div');
      celula.className = 'casa ' + (caracter === '.' ? 'vazia' : 'ativa');

      if (caracter !== '.') {
        const inicio = PALAVRAS.find(p => p.linha === i && p.col === j);
        if (inicio) {
          const numero = document.createElement('span');
          numero.className = 'numero';
          numero.textContent = inicio.num;
          celula.appendChild(numero);
        }

        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.autocomplete = 'off';
        input.setAttribute('aria-label', 'Casa da linha ' + (i + 1) + ', coluna ' + (j + 1));
        input.dataset.linha = i;
        input.dataset.coluna = j;

        input.addEventListener('input', () => {
          if (derrotado) return;
          input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '');
          limparCor(input);
          salvarTabuleiro();
          if (input.value) andar(input, 1);
        });

        input.addEventListener('click', () => destinoInicial(input));

        input.addEventListener('keydown', evento => {
          const setas = {
            ArrowRight: ['H', 1],
            ArrowLeft: ['H', -1],
            ArrowDown: ['V', 1],
            ArrowUp: ['V', -1]
          };
          if (setas[evento.key]) {
            evento.preventDefault();
            direcao.atual = setas[evento.key][0];
            andar(input, setas[evento.key][1]);
          } else if (evento.key === 'Backspace' && !input.value) {
            andar(input, -1);
          }
        });

        celula.appendChild(input);
      }

      tabuleiro.appendChild(celula);
    });
  });

  restaurarTabuleiro();
}

function criarItemPista(palavra) {
  const item = document.createElement('li');
  item.dataset.num = palavra.num;
  const numero = document.createElement('span');
  numero.className = 'num';
  numero.textContent = palavra.num;
  const texto = document.createElement('span');
  texto.textContent = palavra.pista;
  item.appendChild(numero);
  item.appendChild(texto);
  return item;
}

function montarPistas() {
  const horizontais = document.getElementById('pistas-h');
  const verticais = document.getElementById('pistas-v');
  if (!horizontais || !verticais) return;

  PALAVRAS.filter(p => p.dir === 'H').forEach(p => horizontais.appendChild(criarItemPista(p)));
  PALAVRAS.filter(p => p.dir === 'V').forEach(p => verticais.appendChild(criarItemPista(p)));
}

function marcarPistas(certas, erradas) {
  document.querySelectorAll('.lista-pistas li').forEach(item => {
    item.classList.remove('certo-pista', 'errado-pista');
  });
  certas.forEach(num => {
    const item = document.querySelector('.lista-pistas li[data-num="' + num + '"]');
    if (item) item.classList.add('certo-pista');
  });
  erradas.forEach(num => {
    const item = document.querySelector('.lista-pistas li[data-num="' + num + '"]');
    if (item) item.classList.add('errado-pista');
  });
}

function montarIdeias() {
  const lista = document.getElementById('lista-ideias');
  if (!lista) return;

  PALAVRAS.forEach(palavra => {
    const card = document.createElement('article');
    card.className = 'card';

    const numero = document.createElement('span');
    numero.className = 'num';
    numero.textContent = palavra.num;

    const conteudo = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.textContent = palavra.resposta + ' · ' + (palavra.dir === 'H' ? 'Horizontal' : 'Vertical');
    const pista = document.createElement('p');
    pista.textContent = palavra.pista;
    const extra = document.createElement('p');
    extra.className = 'extra';
    extra.textContent = 'Dica extra: ' + palavra.extra;

    conteudo.appendChild(titulo);
    conteudo.appendChild(pista);
    conteudo.appendChild(extra);
    card.appendChild(numero);
    card.appendChild(conteudo);
    lista.appendChild(card);
  });
}

function escreverMensagem(texto, classe) {
  const mensagem = document.getElementById('mensagem');
  if (!mensagem) return;
  mensagem.className = 'mensagem' + (classe ? ' ' + classe : '');
  mensagem.textContent = texto;
}

function atualizarVidasCross() {
  desenharVidas(document.querySelector('#tabuleiro') ? document.getElementById('coracoes') : null, vidas);
}

function mostrarOverlay(titulo, texto, botao, acao) {
  const overlay = document.getElementById('overlay');
  if (!overlay) return;
  document.getElementById('overlay-titulo').textContent = titulo;
  document.getElementById('overlay-texto').textContent = texto;
  const principal = document.getElementById('overlay-principal');
  principal.textContent = botao;
  acaoOverlay = acao;
  overlay.hidden = false;
}

function esconderOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.hidden = true;
  acaoOverlay = null;
}

function travarTabuleiro(travado) {
  document.querySelectorAll('#tabuleiro input').forEach(input => {
    input.disabled = travado;
  });
  const conferir = document.getElementById('conferir');
  if (conferir) conferir.disabled = travado;
}

function reiniciarTabuleiro() {
  const tabuleiro = document.getElementById('tabuleiro');
  if (tabuleiro) {
    tabuleiro.querySelectorAll('input').forEach(input => {
      input.value = '';
      limparCor(input);
    });
  }
  const contador = document.getElementById('contador');
  if (contador) contador.textContent = '0 de ' + PALAVRAS.length + ' palavras';
  marcarPistas([], []);
  direcao.atual = 'H';
  memoria.salvar(CHAVES.tabuleiro, '[]');
  escreverMensagem('');
}

function conferir() {
  if (derrotado) return;

  const cores = new Map();
  const prioridade = { errado: 1, amarelo: 2, certo: 3 };
  const certas = [];
  const erradas = [];
  let acertos = 0;
  let houveErro = false;

  const marcar = (input, classe) => {
    const atual = cores.get(input);
    if (!atual || prioridade[classe] > prioridade[atual]) cores.set(input, classe);
  };

  PALAVRAS.forEach(palavra => {
    let preenchida = true;
    let erro = false;
    const resposta = palavra.resposta;
    const celulas = [];
    const valores = [];

    for (let i = 0; i < resposta.length; i++) {
      const linha = palavra.dir === 'H' ? palavra.linha : palavra.linha + i;
      const col = palavra.dir === 'H' ? palavra.col + i : palavra.col;
      const input = casa(linha, col);
      const valor = (input.value || '').trim().toUpperCase();
      celulas.push(input);
      valores.push(valor);

      if (valor === '') {
        preenchida = false;
      } else if (valor === resposta[i]) {
        marcar(input, 'certo');
      } else {
        erro = true;
        houveErro = true;
      }
    }

    const disponiveis = {};
    for (let i = 0; i < resposta.length; i++) {
      if (valores[i] !== resposta[i]) {
        disponiveis[resposta[i]] = (disponiveis[resposta[i]] || 0) + 1;
      }
    }

    for (let i = 0; i < resposta.length; i++) {
      if (!valores[i] || valores[i] === resposta[i]) continue;
      if (disponiveis[valores[i]] > 0) {
        disponiveis[valores[i]]--;
        marcar(celulas[i], 'amarelo');
      } else {
        marcar(celulas[i], 'errado');
      }
    }

    if (erro) erradas.push(palavra.num);
    if (preenchida && !erro) {
      acertos++;
      certas.push(palavra.num);
    }
  });

  document.querySelectorAll('#tabuleiro input').forEach(input => limparCor(input));
  cores.forEach((classe, input) => input.parentElement.classList.add(classe));
  marcarPistas(certas, erradas);

  const contador = document.getElementById('contador');
  if (contador) contador.textContent = acertos + ' de ' + PALAVRAS.length + ' palavras';

  if (houveErro) {
    vidas--;
    salvarVidas(vidas);
    atualizarVidasCross();
    escreverMensagem('Você perdeu 1 vida. Verde: certo. Amarelo: a letra existe, mas está no lugar errado. Vermelho: fora da palavra.', 'erro');
  } else if (acertos === PALAVRAS.length) {
    escreverMensagem('Todas as palavras corretas!', 'ok');
  } else {
    escreverMensagem('Nenhuma letra errada. Preencha as casas que faltam.');
  }

  if (vidas <= 0) {
    travarTabuleiro(true);
    mostrarOverlay(
      'Fim de jogo',
      'O fantasma venceu esta rodada. As letras erradas custaram todas as suas vidas.',
      'Tentar de novo',
      () => {
        vidas = 3 + bonusQuantidade();
        salvarVidas(vidas);
        derrotado = false;
        travarTabuleiro(false);
        atualizarVidasCross();
        reiniciarTabuleiro();
        esconderOverlay();
      }
    );
    derrotado = true;
    return;
  }

  if (acertos === PALAVRAS.length) {
    memoria.salvar(CHAVES.cruzadinha, 1);
    travarTabuleiro(true);
    mostrarOverlay(
      'Cruzadinha vencida!',
      'Você decifrou todos os termos. Agora vá ao jogo de ritmo para derrotar o fantasma!',
      'Jogar de novo',
      () => {
        derrotado = false;
        travarTabuleiro(false);
        reiniciarTabuleiro();
        esconderOverlay();
      }
    );
    derrotado = true;
  }
}

const estadoPortas = PUZZLES.map(() => []);
const estadoClocks = CLOCKS.map(() => null);
let estadoMemoria = [];
let slotAtivo = null;
let tentativas = 0;

function descritorPorta(nome) {
  return nome + ' · ' + TABELAS[nome];
}

function atualizarClock(indice) {
  const card = document.querySelector('#clocks [data-clock="' + indice + '"]');
  if (!card) return;
  card.querySelectorAll('.opcao-clock').forEach(botao => {
    botao.classList.remove('selecionado', 'certo', 'errado');
    if (botao.dataset.opcao === estadoClocks[indice]) {
      botao.classList.add('selecionado');
    }
  });
}

function escolherClock(indice, valor) {
  if (portasResolvidas()) return;
  estadoClocks[indice] = valor;
  atualizarClock(indice);
  salvarProgressoPortas();
}

function atualizarMemoria() {
  const area = document.getElementById('memoria-puzzle');
  if (!area) return;
  MEMORIA.slots.forEach((slot, i) => {
    const botao = area.querySelector('[data-slot="' + i + '"]');
    if (!botao) return;
    botao.querySelector('.slot-valor').textContent = estadoMemoria[i] || '—';
    botao.classList.remove('certo', 'errado', 'selecionado');
  });
}

function colocarMemoria(nome) {
  if (portasResolvidas()) return;
  let indiceSlot;
  if (slotAtivo && slotAtivo.tipo === 'memoria') {
    indiceSlot = slotAtivo.slot;
  } else {
    indiceSlot = estadoMemoria.findIndex(valor => !valor);
    if (indiceSlot < 0) indiceSlot = 0;
  }
  estadoMemoria[indiceSlot] = nome;
  slotAtivo = null;
  atualizarMemoria();
  salvarProgressoPortas();
}

function atualizarTentativas() {
  const elemento = document.getElementById('tentativas');
  if (elemento) elemento.textContent = 'Tentativas: ' + tentativas;
}

function salvarProgressoPortas() {
  memoria.salvar(CHAVES.progresso, JSON.stringify({
    portas: estadoPortas,
    clocks: estadoClocks,
    memoria: estadoMemoria,
    tentativas
  }));
  if (document.querySelector('.etapa-quiz')) atualizarNavegacao();
}

function restaurarProgressoPortas() {
  let dados;
  try {
    dados = JSON.parse(memoria.ler(CHAVES.progresso));
  } catch (erro) {
    return;
  }
  if (!dados || typeof dados !== 'object') return;

  if (Array.isArray(dados.portas)) {
    PUZZLES.forEach((puzzle, indice) => {
      estadoPortas[indice] = Array.isArray(dados.portas[indice]) ? dados.portas[indice] : [];
    });
  }
  if (Array.isArray(dados.clocks)) {
    CLOCKS.forEach((clock, indice) => {
      estadoClocks[indice] = dados.clocks[indice] || null;
    });
  }
  if (Array.isArray(dados.memoria)) estadoMemoria = dados.memoria;
  if (Number.isFinite(dados.tentativas) && dados.tentativas >= 0) tentativas = dados.tentativas;
}

function limparMarcacoes() {
  document.querySelectorAll('.slot, .opcao-clock').forEach(botao => {
    botao.classList.remove('certo', 'errado', 'selecionado');
  });
}

function zerarDesafios() {
  PUZZLES.forEach((puzzle, indice) => {
    estadoPortas[indice] = [];
  });
  CLOCKS.forEach((clock, indice) => {
    estadoClocks[indice] = null;
  });
  estadoMemoria = [];
  slotAtivo = null;
  document.querySelectorAll('#puzzles .puzzle, #clocks .clock-card, #memoria-puzzle').forEach(card => {
    card.classList.remove('resolvido');
  });
  PUZZLES.forEach((puzzle, indice) => atualizarPuzzle(indice));
  CLOCKS.forEach((clock, indice) => atualizarClock(indice));
  atualizarMemoria();
  limparMarcacoes();
  salvarProgressoPortas();
}

function atualizarPuzzle(indice) {
  const area = document.getElementById('puzzles');
  if (!area) return;
  const card = area.querySelector('[data-puzzle="' + indice + '"]');
  if (!card) return;

  PUZZLES[indice].slots.forEach((slot, i) => {
    const botao = card.querySelector('[data-slot="' + i + '"]');
    const valor = botao.querySelector('.slot-valor');
    valor.textContent = estadoPortas[indice][i] || '—';
    botao.classList.remove('certo', 'errado', 'selecionado');
  });
}

function colocarPorta(indicePuzzle, nome) {
  if (portasResolvidas()) return;

  let indiceSlot;
  if (slotAtivo && slotAtivo.tipo === 'porta' && slotAtivo.puzzle === indicePuzzle) {
    indiceSlot = slotAtivo.slot;
  } else {
    indiceSlot = estadoPortas[indicePuzzle].findIndex(valor => !valor);
    if (indiceSlot < 0) indiceSlot = 0;
  }

  estadoPortas[indicePuzzle][indiceSlot] = nome;
  slotAtivo = null;
  atualizarPuzzle(indicePuzzle);
  salvarProgressoPortas();
}

function limparPuzzle(indice) {
  if (portasResolvidas()) return;
  estadoPortas[indice] = [];
  slotAtivo = null;
  const card = document.querySelector('#puzzles [data-puzzle="' + indice + '"]');
  if (card) card.classList.remove('resolvido');
  atualizarPuzzle(indice);
  salvarProgressoPortas();
}

function montarPortas() {
  const area = document.getElementById('puzzles');
  if (!area) return;

  restaurarProgressoPortas();

  const jaResolvido = portasResolvidas();
  if (jaResolvido && tentativas === 0) tentativas = 1;

  PUZZLES.forEach((puzzle, indicePuzzle) => {
    if (jaResolvido) {
      estadoPortas[indicePuzzle] = puzzle.slots.map(slot => slot.resposta);
    }

    const card = document.createElement('article');
    card.className = 'puzzle etapa-quiz' + (jaResolvido ? ' resolvido' : '');
    card.dataset.puzzle = indicePuzzle;
    card.dataset.etapa = indicePuzzle;

    const titulo = document.createElement('h3');
    titulo.textContent = puzzle.titulo;
    const descricao = document.createElement('p');
    descricao.textContent = puzzle.descricao;

    const slots = document.createElement('div');
    slots.className = 'slots';
    puzzle.slots.forEach((slot, indiceSlot) => {
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'slot';
      botao.dataset.slot = indiceSlot;

      const numero = document.createElement('span');
      numero.className = 'slot-num';
      numero.textContent = indiceSlot + 1;
      const pista = document.createElement('span');
      pista.textContent = slot.pista;
      const valor = document.createElement('span');
      valor.className = 'slot-valor';
      valor.textContent = estadoPortas[indicePuzzle][indiceSlot] || '—';

      botao.appendChild(numero);
      botao.appendChild(pista);
      botao.appendChild(valor);

      botao.addEventListener('click', () => {
        if (portasResolvidas()) return;
        document.querySelectorAll('.slot').forEach(item => item.classList.remove('selecionado'));
        botao.classList.add('selecionado');
        slotAtivo = { tipo: 'porta', puzzle: indicePuzzle, slot: indiceSlot };
      });

      slots.appendChild(botao);
    });

    const portas = document.createElement('div');
    portas.className = 'portas';
    puzzle.opcoes.forEach(nome => {
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'porta';

      const forte = document.createElement('strong');
      forte.textContent = nome;
      const tabela = document.createElement('small');
      tabela.textContent = descritorPorta(nome).split(' · ')[1];

      botao.appendChild(forte);
      botao.appendChild(tabela);
      botao.addEventListener('click', () => colocarPorta(indicePuzzle, nome));
      portas.appendChild(botao);
    });

    const acoes = document.createElement('div');
    acoes.className = 'puzzle-acoes';
    const limpar = document.createElement('button');
    limpar.type = 'button';
    limpar.className = 'botao secundario';
    limpar.textContent = 'Limpar este puzzle';
    limpar.addEventListener('click', () => limparPuzzle(indicePuzzle));
    acoes.appendChild(limpar);

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(slots);
    card.appendChild(portas);
    card.appendChild(acoes);
    area.appendChild(card);
  });

  const areaClocks = document.getElementById('clocks');
  if (areaClocks) {
    CLOCKS.forEach((clock, indice) => {
      if (jaResolvido) estadoClocks[indice] = clock.resposta;

      const card = document.createElement('article');
      card.className = 'clock-card etapa-quiz' + (jaResolvido ? ' resolvido' : '');
      card.dataset.clock = indice;
      card.dataset.etapa = 3 + indice;

      const titulo = document.createElement('h3');
      titulo.textContent = clock.titulo;
      const enunciado = document.createElement('p');
      enunciado.textContent = clock.enunciado;

      const opcoes = document.createElement('div');
      opcoes.className = 'opcoes-clock';
      clock.opcoes.forEach(valor => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'opcao-clock';
        botao.dataset.opcao = valor;
        botao.textContent = valor;
        botao.addEventListener('click', () => escolherClock(indice, valor));
        opcoes.appendChild(botao);
      });

      card.appendChild(titulo);
      card.appendChild(enunciado);
      card.appendChild(opcoes);
      areaClocks.appendChild(card);
      atualizarClock(indice);
    });
  }

  const areaMemoria = document.getElementById('memoria-puzzle');
  if (areaMemoria) {
    areaMemoria.classList.add('etapa-quiz');
    areaMemoria.dataset.etapa = 5;

    if (jaResolvido) {
      estadoMemoria = MEMORIA.slots.map(slot => slot.resposta);
    }

    const titulo = document.createElement('h3');
    titulo.textContent = MEMORIA.titulo;
    const descricao = document.createElement('p');
    descricao.textContent = MEMORIA.descricao;

    const slots = document.createElement('div');
    slots.className = 'slots';
    MEMORIA.slots.forEach((slot, indiceSlot) => {
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'slot';
      botao.dataset.slot = indiceSlot;

      const numero = document.createElement('span');
      numero.className = 'slot-num';
      numero.textContent = indiceSlot + 1;
      const pista = document.createElement('span');
      pista.textContent = slot.pista;
      const valor = document.createElement('span');
      valor.className = 'slot-valor';
      valor.textContent = estadoMemoria[indiceSlot] || '—';

      botao.appendChild(numero);
      botao.appendChild(pista);
      botao.appendChild(valor);

      botao.addEventListener('click', () => {
        if (portasResolvidas()) return;
        document.querySelectorAll('.slot').forEach(item => item.classList.remove('selecionado'));
        botao.classList.add('selecionado');
        slotAtivo = { tipo: 'memoria', slot: indiceSlot };
      });

      slots.appendChild(botao);
    });

    const memorias = document.createElement('div');
    memorias.className = 'portas';
    MEMORIA.opcoes.forEach(nome => {
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'porta';
      const forte = document.createElement('strong');
      forte.textContent = nome;
      botao.appendChild(forte);
      botao.addEventListener('click', () => colocarMemoria(nome));
      memorias.appendChild(botao);
    });

    areaMemoria.appendChild(titulo);
    areaMemoria.appendChild(descricao);
    areaMemoria.appendChild(slots);
    areaMemoria.appendChild(memorias);
    if (jaResolvido) areaMemoria.classList.add('resolvido');
    atualizarMemoria();
  }

  if (jaResolvido) {
    const estado = estadoFantasma();
    ligarComputador(false, 0, estado);
  }
  atualizarTentativas();
}

function ligarComputador(novo, ganho, estado) {
  const computador = document.getElementById('computador');
  if (computador) computador.classList.add('ligado');
  const tela = document.getElementById('texto-tela');
  if (tela) tela.textContent = 'COMPUTADOR LIGADO';
  const recompensa = document.getElementById('recompensa');
  if (recompensa) recompensa.hidden = false;
  const enviar = document.getElementById('enviar');
  if (enviar) enviar.disabled = true;

  document.querySelectorAll('#puzzles button, #clocks button, #memoria-puzzle button').forEach(botao => {
    botao.disabled = true;
  });

  const explicacao = document.getElementById('explicacao');
  if (explicacao) explicacao.hidden = false;

  const titulo = document.getElementById('recompensa-titulo');
  const texto = document.getElementById('recompensa-texto');
  const status = document.getElementById('status-energia');

  if (titulo) {
    titulo.textContent = estado === 'morto' ? 'Fantasma derrotado!' : 'Fantasma escondido!';
  }

  if (novo) {
    memoria.salvar(CHAVES.portas, estado);
    const recebidas = darBonus(ganho);
    if (texto) {
      texto.textContent = 'Computador ligado. Você ganhou ' + recebidas + ' vida(s) extra(s) para a cruzadinha.';
    }
    if (status) {
      status.textContent = estado === 'morto'
        ? 'Você acertou os 6 desafios de primeira: o fantasma morreu e você ganhou 2 vidas.'
        : 'Você chegou aos 6 acertos: o fantasma se escondeu e você ganhou 1 vida.';
    }
  } else {
    if (texto) texto.textContent = 'Sua vida extra já está disponível na cruzadinha.';
    if (status) {
      status.textContent = estado === 'morto'
        ? 'Você já derrotou o fantasma e ligou o computador.'
        : 'Você já ligou o computador. O fantasma está escondido.';
    }
  }
}

function baguncarTudo(acertos) {
  zerarDesafios();
  mostrarEtapa(0);
  const status = document.getElementById('status-energia');
  if (status) {
    status.textContent = 'Você acertou ' + acertos + ' de ' + TOTAL_DESAFIOS +
      '. O fantasma bagunçou tudo de novo: refaça os desafios!';
  }
}

function enviarEnergia() {
  if (portasResolvidas()) return;

  tentativas++;
  let acertos = 0;
  const status = document.getElementById('status-energia');

  PUZZLES.forEach((puzzle, indice) => {
    const valores = estadoPortas[indice];
    const correto = valores.length === puzzle.slots.length &&
      puzzle.slots.every((slot, i) => valores[i] === slot.resposta);

    if (correto) acertos++;
    const card = document.querySelector('#puzzles [data-puzzle="' + indice + '"]');
    if (card) card.classList.toggle('resolvido', correto);

    puzzle.slots.forEach((slot, i) => {
      const botao = card.querySelector('[data-slot="' + i + '"]');
      if (!botao) return;
      botao.classList.remove('certo', 'errado');
      if (valores[i]) {
        botao.classList.add(valores[i] === slot.resposta ? 'certo' : 'errado');
      }
    });
  });

  CLOCKS.forEach((clock, indice) => {
    const correto = estadoClocks[indice] === clock.resposta;
    if (correto) acertos++;

    const card = document.querySelector('#clocks [data-clock="' + indice + '"]');
    if (card) card.classList.toggle('resolvido', correto);
    if (card) {
      card.querySelectorAll('.opcao-clock').forEach(botao => {
        botao.classList.remove('certo', 'errado');
        if (estadoClocks[indice]) {
          botao.classList.add(botao.dataset.opcao === clock.resposta ? 'certo' : 'errado');
        }
      });
    }
  });

  const memoriaCerta = estadoMemoria.length === MEMORIA.slots.length &&
    MEMORIA.slots.every((slot, i) => estadoMemoria[i] === slot.resposta);
  if (memoriaCerta) acertos++;

  const cardMemoria = document.getElementById('memoria-puzzle');
  if (cardMemoria) cardMemoria.classList.toggle('resolvido', memoriaCerta);
  if (cardMemoria) {
    MEMORIA.slots.forEach((slot, i) => {
      const botao = cardMemoria.querySelector('[data-slot="' + i + '"]');
      if (!botao) return;
      botao.classList.remove('certo', 'errado');
      if (estadoMemoria[i]) {
        botao.classList.add(estadoMemoria[i] === slot.resposta ? 'certo' : 'errado');
      }
    });
  }

  atualizarTentativas();

  if (acertos === TOTAL_DESAFIOS) {
    if (tentativas === 1) {
      ligarComputador(true, 2, 'morto');
    } else {
      ligarComputador(true, 1, 'escondido');
    }
    salvarProgressoPortas();
  } else {
    baguncarTudo(acertos);
  }

  document.querySelectorAll('.opcao-relampago').forEach(botao => {
    if (botao.dataset.resposta === RELAMPAGO.resposta) botao.classList.add('certo');
    else if (memoria.ler(CHAVES.clockOk) === '0' && botao.classList.contains('selecionado')) {
      botao.classList.add('errado');
    }
  });

  const statusFinal = document.getElementById('status-energia');
  if (statusFinal) {
    statusFinal.textContent += clockRelampagoAprovado()
      ? ' Pergunta de clock: certa.'
      : ' Pergunta de clock: errada (a vitória no ritmo não conta).';
  }
}

function limparTudo() {
  limparQuiz();
  const status = document.getElementById('status-energia');
  if (status) status.textContent = 'Computador desligado e quiz limpo. Você pode refazer as 7 perguntas.';
}

const TOTAL_ETAPAS = 7;
let etapaAtual = 0;

function etapaRespondida(indice) {
  if (indice < PUZZLES.length) {
    return estadoPortas[indice].length === PUZZLES[indice].slots.length &&
      PUZZLES[indice].slots.every((slot, i) => Boolean(estadoPortas[indice][i]));
  }
  if (indice < PUZZLES.length + CLOCKS.length) {
    return Boolean(estadoClocks[indice - PUZZLES.length]);
  }
  if (indice === PUZZLES.length + CLOCKS.length) {
    return estadoMemoria.length === MEMORIA.slots.length &&
      MEMORIA.slots.every((slot, i) => Boolean(estadoMemoria[i]));
  }
  return memoria.ler(CHAVES.clockOk) !== null;
}

function atualizarNavegacao() {
  const progresso = document.getElementById('quiz-progresso');
  if (progresso) progresso.textContent = 'Pergunta ' + (etapaAtual + 1) + ' de ' + TOTAL_ETAPAS;

  const anterior = document.getElementById('quiz-anterior');
  const proxima = document.getElementById('quiz-proxima');
  const enviar = document.getElementById('enviar');
  const travado = portasResolvidas();

  if (anterior) anterior.disabled = travado || etapaAtual === 0;
  if (proxima) proxima.disabled = travado || etapaAtual >= TOTAL_ETAPAS - 1 || !etapaRespondida(etapaAtual);
  if (enviar) {
    enviar.hidden = etapaAtual !== TOTAL_ETAPAS - 1;
    enviar.disabled = travado || etapaAtual !== TOTAL_ETAPAS - 1 || !etapaRespondida(etapaAtual);
  }
}

function mostrarEtapa(indice) {
  etapaAtual = Math.max(0, Math.min(TOTAL_ETAPAS - 1, indice));
  if (etapaAtual !== TOTAL_ETAPAS - 1 && estadoRelampago.ativo) reiniciarClockRelampago();

  document.querySelectorAll('.etapa-quiz').forEach(card => {
    card.hidden = Number(card.dataset.etapa) !== etapaAtual;
  });
  atualizarNavegacao();
}

const RELAMPAGO = { tempo: 20, resposta: '1000 MHz' };
const estadoRelampago = { ativo: false, restante: RELAMPAGO.tempo, timer: null };

function relampagoAtualizar() {
  const elemento = document.getElementById('relampago-tempo');
  if (elemento) elemento.textContent = estadoRelampago.restante;
}

function relampagoOpcoes(habilitar) {
  document.querySelectorAll('.opcao-relampago').forEach(botao => {
    botao.disabled = !habilitar;
    botao.classList.remove('certo', 'errado');
  });
}

function reiniciarClockRelampago() {
  clearInterval(estadoRelampago.timer);
  estadoRelampago.ativo = false;
  estadoRelampago.restante = RELAMPAGO.tempo;
  relampagoOpcoes(false);
  relampagoAtualizar();

  const iniciar = document.getElementById('relampago-iniciar');
  if (iniciar) {
    iniciar.disabled = false;
    iniciar.textContent = 'Começar pergunta';
  }
  const status = document.getElementById('relampago-status');
  if (status) status.textContent = 'Você terá 20 segundos para responder. O resultado aparece no final.';
}

function relampagoEncerrar(acertou, motivo) {
  estadoRelampago.ativo = false;
  clearInterval(estadoRelampago.timer);
  relampagoOpcoes(false);

  const iniciar = document.getElementById('relampago-iniciar');
  if (iniciar) {
    iniciar.disabled = false;
    iniciar.textContent = 'Tentar de novo';
  }

  const status = document.getElementById('relampago-status');
  memoria.salvar(CHAVES.clockOk, acertou ? 1 : 0);
  atualizarNavegacao();
  if (status) {
    status.textContent = motivo === 'tempo'
      ? 'Tempo esgotado. O resultado aparece no final.'
      : 'Resposta enviada. O resultado aparece no final.';
  }
}

function relampagoIniciar() {
  clearInterval(estadoRelampago.timer);
  estadoRelampago.ativo = true;
  estadoRelampago.restante = RELAMPAGO.tempo;
  relampagoOpcoes(true);
  relampagoAtualizar();

  const iniciar = document.getElementById('relampago-iniciar');
  if (iniciar) {
    iniciar.disabled = true;
    iniciar.textContent = 'Respondendo...';
  }
  const status = document.getElementById('relampago-status');
  if (status) status.textContent = 'Corra! Você tem 20 segundos para responder.';

  estadoRelampago.timer = setInterval(() => {
    estadoRelampago.restante--;
    relampagoAtualizar();
    if (estadoRelampago.restante <= 0) relampagoEncerrar(false, 'tempo');
  }, 1000);
}

function relampagoResponder(botao) {
  if (!estadoRelampago.ativo) return;
  botao.classList.add('selecionado');
  relampagoEncerrar(botao.dataset.resposta === RELAMPAGO.resposta, 'erro');
}

function montarClockRelampago() {
  if (!document.getElementById('clock-relampago')) return;
  document.querySelectorAll('.opcao-relampago').forEach(botao => {
    botao.addEventListener('click', () => relampagoResponder(botao));
  });
  const iniciar = document.getElementById('relampago-iniciar');
  if (iniciar) iniciar.addEventListener('click', relampagoIniciar);
  reiniciarClockRelampago();
}

const RITMO = { meta: 10, tempo: 30, visivel: 900 };
const estadoRitmo = {
  ativo: false,
  acertos: 0,
  restante: RITMO.tempo,
  celulas: [],
  timer: null,
  movel: null,
  ultimo: -1
};

function criarFantasmaMini() {
  const fantasma = document.createElement('div');
  fantasma.className = 'fantasma-mini';
  fantasma.setAttribute('aria-hidden', 'true');
  const olhos = document.createElement('span');
  olhos.className = 'fantasma-mini-olhos';
  olhos.textContent = '• •';
  const boca = document.createElement('span');
  boca.className = 'fantasma-mini-boca';
  boca.textContent = '⌣';
  fantasma.appendChild(olhos);
  fantasma.appendChild(boca);
  return fantasma;
}

function ritmoAtualizar() {
  const acertos = document.getElementById('ritmo-acertos');
  if (acertos) acertos.textContent = estadoRitmo.acertos;
  const tempo = document.getElementById('ritmo-tempo');
  if (tempo) tempo.textContent = estadoRitmo.restante;
  const barra = document.getElementById('ritmo-barra-preenchida');
  if (barra) {
    const progresso = Math.min(100, estadoRitmo.acertos / RITMO.meta * 100);
    barra.style.width = progresso + '%';
  }
}

function limparPalco() {
  estadoRitmo.celulas.forEach(celula => {
    celula.innerHTML = '';
    celula.classList.remove('com-fantasma', 'acertou', 'errou');
  });
}

function ritmoProximo() {
  if (!estadoRitmo.ativo || !estadoRitmo.celulas.length) return;
  clearTimeout(estadoRitmo.movel);
  limparPalco();

  let indice = Math.floor(Math.random() * estadoRitmo.celulas.length);
  if (estadoRitmo.celulas.length > 1) {
    while (indice === estadoRitmo.ultimo) {
      indice = Math.floor(Math.random() * estadoRitmo.celulas.length);
    }
  }
  estadoRitmo.ultimo = indice;

  const celula = estadoRitmo.celulas[indice];
  celula.appendChild(criarFantasmaMini());
  celula.classList.add('com-fantasma');

  const visivel = Math.max(320, RITMO.visivel - estadoRitmo.acertos * 55);
  estadoRitmo.movel = setTimeout(() => {
    if (!estadoRitmo.ativo) return;
    limparPalco();
    ritmoProximo();
  }, visivel);
}

function ritmoEncerrar(venceu) {
  estadoRitmo.ativo = false;
  clearInterval(estadoRitmo.timer);
  clearTimeout(estadoRitmo.movel);
  limparPalco();

  const status = document.getElementById('ritmo-status');
  const iniciar = document.getElementById('ritmo-iniciar');
  const resultado = document.getElementById('ritmo-resultado');

  const aprovado = clockRelampagoAprovado();
  const vitoriaValida = venceu && aprovado;
  const jaVenceu = memoria.ler(CHAVES.ritmo) === '1';
  const clockPendente = venceu && !aprovado;
  const derrotado = vitoriaValida || (jaVenceu && !clockPendente);

  if (status) {
    if (vitoriaValida) {
      status.textContent = 'Você acertou 10 aparições. O fantasma foi derrotado!';
    } else if (clockPendente) {
      status.textContent = 'Você acertou 10 aparições, mas não passou na pergunta de clock. A vitória não conta!';
    } else {
      status.textContent = 'O tempo acabou. O fantasma escapou, mas você pode tentar de novo.';
    }
  }
  if (iniciar) {
    iniciar.disabled = false;
    iniciar.textContent = venceu ? 'Jogar de novo' : 'Tentar de novo';
  }
  if (resultado) {
    resultado.hidden = false;
    const titulo = document.getElementById('ritmo-resultado-titulo');
    const texto = document.getElementById('ritmo-resultado-texto');
    if (titulo) {
      titulo.textContent = derrotado
        ? 'Fantasma derrotado!'
        : clockPendente ? 'Vitória não contou!' : 'O fantasma escapou!';
    }
    if (texto) {
      if (derrotado) {
        texto.textContent = 'Vitórias: ' + totalVitorias() + '. Quiz resetado: clique em Quiz do fantasma para jogar de novo.';
      } else if (clockPendente) {
        texto.textContent = 'Volte ao quiz, acerte a pergunta de clock em 20 segundos e tente de novo.';
      } else {
        texto.textContent = 'Você acertou ' + estadoRitmo.acertos + ' de 10. Clique em tentar de novo.';
      }
    }
  }

  if (vitoriaValida) {
    memoria.salvar(CHAVES.ritmo, 1);
    registrarVitoria();
    limparQuiz();
  }
}

function ritmoIniciar() {
  if (!estadoRitmo.celulas.length) return;
  clearInterval(estadoRitmo.timer);
  clearTimeout(estadoRitmo.movel);
  estadoRitmo.ativo = true;
  estadoRitmo.acertos = 0;
  estadoRitmo.restante = RITMO.tempo;
  estadoRitmo.ultimo = -1;
  limparPalco();

  const resultado = document.getElementById('ritmo-resultado');
  if (resultado) resultado.hidden = true;
  const iniciar = document.getElementById('ritmo-iniciar');
  if (iniciar) {
    iniciar.disabled = true;
    iniciar.textContent = 'Jogando...';
  }
  const status = document.getElementById('ritmo-status');
  if (status) status.textContent = 'Corra! Clique onde o fantasma aparecer.';

  ritmoAtualizar();
  ritmoProximo();

  estadoRitmo.timer = setInterval(() => {
    estadoRitmo.restante--;
    ritmoAtualizar();
    if (estadoRitmo.restante <= 0) ritmoEncerrar(false);
  }, 1000);
}

function ritmoClique(celula) {
  if (!estadoRitmo.ativo) return;

  if (celula.classList.contains('com-fantasma')) {
    estadoRitmo.acertos++;
    celula.classList.add('acertou');
    ritmoAtualizar();

    if (estadoRitmo.acertos >= RITMO.meta) {
      ritmoEncerrar(true);
      return;
    }

    const status = document.getElementById('ritmo-status');
    if (status) {
      status.textContent = 'Acerto! Faltam ' + (RITMO.meta - estadoRitmo.acertos) + '.';
    }
    ritmoProximo();
  } else {
    celula.classList.remove('errou');
    void celula.offsetWidth;
    celula.classList.add('errou');
    setTimeout(() => celula.classList.remove('errou'), 200);
  }
}

function montarRitmo() {
  const palco = document.getElementById('palco-ritmo');
  if (!palco) return;

  for (let i = 0; i < 9; i++) {
    const celula = document.createElement('button');
    celula.type = 'button';
    celula.className = 'ritmo-celula';
    celula.dataset.celula = i;
    celula.setAttribute('aria-label', 'Casa ' + (i + 1) + ' do palco');
    celula.addEventListener('click', () => ritmoClique(celula));
    palco.appendChild(celula);
  }
  estadoRitmo.celulas = Array.from(palco.querySelectorAll('.ritmo-celula'));

  const iniciar = document.getElementById('ritmo-iniciar');
  if (iniciar) iniciar.addEventListener('click', ritmoIniciar);

  ritmoAtualizar();
  const status = document.getElementById('ritmo-status');
  if (status) {
    if (!clockRelampagoAprovado()) {
      status.textContent = 'Atenção: acerte a pergunta de clock no quiz para que esta vitória conte.';
    } else if (memoria.ler(CHAVES.ritmo) === '1') {
      status.textContent = 'Você já derrotou o fantasma. Pode jogar de novo!';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  montarHome();
  montarTabuleiro();
  montarPistas();
  montarIdeias();
  montarPortas();
  montarClockRelampago();
  montarRitmo();

  const temTabuleiro = Boolean(document.getElementById('tabuleiro'));

  if (temTabuleiro) {
    atualizarVidasCross();
  }

  const botaoConferir = document.getElementById('conferir');
  const botaoReiniciar = document.getElementById('reiniciar');
  if (botaoConferir) botaoConferir.addEventListener('click', conferir);
  if (botaoReiniciar) botaoReiniciar.addEventListener('click', () => {
    if (!derrotado) reiniciarTabuleiro();
  });

  const overlayPrincipal = document.getElementById('overlay-principal');
  if (overlayPrincipal) overlayPrincipal.addEventListener('click', () => {
    if (acaoOverlay) acaoOverlay();
  });

  const botaoEnviar = document.getElementById('enviar');
  const botaoLimpar = document.getElementById('limpar-tudo');
  if (botaoEnviar) botaoEnviar.addEventListener('click', enviarEnergia);
  if (botaoLimpar) botaoLimpar.addEventListener('click', limparTudo);

  const botaoReiniciarQuiz = document.getElementById('reiniciar-quiz');
  if (botaoReiniciarQuiz) {
    botaoReiniciarQuiz.addEventListener('click', () => {
      limparQuiz();
      const status = document.getElementById('status-energia');
      if (status) status.textContent = 'Novo jogo! O computador desligou e as 7 perguntas voltaram ao início.';
    });
  }

  const botaoAnterior = document.getElementById('quiz-anterior');
  const botaoProxima = document.getElementById('quiz-proxima');
  if (botaoAnterior) botaoAnterior.addEventListener('click', () => mostrarEtapa(etapaAtual - 1));
  if (botaoProxima) botaoProxima.addEventListener('click', () => mostrarEtapa(etapaAtual + 1));

  if (document.querySelector('.etapa-quiz')) mostrarEtapa(0);
});
