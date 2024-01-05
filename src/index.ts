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
let flag = true

      const compCells = document.querySelectorAll('.compCell')
      let position:any 
      compCells.forEach((cell) =>{
        function playerRound(){
            position = parseInt(cell.id)
            if(computer.board()[position] === 'M' ||computer.board()[position] === 'H'){
              return
            }else{
                if(flag === false){
                    return
                }
                let count = 0
                let bool = false
                   while(computer.ships().length != count) {
                      const ship: Ship = computer.ships()[count]
                      const length: number = ship.positions.length
                   
                            
          }
        
          return Game(player,computer,2 )
        }
        cell.addEventListener('click',playerRound)
    })
         
     
function Game(player: User, computer: User, turn: 1 | 2 ) {
     
    if(player.shipsSunk() === true) {
        console.log(computer.name +' wins')
       flag = false
        return 
    } 
     if(computer.shipsSunk() === true) {
        console.log(player.name +' wins')
     flag = false
       return
    }
    if(turn === 2) {
    const playerCells = document.querySelectorAll('.playerCell')
    const position = player.randomAttack()
    const cell = playerCells[position]
   let count = 0
   if(player.board()[position] === 'M' || player.board()[position] === 'H') {
    return Game(player,computer,2 )
   } else {
    while(player.ships().length != count) {
        const ship = player.ships()[count]
        const length = ship.positions.length
        for(let i = 0; i < length; i++){
            if(ship.positions[i] === position) {
                cell.setAttribute('style', 'background-color:red;')
                ship.hit()
                ship.isSunk()
                player.board()[position] = 'H'
            }
        }
        if(player.board()[position] === 'H') {
            return
        }
        count++
    }
    if(player.board()[position] != 'H'){
        player.board()[position] = 'M'
        cell.setAttribute('style', 'background-color:blue;')
    }
   
}
   
}

return 
}
    
