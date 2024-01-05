import User from "./user"
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
        
        return this.hits++

    }

    isSunk(user:User) {
        const title:any = document.querySelector('.title')
        
        if (this.hits === this.length) {
            this.Sunk = true
            title.innerHTML = user.name+" has sunk your " + this.name
            return true
        } else {
            return false
        }
    }
}