//Fundo Inicial
document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

//Aviso
Aviso()

//Barra Lateral Inicial
document.getElementById('item-lateral').classList.add('hollow-lateral')
document.getElementById('item-lateral2').classList.add('hollow-lateral')
document.getElementById('item-lateral3').classList.add('hollow-lateral')

//Variaveis
var Nav = document.getElementById('principal')
var Rodape = document.getElementById('rodape')

var ItemLateral = document.getElementById('item-lateral')
var ItemLateral2 = document.getElementById('item-lateral2')
var ItemLateral3 = document.getElementById('item-lateral3')


var x = 0
var y = 0

//Função >> aviso telefone
function Aviso(){
    Largura = window.innerWidth
    Altura = window.innerHeight

    if(Largura <= 575.98 && y == 0){
        y++

        window.alert('Caso você esteja no telefone, ative a opção: "Para computador." Para uma melhor experiência.')
    }
}

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
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.toggle('hollow')

            //Listas Laterais
            ItemLateral.classList.toggle('hollow-lateral')
            ItemLateral2.classList.toggle('hollow-lateral')
            ItemLateral3.classList.toggle('hollow-lateral')

            //Rodape
            Rodape.classList.toggle('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.toggle('messenger')

            //Listas Laterais
            ItemLateral.classList.toggle('messenger-lateral')
            ItemLateral2.classList.toggle('messenger-lateral')
            ItemLateral3.classList.toggle('messenger-lateral')

            //Rodape
            Rodape.classList.toggle('messenger')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.toggle('ori')

            //Listas Laterais
            ItemLateral.classList.toggle('ori-lateral')
            ItemLateral2.classList.toggle('ori-lateral')
            ItemLateral3.classList.toggle('ori-lateral')

            //Rodape
            Rodape.classList.toggle('ori')
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
        case 2:
            //Fundo_Metro
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'ori')
            Nav.classList.add('hollow')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'ori-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'ori-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'ori-lateral')

            ItemLateral.classList.add('hollow-lateral')
            ItemLateral2.classList.add('hollow-lateral')
            ItemLateral3.classList.add('hollow-lateral')

            //Rodape
            Rodape.classList.remove('messenger', 'ori')
            Rodape.classList.add('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('hollow', 'ori')
            Nav.classList.add('messenger')

            //Listas Laterais
            ItemLateral.classList.remove('hollow-lateral', 'ori-lateral')
            ItemLateral2.classList.remove('hollow-lateral', 'ori-lateral')
            ItemLateral3.classList.remove('hollow-lateral', 'ori-lateral')

            ItemLateral.classList.add('messenger-lateral')
            ItemLateral2.classList.add('messenger-lateral')
            ItemLateral3.classList.add('messenger-lateral')
            

            //Rodape
            Rodape.classList.remove('hollow', 'ori')
            Rodape.classList.add('messenger')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'ori')
            Nav.classList.add('ori')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral')

            ItemLateral.classList.add('ori-lateral')
            ItemLateral2.classList.add('ori-lateral')
            ItemLateral3.classList.add('ori-lateral')
            

            //Rodape
            Rodape.classList.remove('hollow', 'messenger')
            Rodape.classList.add('ori')
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
    Nav.classList.remove('messenger', 'ori')

    //Lista Lateral + Navegação
    Nav.classList.add('hollow')

    ItemLateral.classList.remove('messenger-lateral', 'ori-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'ori-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'ori-lateral')

    ItemLateral.classList.add('hollow-lateral')
    ItemLateral2.classList.add('hollow-lateral')
    ItemLateral3.classList.add('hollow-lateral')
    

    //Rodape
    Rodape.classList.remove('messenger', 'ori')
    Rodape.classList.add('hollow')
}

function FundoMessenger(){
    //Variaveis
    x = 1

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'

    //Remover classes
    Nav.classList.remove('hollow', 'ori')

    //Lista Lateral + Navegação
    Nav.classList.add('messenger')

    ItemLateral.classList.remove('hollow-lateral', 'ori-lateral')  
    ItemLateral2.classList.remove('hollow-lateral', 'ori-lateral')
    ItemLateral3.classList.remove('hollow-lateral', 'ori-lateral')

    ItemLateral.classList.add('messenger-lateral')
    ItemLateral2.classList.add('messenger-lateral')
    ItemLateral3.classList.add('messenger-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'ori')
    Rodape.classList.add('messenger')
}

function FundoOri(){
    //Variaveis
    x = 2

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'

    //Remover classes
    Nav.classList.remove('hollow', 'messenger')

    //Lista Lateral + Navegação
    Nav.classList.add('ori')

    ItemLateral.classList.remove('hollow-lateral', 'messenger-lateral')  
    ItemLateral2.classList.remove('hollow-lateral', 'messenger-lateral')
    ItemLateral3.classList.remove('hollow-lateral', 'messenger-lateral')

    ItemLateral.classList.add('ori-lateral')
    ItemLateral2.classList.add('ori-lateral')
    ItemLateral3.classList.add('ori-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'messenger')
    Rodape.classList.add('ori')
}
