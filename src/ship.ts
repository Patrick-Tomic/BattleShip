export default class Ship{
    length: number
    Sunk: boolean
    hits: number
    constructor(length: number) {
        this.length = length
        this.Sunk = false
        this.hits = 0
    }
    hit() {
        return this.hits++
    }

    isSunk() {
        if (this.hits === this.length) {
            this.Sunk = true
            console.log("player has sunk your battleship")
            return
        } else {
            return 'not sunk'
        }
    }
}