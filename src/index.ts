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
        if ( player.boardCell(i) != '') {
            div.style.backgroundColor = 'teal'           
        } else {
            div.innerHTML = ''

        }
         document.querySelector('.player')?.appendChild(div)
    }

computer.randomCreateBoats()
for(let i = 0; i < computer.board().length; i++) {
   
        const div = document.createElement('div')
        div.classList.add('compCell')
         if(computer.boardCell(i) != '') {
            div.style.backgroundColor = 'teal'  
            div.classList.add('boat')
         
     }      
         document.querySelector('.computer')?.appendChild(div)
    
     
}

let count = 0
while(count < 5) {
    console.log('player ' + player.ships()[count].positions)
    console.log('computer ' + computer.ships()[count].positions)
    count++
}
 
