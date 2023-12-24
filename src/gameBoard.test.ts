import {describe, expect, test} from '@jest/globals'
import { board } from '.'
import { todo } from 'node:test'
describe('plant boat on board', () => {
    test(' boat of length 2 at (2,3)', () => {
        expect(board.createBoat(2, 3, 2, 'vertical').toEqual(true))
    })
})