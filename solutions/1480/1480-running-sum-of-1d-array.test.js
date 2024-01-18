const runningSum = require("./1480-running-sum-of-1d-array.js");

describe("1480", () => {
    it("default test cases", () => {
        expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
        expect(runningSum([1,1,1,1,1])).toEqual([1,2,3,4,5]);
        expect(runningSum([3,1,2,10,1])).toEqual([3,4,6,16,17]);
    });
});