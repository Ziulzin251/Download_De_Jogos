function corBotao(){
    var botoes = document.getElementsByClassName('btn')

    for(var itens of botoes){
      itens.classList.remove('btn-primary')
      itens.classList.add('btn-success')
    }
}

function botaoNormal(){
    var botoes = document.getElementsByClassName('btn')

    for(var itens of botoes){
      itens.classList.remove('btn-success')
      itens.classList.add('btn-primary')
    }
}