let listaDeNumerosSorteados = [];
<<<<<<< HEAD
<<<<<<< HEAD
let numeroLimite = 35;
=======
<<<<<<< HEAD
let numeroLimite = 50;
=======
let numeroLimite = 45;
>>>>>>> de1d17f19fedca8fdfbf609f2efae0786d5e8ef5
>>>>>>> 71c8c860b6be2bd0564b75c2371753d7332e1eb4
=======
<<<<<<< HEAD
<<<<<<< HEAD
let numeroLimite = 40;
>>>>>>> de1d17f19fedca8fdfbf609f2efae0786d5e8ef5
=======
let numeroLimite = 10;
>>>>>>> parent of 2521988 (alterando limite para 100)
=======
let numeroLimite = 35;
=======
<<<<<<< HEAD
let numeroLimite = 50;
=======
let numeroLimite = 45;
>>>>>>> de1d17f19fedca8fdfbf609f2efae0786d5e8ef5
>>>>>>> 71c8c860b6be2bd0564b75c2371753d7332e1eb4
>>>>>>> 3e70bb4c14e35e9f8a6d70aaa6b1c06501bc2e81
=======

let numeroLimite = 35;
>>>>>>> d0f885890b7e84f844145e017a7b8857caddaf68
>>>>>>> e1c82a5b0d4cf84e910e224b907e87d12ffed35b
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 40');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







