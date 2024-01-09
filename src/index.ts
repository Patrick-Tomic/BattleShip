import  './style.scss'
import User from './user'
const main = document.querySelector('main')
const body = document.querySelector('body')
const instructions = document.querySelector('.instruction')
const player = new User('Player')
const computer = new User('Computer')
    const close = document.querySelector('.close')
    close?.addEventListener('click', () => {
        body?.setAttribute('style','background-color:white')
        main?.setAttribute('style', 'opacity:1')
        instructions?.setAttribute('style', 'display:none')
    })
  console.log(computer.board())
/*  player.createBoat(56,5,'horizontal')
 player.createBoat(71,4,'vertical')
 player.createBoat(33,2,'horizontal')
 player.createBoat(99,3,'vertical')
 player.createBoat(74,3,'horizontal') 
 */
for(let i = 0; i < player.board().length; i++) {  
    const div = document.createElement('div')
    div.classList.add('playerCell')
    div.id = `${i}`
    if ( player.boardCell(i) != '') {
         div.setAttribute('style','background-color:maroon')
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
let playerCount = 1
 
const axis:any = document.querySelector('.axis')

let direction = axis.id
axis.addEventListener('click',() =>{
    if(axis.id === 'horizontal'){
        axis.id = 'vertical'
        axis.innerHTML = 'Y-Axis'
        direction = axis.id
        
        return
    } else if(axis.id === 'vertical'){
        axis.id = 'horizontal'
        axis.innerHTML = 'X-Axis'
        direction = axis.id
      
        return
    }
})
const menuBar:any = document.querySelector('.menuBar')
 
const start:any = document.querySelector('.startBtn')
const playerCells = document.querySelectorAll('.playerCell')
let array:any = [5,4,3,3,2]
playerCells.forEach(cell => {
   
    let Xpositions:any = [] //horizontal
    let Ypositions:any = [] //vertical
    let position = parseInt(cell.id)
    let Xcells:any = []
    let Ycells: any = []
    cell.addEventListener('mouseover',()=>{
        if(!array.length){
             
             axis.setAttribute('style','display:none')
            start.setAttribute('style', 'display:block')
            return
        }
         
        if(cell.className === 'playerCell boat'){
          
            cell.setAttribute('style','background-color:maroon; cursor:not-allowed')
            return
}
        if(direction === 'vertical'){
            if(Ypositions.length === 0 || Ypositions.length > array[0]){
                 
                Ypositions = []
                placeBoats(cell, Ypositions, position, array[0])  
                Ycells = []
                 
            }  
            for(let i = 0; i < Ypositions.length; i++){
                const cells:any = document.getElementById(Ypositions[i])
                if(cells.className === 'playerCell boat'){
                     
                const Cell:any = document.getElementById(Ypositions[0])
                Cell.setAttribute('style','background-color:maroon; cursor:not-allowed')
                return
                }
            }
            Ypositions.forEach((position: string) =>{
                const cell:any = document.getElementById(position)
                Ycells.push(cell)
                cell.setAttribute('style', 'background-color:#36454F')
            })
           
         
        }
        else if(direction === 'horizontal'){
          if(Xpositions.length === 0 || Xpositions.length > array[0]){
            Xpositions = []
            placeBoats(cell, Xpositions, position, array[0]) 
           Xcells = []
        }  
        for(let i = 0; i < Xpositions.length; i++){
            const cell:any = document.getElementById(Xpositions[i])
            if(cell.className === 'playerCell boat'){
                
            const Cell:any = document.getElementById(Xpositions[0])
            Cell.setAttribute('style','background-color:maroon; cursor:not-allowed')
            return
            }
        } 
        Xpositions.forEach((position: string) =>{
            const cell:any = document.getElementById(position)
            Xcells.push(cell)
            cell.setAttribute('style', 'background-color:#36454F')
        })    
    
     }
    
    })
    
    cell.addEventListener('mouseleave',() =>{
        if(!array.length){
            return
        }
        if(cell.className === 'playerCell boat'){
            cell.setAttribute('style', 'background-color:#36454F')
            return
        }
        if(direction === 'vertical'){
            Ypositions.forEach((position: string) =>{
                const cell:any = document.getElementById(position)
                if(cell.className === 'playerCell boat'){
                    cell.setAttribute('style' ,'background-color:#36454F')
                    } else{
                cell.setAttribute('style', 'background-color:#6082B6')
                }
            })
        }
        else if(direction === 'horizontal'){
            Xpositions.forEach((position: string) =>{
                const cell:any = document.getElementById(position)
                if(cell.className === 'playerCell boat'){
                    cell.setAttribute('style' ,'background-color:#36454F')
                    } else{
                cell.setAttribute('style', 'background-color:#6082B6')
                }
            })
        }
    })
    cell.addEventListener('click',() =>{
        if(!array.length){
            return
        }
      if(cell.className === 'playerCell boat'){
        alert('Cell taken')
        return
      }
       if(direction === 'vertical'){   
            for(let i = 0; i < Ycells.length; i++){
                if(Ycells[i].className === 'playerCell boat'){
                    alert('position taken')
                    return
                }
            }       
                Ycells.forEach((cell:any) =>{
                    cell.classList.add('boat')
                    cell.setAttribute('style', 'background-color:#36454F')
                })
                if(  player.createBoat(Ypositions[0], array[0], 'vertical') === false){
                    alert('Tile unavailable')
                
                    return
                }  
                player.createBoat(Ypositions[0], array[0], 'vertical')
                array.shift()         
                return
            }else if(direction === 'horizontal'){
                
                for(let i = 0; i < Xcells.length; i++){
                    
                    if(Xcells[i].className === 'playerCell boat'){
                        alert('position taken')
                        return
                    }
                }   
                Xcells.forEach((cell:any) =>{
                    cell.classList.add('boat')
                    cell.setAttribute('style', 'background-color:#36454F')
                })
                if(player.createBoat(Xpositions[0], array[0], 'horizontal') === false){
                    alert('Tile unavailable')
                     
                    return
                }  
                player.createBoat(Xpositions[0], array[0], 'horizontal')  
                      
                array.shift()      
                return
            
        }
    })
})
 
        
 
 const reset:any= document.getElementById('reset')
reset.addEventListener('click', () => {
    window.location.reload()
})

start.addEventListener('click', () => {
    const ships = player.ships()
    ships.forEach((ship) => console.log(typeof(ship.positions[0])))
    menuBar?.removeChild(start)
    const compCells = document.querySelectorAll('.compCell')
    const title = document.createElement('h2')
    title.classList.add('title')
    title.innerHTML = "Begin!"
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
        title.innerHTML = ''
       
        position = parseInt(cell.id)
        computer.recieveAttack(position, cell, computer, player)
        if(player.shipsSunk() === false) {

            title.innerHTML = computer.name +' wins'
            reset.setAttribute('style', 'display:block')
            return 
        } 
         if( computer.shipsSunk() === false) {
            title.innerHTML = player.name +' wins'
            reset.setAttribute('style', 'display:block')
           return
        }
    })
})
})

