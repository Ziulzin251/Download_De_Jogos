//Fundo Inicial
document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
document.body.style.backgroundColor = 'black'

//Barra Lateral Inicial
document.getElementById('item-lateral').classList.add('forager-lateral')
document.getElementById('item-lateral2').classList.add('forager-lateral')
document.getElementById('item-lateral3').classList.add('forager-lateral')
document.getElementById('item-lateral4').classList.add('forager-lateral')
document.getElementById('item-lateral5').classList.add('forager-lateral')
document.getElementById('item-lateral6').classList.add('forager-lateral')

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
            document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
            break
        case 1:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Reventure.jpg)'
            break
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'
            break
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Stardew.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Grave.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = ''
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('happy', 'punch', 'stardew', 'reven', 'grave')
            Nav.classList.add('forager')

            //Listas Laterais
            ItemLateral.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')

            ItemLateral2.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')

            ItemLateral3.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')

            ItemLateral4.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')

            ItemLateral5.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')

            ItemLateral6.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'grave-lateral')


            ItemLateral.classList.add('forager-lateral')
            ItemLateral2.classList.add('forager-lateral')
            ItemLateral3.classList.add('forager-lateral')
            ItemLateral4.classList.add('forager-lateral')
            ItemLateral5.classList.add('forager-lateral')
            ItemLateral6.classList.add('forager-lateral')

            //Rodape
            Rodape.classList.remove('happy', 'punch', 'stardew', 'reven', 'grave')
            Rodape.classList.toggle('forager')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.toggle('reven') 
            
            //Listas Laterais
            ItemLateral.classList.toggle('reven-lateral')
            ItemLateral2.classList.toggle('reven-lateral')
            ItemLateral3.classList.toggle('reven-lateral')
            ItemLateral4.classList.toggle('reven-lateral')
            ItemLateral5.classList.toggle('reven-lateral')
            ItemLateral6.classList.toggle('reven-lateral')

            //Rodape
            Rodape.classList.toggle('reven')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.toggle('punch')
            
            //Listas Laterais
            ItemLateral.classList.toggle('punch-lateral')
            ItemLateral2.classList.toggle('punch-lateral')
            ItemLateral3.classList.toggle('punch-lateral')
            ItemLateral4.classList.toggle('punch-lateral')
            ItemLateral5.classList.toggle('punch-lateral')
            ItemLateral6.classList.toggle('punch-lateral')

            //Rodape
            Rodape.classList.toggle('punch')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.toggle('stardew') 
            
            //Listas Laterais
            ItemLateral.classList.toggle('stardew-lateral')
            ItemLateral2.classList.toggle('stardew-lateral')
            ItemLateral3.classList.toggle('stardew-lateral')
            ItemLateral4.classList.toggle('stardew-lateral')
            ItemLateral5.classList.toggle('stardew-lateral')
            ItemLateral6.classList.toggle('stardew-lateral')

            //Rodape
            Rodape.classList.toggle('stardew')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.toggle('grave') 

            //Listas Laterais
            ItemLateral.classList.toggle('grave-lateral')
            ItemLateral2.classList.toggle('grave-lateral')
            ItemLateral3.classList.toggle('grave-lateral')
            ItemLateral4.classList.toggle('grave-lateral')
            ItemLateral5.classList.toggle('grave-lateral')
            ItemLateral6.classList.toggle('grave-lateral')

            //Rodape
            Rodape.classList.toggle('grave')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.toggle('happy') 

            //Listas Laterais
            ItemLateral.classList.toggle('happy-lateral')
            ItemLateral2.classList.toggle('happy-lateral')
            ItemLateral3.classList.toggle('happy-lateral')
            ItemLateral4.classList.toggle('happy-lateral')
            ItemLateral5.classList.toggle('happy-lateral')
            ItemLateral6.classList.toggle('happy-lateral')

            //Rodape
            Rodape.classList.toggle('happy')
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
            document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'
            break
        case 1:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Jogos/Reventure.jpg)'
            break
        case 2:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'
            break
        case 3:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Stardew.jpg)'
            break
        case 4:
            //Fundo
            document.body.style.backgroundImage = 'url(imagens/Background/Grave.jpg)'
            break
        case 5:
            //Fundo
            document.body.style.backgroundImage = ''
            break
    }

    switch(x){
        case 0:
            //Barra de Navegação
            Nav.classList.remove('reven')
            Nav.classList.add('forager')

            //Lista Lateral
            ItemLateral.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral2.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral3.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral4.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral5.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral6.classList.remove('happy-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')


            ItemLateral.classList.add('forager-lateral')
            ItemLateral2.classList.add('forager-lateral')
            ItemLateral3.classList.add('forager-lateral')
            ItemLateral4.classList.add('forager-lateral')
            ItemLateral5.classList.add('forager-lateral')
            ItemLateral6.classList.add('forager-lateral')
            
            //Rodape
            Rodape.classList.remove('reven')
            Rodape.classList.add('forager')
            break
        case 1:
            //Barra de Navegação
            Nav.classList.remove('punch')
            Nav.classList.add('reven')
            
            //Lista Lateral
            ItemLateral.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')
            
            ItemLateral2.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')
            
            ItemLateral3.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')
            
            ItemLateral4.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')
            
            ItemLateral5.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')
            
            ItemLateral6.classList.remove('happy-lateral', 'forager-lateral', 'punch-lateral', 'stardew-lateral')

            ItemLateral.classList.add('reven-lateral')
            ItemLateral2.classList.add('reven-lateral')
            ItemLateral3.classList.add('reven-lateral')
            ItemLateral4.classList.add('reven-lateral')
            ItemLateral5.classList.add('reven-lateral')
            ItemLateral6.classList.add('reven-lateral')
            
            //Rodape
            Rodape.classList.remove('punch')
            Rodape.classList.add('reven')
            break
        case 2:
            //Barra de Navegação
            Nav.classList.remove('stardew')
            Nav.classList.add('punch')
            
            //Lista Lateral
            ItemLateral.classList.remove('stardew-lateral')
            ItemLateral2.classList.remove('stardew-lateral')
            ItemLateral3.classList.remove('stardew-lateral')
            ItemLateral4.classList.remove('stardew-lateral')
            ItemLateral5.classList.remove('stardew-lateral')
            ItemLateral6.classList.remove('stardew-lateral')

            ItemLateral.classList.add('punch-lateral')
            ItemLateral2.classList.add('punch-lateral')
            ItemLateral3.classList.add('punch-lateral')
            ItemLateral4.classList.add('punch-lateral')
            ItemLateral5.classList.add('punch-lateral')
            ItemLateral6.classList.add('punch-lateral')
            
            //Rodape
            Rodape.classList.remove('stardew')
            Rodape.classList.add('punch')
            break
        case 3:
            //Barra de Navegação
            Nav.classList.remove('grave')
            Nav.classList.add('stardew')
            
            //Lista Lateral
            ItemLateral.classList.remove('grave-lateral')
            ItemLateral2.classList.remove('grave-lateral')
            ItemLateral3.classList.remove('grave-lateral')
            ItemLateral4.classList.remove('grave-lateral')
            ItemLateral5.classList.remove('grave-lateral')
            ItemLateral6.classList.remove('grave-lateral')

            ItemLateral.classList.add('stardew-lateral')
            ItemLateral2.classList.add('stardew-lateral')
            ItemLateral3.classList.add('stardew-lateral')
            ItemLateral4.classList.add('stardew-lateral')
            ItemLateral5.classList.add('stardew-lateral')
            ItemLateral6.classList.add('stardew-lateral')
            
            //Rodape
            Rodape.classList.remove('grave')
            Rodape.classList.add('stardew')
            break
        case 4:
            //Barra de Navegação
            Nav.classList.remove('happy')
            Nav.classList.add('grave')
            
            //Lista Lateral
            ItemLateral.classList.remove('happy-lateral')
            ItemLateral2.classList.remove('happy-lateral')
            ItemLateral3.classList.remove('happy-lateral')
            ItemLateral4.classList.remove('happy-lateral')
            ItemLateral5.classList.remove('happy-lateral')
            ItemLateral6.classList.remove('happy-lateral')

            ItemLateral.classList.add('grave-lateral')
            ItemLateral2.classList.add('grave-lateral')
            ItemLateral3.classList.add('grave-lateral')
            ItemLateral4.classList.add('grave-lateral')
            ItemLateral5.classList.add('grave-lateral')
            ItemLateral6.classList.add('grave-lateral')
            
            //Rodape
            Rodape.classList.remove('happy')
            Rodape.classList.add('grave')
            break
        case 5:
            //Barra de Navegação
            Nav.classList.remove('forager')
            Nav.classList.add('happy')
            
            //Lista Lateral
            ItemLateral.classList.remove('forager-lateral')
            ItemLateral2.classList.remove('forager-lateral')
            ItemLateral3.classList.remove('forager-lateral')
            ItemLateral4.classList.remove('forager-lateral')
            ItemLateral5.classList.remove('forager-lateral')
            ItemLateral6.classList.remove('forager-lateral')

            ItemLateral.classList.add('happy-lateral')
            ItemLateral2.classList.add('happy-lateral')
            ItemLateral3.classList.add('happy-lateral')
            ItemLateral4.classList.add('happy-lateral')
            ItemLateral5.classList.add('happy-lateral')
            ItemLateral6.classList.add('happy-lateral')
            
            //Rodape
            Rodape.classList.remove('forager')
            Rodape.classList.add('happy')
            break
    }
}

