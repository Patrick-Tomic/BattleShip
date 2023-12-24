import {describe, expect, test} from '@jest/globals'
import { board } from '.'
import Ship from './ship'
describe('plant boat on board', () => {
    test('', () => {
        board.createBoat(2, 3, 2, 'vertical') 
        expect(board.board[3][3] && board.board[2][3]).toBe(true)
    })
})
describe('see ship object', () => {
    test('view ship object in Ships array', () => {
        board.createBoat(1,5,4,'horizontal')
        expect(board.ships[1]).toEqual({
            "Sunk": false,
            "hits": 0,
            "length": 4
        })
        })
    })