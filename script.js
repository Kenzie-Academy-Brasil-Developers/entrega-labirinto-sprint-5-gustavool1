window.onload = criarLabirinto()
let main = document.getElementsByTagName('main')[0]

function criarLabirinto(){
    let main = document.getElementsByTagName('main')[0]
   for(let i=0; i<map.length;i++){
       
        for(let h=0; h<map[i].length;h++){
            
            if(map[i][h] === 'W'){
                let parede = document.createElement('div')
                parede.classList.add('parede')
                
                main.appendChild(parede)
            }if(map[i][h] === ' '){
                let buraco = document.createElement('div')
                buraco.classList.add('buraco')
                main.appendChild(buraco)
            }if(map[i][h] === 'S'){
                let comeco = document.createElement('div')
                comeco.classList.add('comeco')
                main.appendChild(comeco)
            }if(map[i][h] === 'F'){
                let fim = document.createElement('div')
                fim.classList.add('fim')
                main.appendChild(fim)
            }
        }
    }
    criandoPlayer()
}

function criandoPlayer(){
    let comeco = document.getElementsByClassName("comeco")[0]
    console.log(comeco)
    let player = document.createElement('div')
    player.classList.add("player")
    comeco.appendChild(player)
        
}

