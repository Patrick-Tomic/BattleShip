import User from "./user";
 
export default function buildPage() {
    const player = new User('Player')

 
 player.createBoat(2,9,3,'horizontal')
 
for(let i = 0; i < player.board().length; i++) {
    for( let j = 0; j < 9; j++) {
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
}
 