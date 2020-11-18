/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


 */

function findOdd(A) {
    var obj = {};
    A.forEach((element) => {
        obj[element] = ++obj[element] || 1;
    });
    for (const key in obj) {
        if (obj[key] % 2 != 0) {
            return parseInt(key);
        }
    }
}

function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    Test.assertEquals(findOdd(a), n);
}
Test.describe("Example tests", function () {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});
