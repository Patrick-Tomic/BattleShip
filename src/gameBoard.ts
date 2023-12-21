export default class GameBoard {
    board: any[][] = []
    missedShot : boolean[][] = []
    constructor() {
        this.initialize()
    }
    initialize() {
        for(let i = 0; i < 10; i++) {
            this.board[i] = []
            this.missedShot[i] = []
            for(let j = 0; j < 10; j++) {
                this.board[i][j] = null
                this.missedShot[i][j] = false
            }
        }
    }
}