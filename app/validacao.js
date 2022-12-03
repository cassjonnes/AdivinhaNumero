function verificaSeOChutePossuiUmValorValido (chute){
    const numero = +chute

    if(chueteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>O número deve estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }
    else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>`
    }
    else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>`
    }
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

function chueteForInvalido(numero) {
    return Number.isNaN(numero)
}

