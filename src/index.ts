import  './style.scss'
import User from './user'


const player = new User('Player')
const computer = new User('Computer')
    
   
 player.createBoat(56,5,'horizontal')
 player.createBoat(71,4,'vertical')
 player.createBoat(33,2,'horizontal')
 player.createBoat(99,3,'vertical')
 player.createBoat(74,3,'horizontal')

for(let i = 0; i < player.board().length; i++) {  
    const div = document.createElement('div')
    div.classList.add('playerCell')
    div.id = `${i}`
    if ( player.boardCell(i) != '') {
        div.style.backgroundColor = '#36454F'               
    } else {
        div.innerHTML = ''
    }
    document.querySelector('.player')?.appendChild(div)
}

computer.randomCreateBoats()
for(let i = 0; i < computer.board().length; i++) {
        const div = document.createElement('div')
        div.classList.add('compCell')
        div.id = `${i}`
         if(computer.boardCell(i) != '') { 
            div.classList.add('boat')      
             
     }      
    document.querySelector('.computer')?.appendChild(div)    
}

 
          
 
 
const menuBar = document.querySelector('.menuBar')
const start:any = document.querySelector('.startBtn')
start.addEventListener('click', () => {
    menuBar?.removeChild(start)
    const compCells = document.querySelectorAll('.compCell')
    const title = document.createElement('h2')
    title.classList.add('title')
    menuBar?.appendChild(title)
let position:any 
compCells.forEach((cell) =>{        
    cell.addEventListener('click',() => {
        if(player.flag === false) {
            console.log(computer.name +' wins')
           
            return 
        } 
         if(computer.flag === false) {
            console.log(player.name +' wins')
         
           return
        }
        position = parseInt(cell.id)
        computer.recieveAttack(position, cell, computer, player)
    })
})
})

    