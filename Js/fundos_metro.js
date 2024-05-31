//Fundo Inicial
document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

//Barra Lateral Inicial
document.getElementById('item-lateral').classList.add('hollow-lateral')
document.getElementById('item-lateral2').classList.add('hollow-lateral')

//Variaveis
var Nav = document.getElementById('principal')
var Rodape = document.getElementById('rodape')

var ItemLateral = document.getElementById('item-lateral')
var ItemLateral2 = document.getElementById('item-lateral2')

var x = 0

//Função >> muda o estilo de acorda que passa de jogo
function FundoVai(){
    if(x >= 5){
        x = 0
    } else {
        x++
    }

    switch(x){
        case 0:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'
            break
        case 1:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.toggle('hollow')

            //Listas Laterais
            ItemLateral.classList.toggle('hollow-lateral')
            ItemLateral2.classList.toggle('hollow-lateral')

            //Rodape
            Rodape.classList.toggle('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.toggle('messenger')

            //Listas Laterais
            ItemLateral.classList.toggle('messenger-lateral')
            ItemLateral2.classList.toggle('messenger-lateral')

            //Rodape
            Rodape.classList.toggle('messenger')
            break
    }
}

//Função >> muda o estilo de acorda que volta de jogo
function FundoVem(){
    if(x <=0){
        x = 5
    } else {
        x--
    }
    
    switch(x){
        case 0:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'
            break
        case 1:
            //Fundo_Metro
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('messenger')
            Nav.classList.add('hollow')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral')
            ItemLateral2.classList.remove('messenger-lateral')

            ItemLateral.classList.add('hollow-lateral')
            ItemLateral2.classList.add('hollow-lateral')

            //Rodape
            Rodape.classList.remove('messenger')
            Rodape.classList.add('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('hollow')
            Nav.classList.add('messenger')

            //Listas Laterais
            ItemLateral.classList.remove('hollow-lateral')
            ItemLateral2.classList.remove('hollow-lateral')

            ItemLateral.classList.add('messenger-lateral')
            ItemLateral2.classList.add('messenger-lateral')

            //Rodape
            Rodape.classList.remove('hollow')
            Rodape.classList.add('messenger')
            break
    }

}

//Botões embaixo de Download + Laterais
function FundoHollow(){
    //Variaveis
    x = 0

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

    //Remover classes
    Nav.classList.remove('messenger')

    //Lista Lateral + Navegação
    Nav.classList.add('hollow')

    ItemLateral.classList.remove('messenger-lateral')
    ItemLateral2.classList.remove('messenger-lateral')

    ItemLateral.classList.add('hollow-lateral')
    ItemLateral2.classList.add('hollow-lateral')

    //Rodape
    Rodape.classList.remove('messenger')
    Rodape.classList.add('hollow')
}

function FundoMessenger(){
    //Variaveis
    x = 1

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'

    //Remover classes
    Nav.classList.remove('hollow')

    //Lista Lateral + Navegação
    Nav.classList.add('messenger')

    ItemLateral.classList.remove('hollow-lateral')  
    ItemLateral2.classList.remove('hollow-lateral')

    ItemLateral.classList.add('messenger-lateral')
    ItemLateral2.classList.add('messenger-lateral')

    //Rodape
    Rodape.classList.remove('hollow')
    Rodape.classList.add('messenger')
}
