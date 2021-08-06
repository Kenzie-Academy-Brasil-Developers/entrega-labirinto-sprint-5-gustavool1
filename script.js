window.onload = criarLabirinto()
let main = document.getElementsByTagName('main')[0]

function criarLabirinto(){
    let main = document.getElementsByTagName('main')[0]
   for(let i=0; i<map.length;i++){
       let linhaContainer = document.createElement('section')
       linhaContainer.classList.add("linha")
        for(let h=0; h<map[i].length;h++){
            
            if(map[i][h] === 'W'){
                let parede = document.createElement('div')
                parede.id=h+1
                parede.classList.add('parede')
                linhaContainer.appendChild(parede)
            }if(map[i][h] === ' '){
                let buraco = document.createElement('div')
                buraco.id=h+1
                buraco.classList.add('buraco')
                linhaContainer.appendChild(buraco)
            }if(map[i][h] === 'S'){
                let comeco = document.createElement('div')
                comeco.id = h+1
                comeco.classList.add('comeco')
                linhaContainer.appendChild(comeco)
            }if(map[i][h] === 'F'){
                let fim = document.createElement('div')
                fim.id=h+1
                fim.classList.add('fim')
                linhaContainer.appendChild(fim)
            }
        }
        main.appendChild(linhaContainer)
    }
    criandoPlayer()
    document.addEventListener("keydown", movimentacaoJogador)
}

function criandoPlayer(){
    let comeco = document.getElementsByClassName("comeco")[0]
    let player = document.createElement('div')
    player.classList.add("player")
    comeco.appendChild(player)
    
}

function movimentacaoJogador(event){
    let player = document.getElementsByClassName('player')[0]
    let playerContainer = player.parentElement
    
    let movimento = event.key
    if(movimento === 'ArrowLeft' ||movimento === 'A'||movimento === 'a'){
        if(playerContainer.previousSibling.classList.contains('buraco')){
            let buracoAnterior =playerContainer.previousSibling
            buracoAnterior.appendChild(player)    
        }
    }if(movimento === 'ArrowRight' ||movimento === 'D'||movimento === 'd'){
        if(playerContainer.nextElementSibling.classList.contains('buraco') || playerContainer.nextElementSibling.classList.contains('fim') ){
            let proxBuraco =playerContainer.nextElementSibling
            proxBuraco.appendChild(player)
        }
    }if(movimento === 'ArrowUp' ||movimento === 'W'||movimento === 'w'){    
        console.log(playerContainer.id)
        let paiDoContainer = playerContainer.parentElement
        let linhaAnterior= paiDoContainer.previousElementSibling
        let celulaAcima = linhaAnterior.children[playerContainer.id-1]
        if(celulaAcima.classList.contains('buraco')){
            celulaAcima.appendChild(player)
        }
    }if(movimento === 'ArrowDown' ||movimento === 'S'||movimento === 's'){
        let paiDoContainer = playerContainer.parentElement
        let linhaAnterior = paiDoContainer.nextSibling
        let celulaAbaixo = linhaAnterior.children[playerContainer.id-1]
        if(celulaAbaixo.classList.contains('buraco')){
            celulaAbaixo.appendChild(player)
        }
    }
   
}