/* cell.setAttribute('style', 'background-color:#36454F') */
function placeBoats(cell:any, positions:any[], position:any, length:number){

    let count = 0
    let sub = 1
    let bool = false   
    if(direction === 'horizontal') {
        if(position %10 === 9){
           
            while(count != length){
                if(player.board()[position - count ] != ''){
                  return false
                }
                count++
            }
            count = 0
            while(count != length){
                positions.push(position-count)
                count++
            }
            return true
        }
        else if(position %10 === 0){
            while(count != length){
                if(player.board()[position+count] != ''){
                    return false
                }
                count++
            }
            count = 0
            while(count != length){
                positions.push(position+count)
                count++
            }
            return true
        }else{
            while(count != length){
                if(position+count %10 === 0){
                    
                    return false
                    bool = true
                }
                if(bool === false){
                    if(player.board()[position+count] != ''){
                        return false
                    }
                }
               /*  if(bool === true){
                    if(player.board()[position -sub] != ''){
                        return false
                    }
                    sub++
                } */
                count++
            }
            count = 0
            sub = 1
            bool = false
            while(count != length){
                if((position+count) % 10 === 0){
                    bool = true
                }
                if(bool === false){
                    positions.push(position+count)
                } else if(bool === true){
                    positions.push(position-sub)
                    sub++
                }
                count++
            }
            return true
        }
    } else if(direction === 'vertical'){
         
        count = 0
        let width = 0
        sub = 1
        bool = false
        if(position >= 90 && position <= 99){
            while(count != length){
                if(player.board()[position-width] != ''){
                    return false
                }
                width+=10
                count++
            }
            width = 0
            count = 0
            while(count!= length){
                positions.push(position-width)
                width+=10
                count++
            }
            return true
        }
        else if(position <= 9){
            width = 0
            count = 0
            while(count != length){
                if(player.board()[position+width] != ''){
                    return false
                }
                width+=10
                count++
            }
            width = 0
            count = 0
            while(count != length){
                positions.push(position+width)
                width+=10
                count++
            }
            return true
        } else if(position >= 10 && position <= 89){
          while(count != length){
            if(position+width>= 100){
                bool = true
            }
            if(bool === false && player.board()[position+width] != ''){
                return false
            } else if(bool === true){
                if(player.board()[position-sub] != ''){
                return false
            }
        sub+=10
        }
        width+=10
        count++
        }
        count = 0
        sub = 10
        width = 0
        bool = false
        while(count != length){
            if(position+width >=100){
                bool = true
            }
            if(bool === false){
                positions.push(position+width)
            } else if(bool === true){
                positions.push(position-sub)
                sub+=10
            }
            width+=10
            count++
        }
        return true
        }
    }
}