//Botões embaixo de Download + Laterais
function FundoForager(){
    //Variaveis
    x = 0

    //Fundo
    document.body.style.backgroundImage = 'url(imagens/Background/Forager.jpg)'

    //Remover classes
    Nav.classList.remove('happy', 'reven', 'punch', 'stardew', 'grave')

    ItemLateral.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
            
    ItemLateral2.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
    
    ItemLateral3.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
    
    ItemLateral4.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
    
    ItemLateral5.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
    
    ItemLateral6.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'punch-lateral', 'stardew-lateral')
    
    //Lista Lateral + Navegação
    Nav.classList.add('forager')

    ItemLateral.classList.add('forager-lateral')
    ItemLateral2.classList.add('forager-lateral')
    ItemLateral3.classList.add('forager-lateral')
    ItemLateral4.classList.add('forager-lateral')
    ItemLateral5.classList.add('forager-lateral')
    ItemLateral6.classList.add('forager-lateral')

    //Rodape
    Rodape.classList.remove('happy', 'reven', 'punch', 'stardew', 'grave')
    Rodape.classList.add('forager')
}

function FundoReven(){
    //Variaveis
    x = 1

    //Fundo
    document.body.style.backgroundImage = 'url(imagens/Background/Reventure.jpg)'

    //Remover classes
    Nav.classList.remove('happy', 'punch', 'stardew', 'grave', 'forager')

    ItemLateral.classList.remove('happy-lateral', 'forager-lateral', 'grave-lateral', 'punch-lateral', 'stardew-lateral')
            
    ItemLateral2.classList.remove('happy-lateral', 'forager-lateral', 'grave-lateral', 'punch-lateral', 'stardew-lateral')

    ItemLateral3.classList.remove('happy-lateral', 'forager-lateral', 'grave-lateral', 'punch-lateral', 'stardew-lateral')

    ItemLateral4.classList.remove('happy-lateral', 'forager-lateral', 'grave-lateral', 'punch-lateral', 'stardew-lateral')

    ItemLateral5.classList.remove('happy-lateral', 'forager-lateral', 'grave-lateral', 'punch-lateral', 'stardew-lateral')

    ItemLateral6.classList.remove('happy-lateral',  'forager-lateral','grave-lateral', 'punch-lateral', 'stardew-lateral')

    //Lista Lateral + Navegação
    Nav.classList.add('reven')

    ItemLateral.classList.add('reven-lateral')
    ItemLateral2.classList.add('reven-lateral')
    ItemLateral3.classList.add('reven-lateral')
    ItemLateral4.classList.add('reven-lateral')
    ItemLateral5.classList.add('reven-lateral')
    ItemLateral6.classList.add('reven-lateral')

    //Rodape
    Rodape.classList.remove('happy', 'forager', 'punch', 'stardew', 'grave')
    Rodape.classList.add('reven')
}

