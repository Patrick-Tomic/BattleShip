export default class Ship{
    length: number
    Sunk: boolean
    hits: number
    name: string
    positions: any[]
    constructor(length: number, name:string) {
        this.length = length
        this.Sunk = false
        this.hits = 0
        this.name = name
        this.positions = []
    }
    hit() {
        console.log('hit')
        return this.hits++

    }

    isSunk() {
        if (this.hits === this.length) {
            this.Sunk = true
            console.log("player has sunk your " + this.name)
            return
        } else {
            return 'not sunk'
        }
    }
}