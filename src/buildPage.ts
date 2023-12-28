import User from "./user";
 
export default function buildPage() {
    const player = new User('Player')
player.createBoat(0,1,2, 'vertical')
player.createBoat(5,3,5,'horizontal')
player.createBoat(2,5,3,'vertical')
player.createBoat(7,1,4,'horizontal')
player.createBoat(8,8,3,'vertical')
 
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
 