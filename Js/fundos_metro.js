//Fundo Inicial
document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

//Barra Lateral Inicial
document.getElementById('item-lateral').classList.add('hollow-lateral')
document.getElementById('item-lateral2').classList.add('hollow-lateral')
document.getElementById('item-lateral3').classList.add('hollow-lateral')
document.getElementById('item-lateral4').classList.add('hollow-lateral')
document.getElementById('item-lateral5').classList.add('hollow-lateral')
document.getElementById('item-lateral6').classList.add('hollow-lateral')

//Variaveis
var Nav = document.getElementById('principal')
var Rodape = document.getElementById('rodape')

var ItemLateral = document.getElementById('item-lateral')
var ItemLateral2 = document.getElementById('item-lateral2')
var ItemLateral3 = document.getElementById('item-lateral3')
var ItemLateral4 = document.getElementById('item-lateral4')
var ItemLateral5 = document.getElementById('item-lateral5')
var ItemLateral6 = document.getElementById('item-lateral6')


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
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'
            break
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'blood', 'ori', 'blas', 'rain')
            Nav.classList.add('hollow')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'blood-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')

            ItemLateral.classList.add('hollow-lateral')
            ItemLateral2.classList.add('hollow-lateral')
            ItemLateral3.classList.add('hollow-lateral')
            ItemLateral4.classList.add('hollow-lateral')
            ItemLateral5.classList.add('hollow-lateral')
            ItemLateral6.classList.add('hollow-lateral')

            //Rodape
            Rodape.classList.remove('blood', 'messenger', 'ori', 'blas', 'rain')
            Rodape.classList.add('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.toggle('messenger')

            //Listas Laterais
            ItemLateral.classList.toggle('messenger-lateral')
            ItemLateral2.classList.toggle('messenger-lateral')
            ItemLateral3.classList.toggle('messenger-lateral')
            ItemLateral4.classList.toggle('messenger-lateral')
            ItemLateral5.classList.toggle('messenger-lateral')
            ItemLateral6.classList.toggle('messenger-lateral')

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
            ItemLateral4.classList.toggle('ori-lateral')
            ItemLateral5.classList.toggle('ori-lateral')
            ItemLateral6.classList.toggle('ori-lateral')

            //Rodape
            Rodape.classList.toggle('ori')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.toggle('rain')

            //Listas Laterais
            ItemLateral.classList.toggle('rain-lateral')
            ItemLateral2.classList.toggle('rain-lateral')
            ItemLateral3.classList.toggle('rain-lateral')
            ItemLateral4.classList.toggle('rain-lateral')
            ItemLateral5.classList.toggle('rain-lateral')
            ItemLateral6.classList.toggle('rain-lateral')

            //Rodape
            Rodape.classList.toggle('rain')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.toggle('blas')

            //Listas Laterais
            ItemLateral.classList.toggle('blas-lateral')
            ItemLateral2.classList.toggle('blas-lateral')
            ItemLateral3.classList.toggle('blas-lateral')
            ItemLateral4.classList.toggle('blas-lateral')
            ItemLateral5.classList.toggle('blas-lateral')
            ItemLateral6.classList.toggle('blas-lateral')

            //Rodape
            Rodape.classList.toggle('blas')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.toggle('blood')

            //Listas Laterais
            ItemLateral.classList.toggle('blood-lateral')
            ItemLateral2.classList.toggle('blood-lateral')
            ItemLateral3.classList.toggle('blood-lateral')
            ItemLateral4.classList.toggle('blood-lateral')
            ItemLateral5.classList.toggle('blood-lateral')
            ItemLateral6.classList.toggle('blood-lateral')

            //Rodape
            Rodape.classList.toggle('blood')
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
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'ori', 'rain', 'blood', 'blas')
            Nav.classList.add('hollow')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

            ItemLateral.classList.add('hollow-lateral')
            ItemLateral2.classList.add('hollow-lateral')
            ItemLateral3.classList.add('hollow-lateral')
            ItemLateral4.classList.add('hollow-lateral')
            ItemLateral5.classList.add('hollow-lateral')
            ItemLateral6.classList.add('hollow-lateral')

            //Rodape
            Rodape.classList.remove('messenger', 'ori', 'rain', 'blood', 'blas')
            Rodape.classList.add('hollow')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('hollow', 'ori', 'rain', 'blood', 'blas')
            Nav.classList.add('messenger')

            //Listas Laterais
            ItemLateral.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral2.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral3.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral4.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral5.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral6.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

            ItemLateral.classList.add('messenger-lateral')
            ItemLateral2.classList.add('messenger-lateral')
            ItemLateral3.classList.add('messenger-lateral')
            ItemLateral4.classList.add('messenger-lateral')
            ItemLateral5.classList.add('messenger-lateral')
            ItemLateral6.classList.add('messenger-lateral')
            
            //Rodape
            Rodape.classList.remove('hollow', 'ori', 'rain', 'blood', 'blas')
            Rodape.classList.add('messenger')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'hollow', 'rain', 'blood', 'blas')
            Nav.classList.add('ori')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

            ItemLateral.classList.add('ori-lateral')
            ItemLateral2.classList.add('ori-lateral')
            ItemLateral3.classList.add('ori-lateral')
            ItemLateral4.classList.add('ori-lateral')
            ItemLateral5.classList.add('ori-lateral')
            ItemLateral6.classList.add('ori-lateral')

            //Rodape
            Rodape.classList.remove('hollow', 'messenger', 'rain', 'blood', 'blas')
            Rodape.classList.add('ori')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'hollow', 'ori', 'blood', 'blas')
            Nav.classList.add('rain')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')

            ItemLateral.classList.add('rain-lateral')
            ItemLateral2.classList.add('rain-lateral')
            ItemLateral3.classList.add('rain-lateral')
            ItemLateral4.classList.add('rain-lateral')
            ItemLateral5.classList.add('rain-lateral')
            ItemLateral6.classList.add('rain-lateral')

            //Rodape
            Rodape.classList.remove('hollow', 'messenger', 'ori', 'blood', 'blas')
            Rodape.classList.add('rain')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'hollow', 'ori', 'blood', 'rain')
            Nav.classList.add('blas')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')

            ItemLateral.classList.add('blas-lateral')
            ItemLateral2.classList.add('blas-lateral')
            ItemLateral3.classList.add('blas-lateral')
            ItemLateral4.classList.add('blas-lateral')
            ItemLateral5.classList.add('blas-lateral')
            ItemLateral6.classList.add('blas-lateral')

            //Rodape
            Rodape.classList.remove('hollow', 'messenger', 'ori', 'blood', 'rain')
            Rodape.classList.add('blas')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.remove('messenger', 'hollow', 'ori', 'blas', 'rain')
            Nav.classList.add('blood')

            //Listas Laterais
            ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
            ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')

            ItemLateral.classList.add('blood-lateral')
            ItemLateral2.classList.add('blood-lateral')
            ItemLateral3.classList.add('blood-lateral')
            ItemLateral4.classList.add('blood-lateral')
            ItemLateral5.classList.add('blood-lateral')
            ItemLateral6.classList.add('blood-lateral')

            //Rodape
            Rodape.classList.remove('hollow', 'messenger', 'ori', 'blas', 'rain')
            Rodape.classList.add('blood')
            break
    }

}

