import User from "./user";
 
export default function buildPage() {
    const player = new User('Player')
    const computer = new User('Computer')
    computer.randomCreateBoats()
 
 player.createBoat(8,9,5,'horizontal')
 player.createBoat(0,4,2,'vertical')
 player.createBoat(2,6,3,'horizontal')
 player.createBoat(1,0,4,'vertical')
 player.createBoat(6,4,3,'horizontal')
for(let i = 0; i < player.board().length; i++) {
    for( let j = 0; j < 10; j++) {
        const div = document.createElement('div')
        div.classList.add('cell')
        if ( player.boardCell(i, j) != '') {
            div.style.backgroundColor = 'teal'
           
        } else {
            div.innerHTML = ''
        }
         document.querySelector('.player')?.appendChild(div)
    }
}
for(let i = 0; i < computer.board().length; i++) {
    for( let j = 0; j < 10; j++) {
        const div = document.createElement('div')
        div.classList.add('cell')
        if ( computer.boardCell(i, j) != '') {
            div.style.backgroundColor = 'teal'
           
        } else {
            div.innerHTML = ''
        }
         document.querySelector('.computer')?.appendChild(div)
    }
}
}
 