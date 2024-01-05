import GameBoard from "./gameBoard";
import Ship from "./ship";
export default class User {
    gameBoard : GameBoard = new GameBoard
    name: string
    flag: boolean = true
    constructor(name: 'Player' | 'Computer'){
        this.name = name
    }
    
    randomCreateBoats(lengthVals: number[] = [2,3,3,4,5] ) {
        if(lengthVals.length < 1) {
          
            return
        }
        const values = lengthVals
        const position = Math.floor(Math.random()*99+1)
         const choice = Math.floor((Math.random()*2)+1)
         let bool: false | true = false
         if (choice === 1) {
             bool = this.createBoat(position,values[0],'horizontal')}
        else if(choice === 2) {
             bool = this.createBoat(position,values[0],'vertical')
        }
        if(bool === false) {
            this.randomCreateBoats(values)
        } else if(bool === true){
         
            values.shift()
            this.randomCreateBoats(values)
        }   
    }
    recieveAttack(position:number, cell:any, computer:User, player:User) {
        
        const title:any = document.querySelector('.title')
        if(computer.board()[position] === 'M' ||computer.board()[position] === 'H'){
            return
          }else{
              if(this.flag === false){
                  return
              }
              let count = 0
              let bool = false
                 while(computer.ships().length != count) {
                    const ship: Ship = computer.ships()[count]
                    const length: number = ship.positions.length
                        for(let i = 0; i < length; i++) {
                             if(position === ship.positions[i]) {                            
                              cell.setAttribute('style', 'background-color:#800020;')
                                  ship.hit()
                                  ship.isSunk(player)
                                  computer.board()[position] = 'H'
                                  bool = true
                                }
                            }
                            if(bool === true) {
                              
                                computer.randomAttack(player,computer)
                                 return 
                            }
                            count++
                        }
                        if(bool === false){
                            
                             computer.board()[position] = 'M'
                             cell.setAttribute('style', 'background-color:#B69460;')     
                            } 
                            
                            computer.randomAttack(player,computer)
        }
      
         
    }
    randomAttack(player:User, computer:User):any{
        const title:any = document.querySelector('.title')
        if(player.shipsSunk() === false) {

            title.innerHTML = computer.name +' wins'
           
            return 
        } 
         if( computer.shipsSunk() === false) {
            title.innerHTML = player.name +' wins'
         
           return
        }
      const position = Math.floor((Math.random() * 99) + 1)
        const playerCells = document.querySelectorAll('.playerCell')
       
        const cell = playerCells[position]
       let count = 0
       if(player.board()[position] === 'M' || player.board()[position] === 'H') {
        return this.randomAttack(player, computer)
       } else {
        while(player.ships().length != count) {
            const ship = player.ships()[count]
            const length = ship.positions.length
            for(let i = 0; i < length; i++){
                if(ship.positions[i] === position) {
                    cell.setAttribute('style', 'background-color:#800020;')
                    ship.hit()
                    ship.isSunk(computer)
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
            cell.setAttribute('style', 'background-color:#B69460;')
        }
      
    }
    
   
    if(player.shipsSunk() === false) {
        console.log(computer.name +' wins')
       
        return 
    } 
     if( computer.shipsSunk() === false) {
        console.log(player.name +' wins')
     
       return
    }
        
    }
    createBoat(position:number, length: number, direction: 'vertical' | 'horizontal' ): any {
    return this.gameBoard.createBoat(position, length, direction)
    }
    boardCell(position:number):any {
        return this.gameBoard.board[position]
    }
    board() {
        return this.gameBoard.board
    }
    ships() {
        return this.gameBoard.ships
    }
     
        shipsSunk() {
        
            const boats = this.ships()
            while( boats.length) {
                if (this.ships()[0].Sunk == false) {
                       
                    return 
                }
                boats.shift()
            }
            console.log('Game Over')
            this.flag = false
            return this.flag
        }
    }
    

const computer = new User('Computer')
 