//Botões embaixo de Download + Laterais
function FundoHollow(){
    //Variaveis
    x = 0

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Hollow.jpg)'

    //Barra de Navegação
    Nav.classList.remove('messenger', 'ori', 'rain', 'blood', 'blas')
    Nav.classList.add('hollow')

    //Listas Laterais
    ItemLateral.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral4.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral5.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral6.classList.remove('messenger-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

    ItemLateral.classList.add('hollow-lateral')
    ItemLateral2.classList.add('hollow-lateral')
    ItemLateral3.classList.add('hollow-lateral')
    ItemLateral4.classList.add('hollow-lateral')
    ItemLateral5.classList.add('hollow-lateral')
    ItemLateral6.classList.add('hollow-lateral')

    //Rodape
    Rodape.classList.remove('messenger', 'ori', 'rain', 'blood', 'blas')
    Rodape.classList.add('hollow')
}

function FundoMessenger(){
    //Variaveis
    x = 1

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Messenger.jpg)'

    //Barra de Navegação
    Nav.classList.remove('hollow', 'ori', 'rain', 'blood', 'blas')
    Nav.classList.add('messenger')

    //Listas Laterais
    ItemLateral.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral2.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral3.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral4.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral5.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral6.classList.remove('hollow-lateral', 'ori-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

    ItemLateral.classList.add('messenger-lateral')
    ItemLateral2.classList.add('messenger-lateral')
    ItemLateral3.classList.add('messenger-lateral')
    ItemLateral4.classList.add('messenger-lateral')
    ItemLateral5.classList.add('messenger-lateral')
    ItemLateral6.classList.add('messenger-lateral')
    
    //Rodape
    Rodape.classList.remove('hollow', 'ori', 'rain', 'blood', 'blas')
    Rodape.classList.add('messenger')
}

