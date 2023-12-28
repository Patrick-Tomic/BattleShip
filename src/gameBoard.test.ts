/* 
import { board } from '.'
import Ship from './ship'
import { eventNames } from 'process'
 describe('plant boat on board', () => {
    test('', () => {
        board.createBoat(2, 3, 2, 'vertical') 
        expect(board.board[3][3] && board.board[2][3]).toBe('Destroyer')
    })
})
 
    test('view ship object in Ships array', () => {
        board.createBoat(1,5,4,'horizontal')
        expect(board.ships[1]).toEqual({
            "Sunk": false,
            "hits": 0,
            "length": 4,
            "name": 'Battleship'
        })
        })
                
    test('error thrown when position taken', () => {
        board.createBoat(1,1,3,'vertical')
        board.createBoat(0,3,4,'horizontal')
        expect(Error) 
    })
    test('Recieve Hit function', ()=> {
        board.createBoat(1 ,1, 2, 'vertical')
        board.recieveAttack(5,5)
        expect(board.board[5][5]).toBe('X')
    }) 
    test('see if all boats are sunk', () => {
        expect(board.shipsSunk()).toBe(false)
    })
    test('create boat too small', () => {
        expect(board.createBoat(1,1,1,'horizontal')).toBe('length value not allowed')
    })

    
    test.only('see if shipSunk works if all sink', () => {
        board.createBoat(1,1,2,'horizontal')
        board.recieveAttack(1,1)
        board.recieveAttack(1,2)
        
       
        expect(board.shipsSunk()).toBe(true)
    }) */
import { error } from "console";
import User from "./user";
import {describe, expect, test} from '@jest/globals'

describe('testing to see if ship can be placed on top of each other', () => {
    test('cruiser on top of submarine', () => {
        const player = new User('Player')
        player.createBoat(1,1,3,'horizontal')
        expect(player.createBoat(1,1,3,'horizontal')).toBe(Error)
    })
})