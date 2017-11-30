"use strict";

//TODO: require the `./index.js` module and
//write automated tests for the various functions

const index = require('./index.js');

describe("byNumber", function(){
    test("return positive when n1 > n2", function(){
        expect(index.byNumber(2,1)).toBeGreaterThan(0);
    });

    test("return negative when n1 < n2", function(){
        expect(index.byNumber(1,2)).toBeLessThan(0);
    });

    test("return zero when n1 === n2", function(){
        expect(index.byNumber(1,1)).toEqual(0);
    });

    test("return positive when n2 is undefined", function(){
        expect(index.byNumber(1, undefined)).toBeGreaterThan(0);
    });

    test("return negative when n1 is undefined", function(){
        expect(index.byNumber(undefined, 1)).toBeLessThan(0);
    });

});

describe("max", function(){
    
    test("returns correct number given all positives", function(){
        expect(index.max([1,2,3])).toBe(3);
    });

    test("returns correct number given all negatives", function(){
        expect(index.max([-1,-2,-3])).toBe(-1);
    });

    test("returns undefined when given an empty array", function(){
        expect(index.max([])).toBeUndefined();
    });

    test("returns undefined when given undefined", function(){
        expect(index.max()).toBeUndefined();
    });
});

describe("getGreeting", function(){
    test("return 'Hello, Test!' when name is 'Test'", function(){
        expect(index.getGreeting("Test")).toBe("Hello, Test!");
    })
    test("return 'Hello, World!' when name is undefined", function(){
        expect(index.getGreeting()).toBe("Hello, World!");
    })
});