function FundoOri(){
    //Variaveis
    x = 2

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Ori.jpg)'

    //Barra de Navegação
    Nav.classList.remove('messenger', 'hollow', 'rain', 'blood', 'blas')
    Nav.classList.add('ori')

    //Listas Laterais
    ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'rain-lateral', 'blood-lateral', 'blas-lateral')

    ItemLateral.classList.add('ori-lateral')
    ItemLateral2.classList.add('ori-lateral')
    ItemLateral3.classList.add('ori-lateral')
    ItemLateral4.classList.add('ori-lateral')
    ItemLateral5.classList.add('ori-lateral')
    ItemLateral6.classList.add('ori-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'messenger', 'rain', 'blood', 'blas')
    Rodape.classList.add('ori')
}

function FundoRain(){
    //Variaveis
    x = 3

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Rain.jpg)'

    //Barra de Navegação
    Nav.classList.remove('messenger', 'hollow', 'ori', 'blood', 'blas')
    Nav.classList.add('rain')

    //Listas Laterais
    ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')
    ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'blas-lateral')

    ItemLateral.classList.add('rain-lateral')
    ItemLateral2.classList.add('rain-lateral')
    ItemLateral3.classList.add('rain-lateral')
    ItemLateral4.classList.add('rain-lateral')
    ItemLateral5.classList.add('rain-lateral')
    ItemLateral6.classList.add('rain-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'messenger', 'ori', 'blood', 'blas')
    Rodape.classList.add('rain')
}

function FundoBlas(){
    //Variaveis
    x = 4

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blas.jpg)'

    //Barra de Navegação
    Nav.classList.remove('messenger', 'hollow', 'ori', 'blood', 'rain')
    Nav.classList.add('blas')

    //Listas Laterais
    ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
    ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
    ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')
    ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blood-lateral', 'rain-lateral')

    ItemLateral.classList.add('blas-lateral')
    ItemLateral2.classList.add('blas-lateral')
    ItemLateral3.classList.add('blas-lateral')
    ItemLateral4.classList.add('blas-lateral')
    ItemLateral5.classList.add('blas-lateral')
    ItemLateral6.classList.add('blas-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'messenger', 'ori', 'blood', 'rain')
    Rodape.classList.add('blas')
}

function FundoBlood(){
    //Variaveis
    x = 5

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Metro/Blood.jpg)'

    //Barra de Navegação
    Nav.classList.remove('messenger', 'hollow', 'ori', 'blas', 'rain')
    Nav.classList.add('blood')

    //Listas Laterais
    ItemLateral.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
    ItemLateral2.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
    ItemLateral3.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
    ItemLateral4.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
    ItemLateral5.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')
    ItemLateral6.classList.remove('messenger-lateral', 'hollow-lateral', 'ori-lateral', 'blas-lateral', 'rain-lateral')

    ItemLateral.classList.add('blood-lateral')
    ItemLateral2.classList.add('blood-lateral')
    ItemLateral3.classList.add('blood-lateral')
    ItemLateral4.classList.add('blood-lateral')
    ItemLateral5.classList.add('blood-lateral')
    ItemLateral6.classList.add('blood-lateral')

    //Rodape
    Rodape.classList.remove('hollow', 'messenger', 'ori', 'blas', 'rain')
    Rodape.classList.add('blood')
}

