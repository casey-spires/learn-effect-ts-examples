import * as VITE from 'vitest';
import * as E from 'effect/Effect';
import * as index from '../src/index';
import * as EF from 'effect';

const test = VITE.test;
const expect = VITE.expect;
const describe = VITE.describe;
describe(index.stringMustBeLessThanFiveCharacters.name, () => {
    test('isSuccess', () => {
        const testRun = index.stringMustBeLessThanFiveCharacters('rei')
        const result = E.runSync(EF.pipe(
            testRun,
            E.isSuccess
        ))
        expect(result).toEqual(true)
    })
    test('isFailure', () => {
        const testRun = index.stringMustBeLessThanFiveCharacters('asuka')
        const result = E.runSync(EF.pipe(
            testRun,
            E.isFailure
        ))
        expect(result).toEqual(true)
    })
})