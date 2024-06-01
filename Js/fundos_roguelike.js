//Fundo Inicial
document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'

//Barra Lateral Inicial
document.getElementById('item-lateral').classList.add('dead-lateral')
document.getElementById('item-lateral2').classList.add('dead-lateral')
document.getElementById('item-lateral3').classList.add('dead-lateral')
document.getElementById('item-lateral4').classList.add('dead-lateral')
document.getElementById('item-lateral5').classList.add('dead-lateral')
document.getElementById('item-lateral6').classList.add('dead-lateral')

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
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'
            break
        case 1:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.toggle('dead')

            //Listas Laterais
            ItemLateral.classList.toggle('dead-lateral')
            ItemLateral2.classList.toggle('dead-lateral')
            ItemLateral3.classList.toggle('dead-lateral')
            ItemLateral4.classList.toggle('dead-lateral')
            ItemLateral5.classList.toggle('dead-lateral')
            ItemLateral6.classList.toggle('dead-lateral')

            //Rodape
            Rodape.classList.toggle('dead')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.toggle('moon')

            //Listas Laterais
            ItemLateral.classList.toggle('moon-lateral')
            ItemLateral2.classList.toggle('moon-lateral')
            ItemLateral3.classList.toggle('moon-lateral')
            ItemLateral4.classList.toggle('moon-lateral')
            ItemLateral5.classList.toggle('moon-lateral')
            ItemLateral6.classList.toggle('moon-lateral')

            //Rodape
            Rodape.classList.toggle('moon')
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
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'
            break
        case 1:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('moon')
            Nav.classList.add('dead')

            //Listas Laterais
            ItemLateral.classList.remove('moon-lateral')
            ItemLateral2.classList.remove('moon-lateral')
            ItemLateral3.classList.remove('moon-lateral')
            ItemLateral4.classList.remove('moon-lateral')
            ItemLateral5.classList.remove('moon-lateral')
            ItemLateral6.classList.remove('moon-lateral')


            ItemLateral.classList.add('dead-lateral')
            ItemLateral2.classList.add('dead-lateral')
            ItemLateral3.classList.add('dead-lateral')
            ItemLateral4.classList.add('dead-lateral')
            ItemLateral5.classList.add('dead-lateral')
            ItemLateral6.classList.add('dead-lateral')


            //Rodape
            Rodape.classList.remove('moon')
            Rodape.classList.add('dead')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('dead')
            Nav.classList.add('moon')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral')
            ItemLateral2.classList.remove('dead-lateral')
            ItemLateral3.classList.remove('dead-lateral')
            ItemLateral4.classList.remove('dead-lateral')
            ItemLateral5.classList.remove('dead-lateral')
            ItemLateral6.classList.remove('dead-lateral')

            ItemLateral.classList.add('moon-lateral')
            ItemLateral2.classList.add('moon-lateral')
            ItemLateral3.classList.add('moon-lateral')
            ItemLateral4.classList.add('moon-lateral')
            ItemLateral5.classList.add('moon-lateral')
            ItemLateral6.classList.add('moon-lateral')

            //Rodape
            Rodape.classList.remove('dead')
            Rodape.classList.add('moon')
            break
    }

}

//Botões embaixo de Download + Laterais
function FundoDead(){
    //Variaveis
    x = 0

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Dead_Cells.jpg)'

    //Remover classes
    Nav.classList.remove('moon')

    //Lista Lateral + Navegação
    Nav.classList.add('dead')

    ItemLateral.classList.remove('moon-lateral')
    ItemLateral2.classList.remove('moon-lateral')
    ItemLateral3.classList.remove('moon-lateral')
    ItemLateral4.classList.remove('moon-lateral')
    ItemLateral5.classList.remove('moon-lateral')
    ItemLateral6.classList.remove('moon-lateral')

    ItemLateral.classList.add('dead-lateral')
    ItemLateral2.classList.add('dead-lateral')
    ItemLateral3.classList.add('dead-lateral')
    ItemLateral4.classList.add('dead-lateral')
    ItemLateral5.classList.add('dead-lateral')
    ItemLateral6.classList.add('dead-lateral')

    //Rodape
    Rodape.classList.remove('moon')
    Rodape.classList.add('dead')
}

function FundoMoon(){
    //Variaveis
    x = 1

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Moonlighter.jpg)'

    //Remover classes
    Nav.classList.remove('dead')

    //Lista Lateral + Navegação
    Nav.classList.add('moon')

    ItemLateral.classList.remove('dead-lateral')  
    ItemLateral2.classList.remove('dead-lateral')
    ItemLateral3.classList.remove('dead-lateral')
    ItemLateral4.classList.remove('dead-lateral')
    ItemLateral5.classList.remove('dead-lateral')
    ItemLateral6.classList.remove('dead-lateral')

    ItemLateral.classList.add('moon-lateral')
    ItemLateral2.classList.add('moon-lateral')
    ItemLateral3.classList.add('moon-lateral')
    ItemLateral4.classList.add('moon-lateral')
    ItemLateral5.classList.add('moon-lateral')
    ItemLateral6.classList.add('moon-lateral')

    //Rodape
    Rodape.classList.remove('dead')
    Rodape.classList.add('moon')
}
