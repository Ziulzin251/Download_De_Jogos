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
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'
            break
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('moon', 'enter', 'dark', 'mana', 'noita')
            Nav.classList.add('dead')

            //Listas Laterais
            ItemLateral.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')

            ItemLateral.classList.add('dead-lateral')
            ItemLateral2.classList.add('dead-lateral')
            ItemLateral3.classList.add('dead-lateral')
            ItemLateral4.classList.add('dead-lateral')
            ItemLateral5.classList.add('dead-lateral')
            ItemLateral6.classList.add('dead-lateral')

            //Rodape
            Rodape.classList.remove('moon', 'enter', 'dark', 'mana', 'noita')
            Rodape.classList.add('dead')
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
        case 2:
            //Barra de Navegação
            Nav.classList.toggle('enter')

            //Listas Laterais
            ItemLateral.classList.toggle('enter-lateral')
            ItemLateral2.classList.toggle('enter-lateral')
            ItemLateral3.classList.toggle('enter-lateral')
            ItemLateral4.classList.toggle('enter-lateral')
            ItemLateral5.classList.toggle('enter-lateral')
            ItemLateral6.classList.toggle('enter-lateral')

            //Rodape
            Rodape.classList.toggle('enter')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.toggle('dark')

            //Listas Laterais
            ItemLateral.classList.toggle('dark-lateral')
            ItemLateral2.classList.toggle('dark-lateral')
            ItemLateral3.classList.toggle('dark-lateral')
            ItemLateral4.classList.toggle('dark-lateral')
            ItemLateral5.classList.toggle('dark-lateral')
            ItemLateral6.classList.toggle('dark-lateral')

            //Rodape
            Rodape.classList.toggle('dark')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.toggle('mana')

            //Listas Laterais
            ItemLateral.classList.toggle('mana-lateral')
            ItemLateral2.classList.toggle('mana-lateral')
            ItemLateral3.classList.toggle('mana-lateral')
            ItemLateral4.classList.toggle('mana-lateral')
            ItemLateral5.classList.toggle('mana-lateral')
            ItemLateral6.classList.toggle('mana-lateral')

            //Rodape
            Rodape.classList.toggle('mana')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.toggle('noita')

            //Listas Laterais
            ItemLateral.classList.toggle('noita-lateral')
            ItemLateral2.classList.toggle('noita-lateral')
            ItemLateral3.classList.toggle('noita-lateral')
            ItemLateral4.classList.toggle('noita-lateral')
            ItemLateral5.classList.toggle('noita-lateral')
            ItemLateral6.classList.toggle('noita-lateral')

            //Rodape
            Rodape.classList.toggle('noita')
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
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'
            break
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('moon', 'enter', 'dark', 'mana', 'noita')
            Nav.classList.add('dead')

            //Listas Laterais
            ItemLateral.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')

            ItemLateral.classList.add('dead-lateral')
            ItemLateral2.classList.add('dead-lateral')
            ItemLateral3.classList.add('dead-lateral')
            ItemLateral4.classList.add('dead-lateral')
            ItemLateral5.classList.add('dead-lateral')
            ItemLateral6.classList.add('dead-lateral')

            //Rodape
            Rodape.classList.remove('moon', 'enter', 'dark', 'mana', 'noita')
            Rodape.classList.add('dead')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('dead', 'enter', 'dark', 'mana', 'noita')
            Nav.classList.add('moon')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('dead-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')

            ItemLateral.classList.add('moon-lateral')
            ItemLateral2.classList.add('moon-lateral')
            ItemLateral3.classList.add('moon-lateral')
            ItemLateral4.classList.add('moon-lateral')
            ItemLateral5.classList.add('moon-lateral')
            ItemLateral6.classList.add('moon-lateral')

            //Rodape
            Rodape.classList.remove('dead', 'enter', 'dark', 'mana', 'noita')
            Rodape.classList.add('moon')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.remove('dead', 'moon', 'dark', 'mana', 'noita')
            Nav.classList.add('enter')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('dead-lateral', 'moon-lateral', 'dark-lateral', 'mana-lateral', 'noita-lateral')

            ItemLateral.classList.add('enter-lateral')
            ItemLateral2.classList.add('enter-lateral')
            ItemLateral3.classList.add('enter-lateral')
            ItemLateral4.classList.add('enter-lateral')
            ItemLateral5.classList.add('enter-lateral')
            ItemLateral6.classList.add('enter-lateral')

            //Rodape
            Rodape.classList.remove('dead', 'moon', 'dark', 'mana', 'noita')
            Rodape.classList.add('enter')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.remove('dead', 'moon', 'enter', 'mana', 'noita')
            Nav.classList.add('dark')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'mana-lateral', 'noita-lateral')

            ItemLateral.classList.add('dark-lateral')
            ItemLateral2.classList.add('dark-lateral')
            ItemLateral3.classList.add('dark-lateral')
            ItemLateral4.classList.add('dark-lateral')
            ItemLateral5.classList.add('dark-lateral')
            ItemLateral6.classList.add('dark-lateral')

            //Rodape
            Rodape.classList.remove('dead', 'moon', 'enter', 'mana', 'noita')
            Rodape.classList.add('dark')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.remove('dead', 'moon', 'enter', 'dark', 'noita')
            Nav.classList.add('mana')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')
            ItemLateral2.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')
            ItemLateral3.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')
            ItemLateral4.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')
            ItemLateral5.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')
            ItemLateral6.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'noita-lateral')

            ItemLateral.classList.add('mana-lateral')
            ItemLateral2.classList.add('mana-lateral')
            ItemLateral3.classList.add('mana-lateral')
            ItemLateral4.classList.add('mana-lateral')
            ItemLateral5.classList.add('mana-lateral')
            ItemLateral6.classList.add('mana-lateral')

            //Rodape
            Rodape.classList.remove('dead', 'moon', 'enter', 'dark', 'noita')
            Rodape.classList.add('mana')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.remove('dead', 'moon', 'enter', 'dark', 'mana')
            Nav.classList.add('noita')

            //Listas Laterais
            ItemLateral.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')
            ItemLateral2.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')
            ItemLateral3.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')
            ItemLateral4.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')
            ItemLateral5.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')
            ItemLateral6.classList.remove('dead-lateral', 'moon-lateral', 'enter-lateral', 'dark-lateral', 'mana-lateral')

            ItemLateral.classList.add('noita-lateral')
            ItemLateral2.classList.add('noita-lateral')
            ItemLateral3.classList.add('noita-lateral')
            ItemLateral4.classList.add('noita-lateral')
            ItemLateral5.classList.add('noita-lateral')
            ItemLateral6.classList.add('noita-lateral')

            //Rodape
            Rodape.classList.remove('dead', 'moon', 'enter', 'dark', 'mana')
            Rodape.classList.add('noita')
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

function FundoEnter(){
    //Variaveis
    x = 2

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Enter.jpg)'    
}

function FundoDark(){
    //Variaveis
    x = 3

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Darkest.jpg)'    
}

function FundoMana(){
    //Variaveis
    x = 4

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Mana.jpg)'    
}

function FundoNoita(){
    //Variaveis
    x = 5

    //Fundo
    document.body.style.backgroundImage = 'url(../imagens/Background_Roguelike/Noita.jpg)'    
}
