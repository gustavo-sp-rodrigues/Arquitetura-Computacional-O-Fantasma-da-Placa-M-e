# Arquitetura-Computacional-O-Fantasma-da-Placa-Mãe
# O Fantasma da Placa Mãe

Jogo educativo de Arquitetura Computacional (Sprint 3). Um fantasma desorganizou a placa mãe: as portas lógicas, os clocks e a hierarquia de memória estão fora do lugar, e os termos da aula viraram uma cruzadinha.

O projeto é feito em **HTML, CSS e JavaScript puros** e roda direto no navegador.

## Fluxo do jogo

**Home → Quiz do fantasma (`portas.html`) → Jogo de ritmo (`ritmo.html`) → Cruzadinha (`cruzadinha.html`)**

Na home tem um fantasma grande e dois botões grandes: **Derrotar o fantasma** (leva ao quiz) e **Jogar cruzadinha**. O progresso de todas as etapas aparece no final da página.

## Como jogar

### 1. Quiz do fantasma (`portas.html`)

São **7 perguntas, uma de cada vez**. Use **Próxima** e **Anterior** para navegar; o botão **Finalizar quiz** só aparece na última pergunta e **nenhum acerto ou erro aparece antes disso**.

1. Três conjuntos de portas lógicas — clique numa pista e depois na porta que combina com ela (AND, OR, NOT ou XOR). As tabelas verdade ajudam a decidir.
2. Duas contas de clock — escolha **o menor valor que atende** cada enunciado.
3. Uma ordem de memória — coloque RAM, CACHE e REGISTRADORES da **mais lenta para a mais rápida**.
4. A pergunta relâmpago de clock (20 segundos).

A pontuação do computador continua usando os **6 desafios**. Depois de responder a última pergunta, clique em **Finalizar quiz**:

- **6 acertos na primeira tentativa:** o computador liga, o fantasma **morre** e você ganha **2 vidas**.
- **6 acertos em qualquer outra tentativa:** o computador liga, o fantasma **se esconde** e você ganha **1 vida**.
- **Menos de 6 acertos:** o fantasma **bagunça tudo de novo** e você refaz os 6 desafios.

Quando o computador liga, aparece um resumo explicando cada porta lógica, o resultado das duas contas de clock e a ordem correta da memória, com o botão para o jogo de ritmo.

**Pergunta relâmpago de clock:** no painel do quiz há uma pergunta simples — "1 GHz equivale a quantos MHz?" — com **20 segundos** para responder. Clique em **Começar pergunta**, escolha **1000 MHz**. Se errar ou o tempo acabar, você pode tentar de novo, mas a vitória no jogo de ritmo **não conta** enquanto não acertar.

Os botões **Limpar tudo** e **Reiniciar quiz (novo jogo)** apagam as respostas, desligam o computador e voltam tudo ao início, inclusive depois de ter resolvido o quiz. Depois que o fantasma é derrotado no ritmo, o quiz é resetado automaticamente: na próxima vez que você clicar em **Quiz do fantasma**, terá que responder de novo.

### 2. Jogo de ritmo (`ritmo.html`)

Depois do quiz, o fantasma foge para a tela. Clique em **Começar** e acerte o fantasma **10 vezes em 30 segundos**, clicando exatamente na casa onde ele aparece. Ele fica mais rápido a cada acerto. Se o tempo acabar, tente de novo.

A vitória **só conta** se você tiver acertado a pergunta relâmpago de clock no quiz. Cada vitória válida é salva e aparece em **Vitórias** na home. Ao vencer, o fantasma é derrotado e as respostas do quiz são apagadas.

### 3. Cruzadinha (`cruzadinha.html`)

- O tabuleiro aparece inteiro na tela; as pistas ficam logo abaixo.
- Clique numa casa e digite a letra. As setas do teclado andam entre as casas.
- Use **Conferir** para ver o resultado:
  - **Verde:** letra certa, no lugar certo.
  - **Amarelo:** a letra existe na palavra, mas está no lugar errado.
  - **Vermelho:** a letra não pertence à palavra.
- Use **Reiniciar** para limpar o tabuleiro.

**Regra das vidas:** você começa com **3 vidas**. Só perde **1 vida** quando clica em **Conferir** e existe alguma letra errada (inclusive amarela). **Casas em branco não custam vida.** Ao zerar as vidas, é fim de jogo; ao acertar as 12 palavras, você vence.

### 4. Dicionário da cruzadinha (`dicionario.html`)

Todas as pistas do jogo com uma dica extra para cada palavra. Use para estudar.

## Palavras e pistas do tabuleiro

| Nº | Palavra | Pista |
|----|---------|-------|
| 1 | EEPROM | Memória que guarda dados mesmo sem energia e pode ser regravada eletricamente. |
| 2 | DUALCORE | Processador com dois núcleos que executam tarefas ao mesmo tempo. |
| 3 | QUADCORE | Processador com quatro núcleos trabalhando em paralelo no mesmo chip. |
| 4 | ULA | Parte da CPU que faz as contas e as operações lógicas. |
| 5 | UC | Parte da CPU que dirige e coordena todas as operações do computador. |
| 6 | DATABUS | Conjunto de fios que leva as informações entre os componentes. |
| 7 | FLASH | Memória usada em pendrives, apagada e gravada em blocos de uma vez. |
| 8 | RAM | Memória temporária onde ficam as tarefas em execução; some ao desligar. |
| 9 | MICROCONTROLADOR | Computador inteiro cabendo num único chip, com memória e entradas e saídas. |
| 10 | CPU | Cérebro do computador, responsável por executar as instruções dos programas. |
| 11 | ROM | Memória que vem com instruções gravadas de fábrica e não muda. |
| 12 | CACHE | Memória rápida e pequena que guarda cópias dos dados mais usados. |

Todas as 12 palavras se cruzam com pelo menos uma outra no tabuleiro.
