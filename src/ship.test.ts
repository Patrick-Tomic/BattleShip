import {describe, expect, test} from '@jest/globals'
import Ship from './ship'
import { Dingy } from '.';

describe('Create Ship', () => {
    test('length of 4', ()=>{
        expect(new Ship(4, 'Battleship')).toEqual(
        {
            'hits': 0,
            'Sunk': false,
            'length': 4,
            'name': 'Battleship'
        })
    });
});

test('see if dingy is sunk', () => {
    expect(Dingy.isSunk()).toEqual('not sunk')
})


  

