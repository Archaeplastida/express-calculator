const Statistic = require("./helpers")

describe("mean function", function () {
    test("mean should return the correct result", function () {
        expect(Statistic.mean([95, 100, 75, 50, 0, 100, 25, 125, -40, 35])).toEqual(56.5);
        expect(Statistic.mean([9, 14, 14, 14, 14, 15, 19, 24, 93, 93, 99, 100, 100, 144, 144, 240])).toEqual(71);
        expect(Statistic.mean([5])).toEqual(5);
        expect(Statistic.mean([])).toEqual(NaN);
    })
})

describe("median function", function () {
    test("median should return the correct result", function () {
        expect(Statistic.median([95, 100, 75, 50, 0, 100, 25, 125, -40, 35])).toEqual(62.5)
        expect(Statistic.median([9, 14, 14, 14, 14, 15, 19, 24, 93, 93, 99, 100, 100, 144, 144, 240])).toEqual(58.5)
        expect(Statistic.median([1])).toEqual(1);
        expect(Statistic.median([])).toEqual(NaN)
    })
})

describe("mode function", function () {
    test("mode should return the correct result", function () {
        expect(Statistic.mode([95, 100, 75, 50, 0, 100, 25, 125, -40, 35])).toEqual([100])
        expect(Statistic.mode([9, 14, 14, 15, 19, 24, 93, 93, 99, 100, 100, 144, 144, 240])).toEqual([14, 93, 100, 144])
        expect(Statistic.mode([1])).toEqual([1]);
        expect(Statistic.mode([])).toEqual([])
    })
})