import {timesTwo} from "./functions"

//first argument: name of test, second argument: what should be tested
test("Multiplies by two", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(timesTwo(4)).toBe(8)
})