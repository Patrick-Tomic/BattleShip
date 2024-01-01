import Ship from './ship'
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
        div.id = `${i}`
         if(computer.boardCell(i) != '') { 
            div.classList.add('boat')
       
            
         
     }      
         document.querySelector('.computer')?.appendChild(div)
    
     
}
 
Game(player,computer)
function Game(user: User, computer: User, turn: 1 | 2 = 1) {
    if(user.shipsSunk() === true) {
        console.log(computer.name+' wins')
        return
    } else if(computer.shipsSunk() === true) {
        console.log(user.name +' wins')
        return
    }
   if(turn === 1) {
    const compCells = document.querySelectorAll('.compCells')
    compCells.forEach((cell) => {
        const position = parseInt(cell.id)
        let count = 0
      cell.addEventListener('click', () => {    
            if(computer.board()[position] === 'M' || 'H'){
                alert('position already hit<br> try again')
                Game(user,computer,turn)
            }
            let bool = false
                while(computer.ships().length != count) {
                    const ship: Ship = computer.ships()[count]
                    const length: number = ship.positions.length
                    for(let i = 0; i < length; i++) {
                        if(position === ship.positions[i]) {
                            cell.innerHTML = 'X'
                            ship.hit()
                            ship.isSunk()
                            computer.board()[position] = 'H'
                            bool = true
                        }
                    }
                    if(bool === true) {
                        break
                    }
                    count++
                }
                if(bool === false) computer.board()[position] = 'M'
            })
    }) 
   }
   
}
 
            
               
       

 
 
 