function FundoPunch(){
    //Variaveis
    x = 2

    //Fundo
    document.body.style.backgroundImage = 'url(imagens/Background/Punch.jpg)'

    //Remover classes
    Nav.classList.remove('happy', 'forager', 'stardew', 'grave', 'reven')

    ItemLateral.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'forager-lateral', 'stardew-lateral')
            
    ItemLateral2.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'forager-lateral', 'stardew-lateral')
    
    ItemLateral3.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'forager-lateral', 'stardew-lateral')
    
    ItemLateral4.classList.remove('happy-lateral', 'grave-lateral', 'forager-lateral', 'stardew-lateral')
    
    ItemLateral5.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'forager-lateral', 'stardew-lateral')
    
    ItemLateral6.classList.remove('happy-lateral', 'grave-lateral', 'reven-lateral', 'forager-lateral', 'stardew-lateral')
    
    //Lista Lateral + Navegação
    Nav.classList.add('punch')

    ItemLateral.classList.add('punch-lateral')
    ItemLateral2.classList.add('punch-lateral')
    ItemLateral3.classList.add('punch-lateral')
    ItemLateral4.classList.add('punch-lateral')
    ItemLateral5.classList.add('punch-lateral')
    ItemLateral6.classList.add('punch-lateral')

    //Rodape
    Rodape.classList.remove('happy', 'forager', 'stardew', 'grave', 'reven')
    Rodape.classList.add('punch')
}

