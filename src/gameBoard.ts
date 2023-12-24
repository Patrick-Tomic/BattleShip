export default class GameBoard {
    board: any[] = []
    missedShot : any[] = []
    constructor() {
        this.initialize()
    }
    initialize() {
        for (let i = 0; i <=10; i++) {
            let arr = []
            let missed = []
            for(let j = 0; j < 10; j++) {
                let element: any[] = []
                arr.push(element)
                missed.push(null)
            }
            this.board.push(arr)
            this.missedShot.push(missed)
        }
    }
}