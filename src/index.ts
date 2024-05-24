/* 
Tip: Avoid using named imports to avoid tree-shaking issues
Example of a named import
import { Effect } from 'effect'
{@link https://effect.website/docs/guides/essentials/importing-effect#tree-shakeability | Tree Shakeability}
*/
import * as Effect from 'effect/Effect';
import * as effect from 'effect';
/**
 * Test if a string is less than five characters, 
 * which uses effects to explictly handle errors 
 * rather than throw them
 * @param input1 string to test for character length
 * @returns Effect.Effect<boolean,Error>
 */
const stringMustBeLessThanFiveCharacters = 
    (input1: string): Effect.Effect<boolean,Error> =>
         input1.length < 5 ? 
            Effect.succeed(true): Effect.fail(new Error("Input has more than give characters"));
/**
 * Below is a program that will fail but effects will be handled gracefully 
 * catchAll
 */
const programWillFail = 
    Effect.runSync(
        effect.pipe(
            "ultraman",
            stringMustBeLessThanFiveCharacters,
            Effect.flatMap((result) => Effect.log("String passed validation")),
            Effect.catchAll((error) => Effect.logError(error.message))
        )
    )