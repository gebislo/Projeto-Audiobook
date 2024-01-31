const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10
let taTocando = 0
let faixaAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPause.setAttribute('class', 'bi bi-pause-circle-fill')
}

function pausarFaixa() {
    // Alternativa 2
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausar() {
    if( taTocando === 0){
        tocarFaixa()
        taTocando = 1
        
    }else{
        pausarFaixa()
        taTocando = 0
        
    }
}

function trocarNomeDaFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + faixaAtual
}

function proximaFaixa() {
    if (faixaAtual === numeroCapitulos){
        faixaAtual = 1
    }else{
        faixaAtual = faixaAtual + 1
    }

    audioCapitulo.src = 'books/dom-casmurro/' + faixaAtual + '.mp3'
    tocarFaixa()
    taTocando = 1
    trocarNomeDaFaixa()
}

function faixaAnterior() {
    if (faixaAtual === 1){
        faixaAtual = numeroCapitulos
    }else{
        faixaAtual = faixaAtual - 1
    }

    audioCapitulo.src = 'books/dom-casmurro/' + faixaAtual + '.mp3'
    tocarFaixa()
    taTocando = 1
    trocarNomeDaFaixa()
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
botaoProximo.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', faixaAnterior)