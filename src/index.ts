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


function Game(player: User, computer: User, turn: 1 | 2) {
    if(player.shipsSunk() === true) {
        console.log(computer.name+' wins')
        return
    } else if(computer.shipsSunk() === true) {
        console.log(player.name +' wins')
        return
    }
    const playerPosition = player.randomAttack()
    if(turn ===1){
        const compCells = document.querySelectorAll('.compCell')
        let redo = false
        for(let i = 0; i < compCells.length; i++) {
     
        const cell = compCells[i]
            const position = parseInt(cell.id)
            let count = 0
        let bool = false
        cell.addEventListener('click', () => {
            console.log(position)
            console.log('wahoo')
            console.log(computer.board())
               if(computer.board()[position] === 'M' ||computer.board()[position] === 'H'){
                  alert('position already hit<br> try again')
                  redo = true
                  return
                  
                   
              }
               
                  while(computer.ships().length != count) {
                      const ship: Ship = computer.ships()[count]
                      const length: number = ship.positions.length
                      for(let i = 0; i < length; i++) {
                          if(position === ship.positions[i]) {
                               
                              cell.setAttribute('style', 'background-color:red;')
                              ship.hit()
                              ship.isSunk()
                              computer.board()[position] = 'H'
                              bool = true
                          }
                      }
                      if(bool === true) {
                          return
                      }
                      count++
                  }
                  if(bool === false){
                       computer.board()[position] = 'M'
                       cell.setAttribute('style', 'background-color:blue')    
                       return           
                      } 
          
                    })
        
    }
    if(redo) {
        console.log('redone')
        Game(player,computer,1)
    }
   else{
   return
   }
    }
 /* else if(turn === 2) {
    const playerCells = document.querySelectorAll('.playerCell')
   
   
    console.log(playerPosition)
     playerCells.forEach((cell) => {
       if(playerPosition === parseInt(cell.id)) {
        console.log(true)
        Game(player,computer,1)
        return
       }
       else{
        console.log(playerPosition)
       }
      
        console.log(position)
        if(parseInt(cell.id )=== position){
             let count = 0
            if(player.board()[position] === 'M' || 'H') {
                Game(player,computer,turn)
                return
            }
            while(player.ships().length != count) {
                const ship = player.ships()[count]
                const length = ship.positions.length
                for(let i = 0; i < length; i++){
                    if(position === ship.positions[i]) {
                        player.board()[position] = 'H'
                        cell.setAttribute('style', 'background-color:red;')
                        ship.hit()
                        ship.isSunk()
                        Game(player,computer,1)
                        return
                      
                        
                    }
                    
                }
                count++ 
            
            }
             
        } else {
            player.board()[position] = 'M'
            cell.setAttribute('style', 'background-color:blue')
            Game(player, computer, 1)
           
            return
        }
    
   
    }) 

}
   */  
}

Game(player, computer,1)
 
 
 
