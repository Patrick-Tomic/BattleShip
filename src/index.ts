import  './style.scss'
import User from './user'

 


    const player = new User('Player')
    const computer = new User('Computer')
    
 
 player.createBoat(8,9,5,'horizontal')
 player.createBoat(0,4,2,'vertical')
 player.createBoat(2,6,3,'horizontal')
 player.createBoat(0,0,4,'vertical')
 player.createBoat(6,4,3,'horizontal')
for(let i = 0; i < player.board().length; i++) {
    for( let j = 0; j < 10; j++) {
        const div = document.createElement('div')
      div.classList.add('playerCell')
        if ( player.boardCell(i, j) != '') {
            div.style.backgroundColor = 'teal'           
        } else {
            div.innerHTML = ''

        }
         document.querySelector('.player')?.appendChild(div)
    }
}
computer.randomCreateBoats()
for(let i = 0; i < computer.board().length; i++) {
    for( let j = 0; j < 10; j++) {
        const div = document.createElement('div')
        div.classList.add('compCell')
        div.id = `${i},${j}`
         if(computer.boardCell(i,j) != '') {
            div.style.backgroundColor = 'teal'  
            div.classList.add('boat')
         
     }      
         document.querySelector('.computer')?.appendChild(div)
    
     
}
}
console.log(computer.ships()[0].positions)
let count = 0
    const compCells = document.querySelectorAll('.compCell')
    compCells.forEach((cell) => {
        cell.addEventListener('click', () => {
            let id = cell.id
            let x = id.slice(0,1)
            let  y= id.slice(2,3)      
            computer.recieveAttack(parseInt(x), parseInt(y))               
        })
    })

