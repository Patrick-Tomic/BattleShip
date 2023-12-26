import {describe, expect, test} from '@jest/globals'
import { board } from '.'
import Ship from './ship'
import { verify } from 'crypto'
import exp from 'constants';
describe('plant boat on board', () => {
    test('', () => {
        board.createBoat(2, 3, 2, 'vertical') 
        expect(board.board[3][3] && board.board[2][3]).toBe(true)
    })
})
 
    test('view ship object in Ships array', () => {
        board.createBoat(1,5,4,'horizontal')
        expect(board.ships[1]).toEqual({
            "Sunk": false,
            "hits": 0,
            "length": 4
        })
        })
                
    test('error thrown when position taken', () => {
        board.createBoat(1,1,3,'vertical')
        board.createBoat(0,3,4,'horizontal')
        expect(Error) 
    })

   