function FundoStardew(){
    //Variaveis
    x = 3

    //Fundo
    document.body.style.backgroundImage = 'url(imagens/Background/Stardew.jpg)'

    //Remover classes
    Nav.classList.remove('happy', 'punch', 'forager', 'grave', 'reven')

    ItemLateral.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
            
    ItemLateral2.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
    
    ItemLateral3.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
    
    ItemLateral4.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
    
    ItemLateral5.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
    
    ItemLateral6.classList.remove('happy-lateral', 'reven-lateral', 'grave-lateral', 'punch-lateral', 'forager-lateral')
    
    //Lista Lateral + Navegação
    Nav.classList.add('stardew')
            
    ItemLateral.classList.add('stardew-lateral')
    ItemLateral2.classList.add('stardew-lateral')
    ItemLateral3.classList.add('stardew-lateral')
    ItemLateral4.classList.add('stardew-lateral')
    ItemLateral5.classList.add('stardew-lateral')
    ItemLateral6.classList.add('stardew-lateral')

    //Rodape
    Rodape.classList.remove('happy', 'punch', 'forager', 'grave', 'reven')
    Rodape.classList.add('stardew')
}

function FundoGrave(){
    //Variaveis
    x = 4

    //Fundo
    document.body.style.backgroundImage = 'url(imagens/Background/Grave.jpg)'

    //Remover classes
    Nav.classList.remove('happy', 'punch', 'forager', 'reven', 'stardew')

    ItemLateral.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
            
    ItemLateral2.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
    
    ItemLateral3.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
    
    ItemLateral4.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
    
    ItemLateral5.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
    
    ItemLateral6.classList.remove('happy-lateral', 'punch-lateral', 'stardew-lateral', 'reven-lateral', 'forager-lateral')
    
    //Lista Lateral + Navegação
    Nav.classList.add('grave')
            
    ItemLateral.classList.add('grave-lateral')
    ItemLateral2.classList.add('grave-lateral')
    ItemLateral3.classList.add('grave-lateral')
    ItemLateral4.classList.add('grave-lateral')
    ItemLateral5.classList.add('grave-lateral')
    ItemLateral6.classList.add('grave-lateral')

    //Rodape
    Rodape.classList.remove('happy', 'punch', 'forager', 'reven', 'stardew')
    Rodape.classList.add('grave')
}

function FundoHappy(){
    //Variaveis
    x = 5

    //Fundo
    document.body.style.backgroundImage = ''

    //Remover classes
    Nav.classList.remove('punch', 'stardew', 'forager', 'grave', 'reven')

    ItemLateral.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
            
    ItemLateral2.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
    
    ItemLateral3.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
    
    ItemLateral4.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
    
    ItemLateral5.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
    
    ItemLateral6.classList.remove('punch-lateral', 'grave-lateral', 'reven-lateral', 'stardew-lateral', 'forager-lateral')
    
    //Lista Lateral + Navegação
    Nav.classList.add('happy')

    ItemLateral.classList.add('happy-lateral')
    ItemLateral2.classList.add('happy-lateral')
    ItemLateral3.classList.add('happy-lateral')
    ItemLateral4.classList.add('happy-lateral')
    ItemLateral5.classList.add('happy-lateral')
    ItemLateral6.classList.add('happy-lateral')

    //Rodape
    Rodape.classList.remove('punch', 'stardew', 'forager', 'grave', 'reven')
    Rodape.classList.add('happy')
}