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
import GameBoard from "./gameBoard";
import User from "./user";
import {describe, expect, test} from '@jest/globals'
 
describe('testing gameboard functions,', () => {
    const board = new GameBoard()
   /*  test('createBoat function horizontal' ,() => {
    
        board.createBoat(2,9,3,'horizontal')
        expect(board.createBoat(2,8,5,'horizontal')).toBe(console.log('not valid'))
        expect(board.board[2][9]).toBe('O')
        expect(board.board[2][7]).toBe('O')
        expect(board.board[2][8]).toBe('O')


        board.createBoat(0,0,5,'horizontal')
        expect(board.createBoat(0,5,2,'horizontal')).toBe(console.log('not valid'))
        expect(board.board[0][0]).toBe('O')
        expect(board.board[0][1]).toBe('O')
        expect(board.board[0][2]).toBe('O')
        expect(board.board[0][3]).toBe('O')
        expect(board.board[0][4]).toBe('O')

       
        board.createBoat(6,6,5,'horizontal')
        expect(board.board[6][6]).toBe('O')
        expect(board.board[6][5]).toBe('O')

         
    }) */
    test('vertical functions', ()=>{
        board.createBoat(0,0,5 ,'vertical')
        expect(board.board[0][0]).toBe('O')
        expect(board.board[1][0]).toBe('O')
        expect(board.board[2][0]).toBe('O')
        expect(board.board[3][0]).toBe('O')
        expect(board.board[4][0]).toBe('O')
    }) 
})