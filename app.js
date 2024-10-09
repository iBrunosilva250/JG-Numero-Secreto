let listaDeNumeroSorteados = []
let númeroLimite = 10;
let númeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2}); 
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == númeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o nùmero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > númeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let númeroEscolhido = parseInt(Math.random() * númeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

   if (quantidadeDeElementosNaLista == númeroLimite) {
        listaDeNumeroSorteados = [];
   }

   if(listaDeNumeroSorteados.includes(númeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(númeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return númeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    númeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

