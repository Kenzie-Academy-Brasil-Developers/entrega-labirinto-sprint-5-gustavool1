window.onload = criarLabirinto()

console.log(map)
function criarLabirinto(){
    let main = document.getElementsByTagName('main')[0]
    for(let i=0; i<map.length;i++){
        console.log(map[i].length)
        for(let h=0; h<map[i].length;h++){
            
            if(map[i][h] === 'W'){
                let parede = document.createElement('div')
                parede.classList.add('parede')
                
                main.appendChild(parede)
            }if(map[i][h] === ' ' ||map[i][h] === 'S'||map[i][h] === 'F'){
                let buraco = document.createElement('div')
                buraco.classList.add('buraco')
               
                main.appendChild(buraco)
            }
        }
    }
}

