const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
                                              
const perguntas = [
    {
        enunciado: "Qual jogador de futebol voçê prefere?",
        alternativas: [
          texto: "Lionel Messi",
          afirmação: "Cristiano Ronaldo"
        ]
    },
    {
        enunciado: "Qual campeonato voçê prefere?",
        alternativas: [
          texto: "Chanpions League.",
          afirmação: "Libertadores.",
        ]
    },
    {
        enunciado: "Qual a posição que voçê prefere ?",
        alternativas: [
          texto: "Atacante.",
          afirmação: "Goleiro."
        ]
    },
    {
        enunciado: "Qual gol que vc prefere?",
        alternativas: [
          texto: "Bicicleta.",
          afirmação: "Falta."
        ]
    },
    {
        enunciado: "O Hexa vem?",
        alternativas: [
          texto: "Sim.",
          afirmação: "Não."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
          atual++;
          mostraPergunta();
        })
      caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
