/**
 * For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g.,

lastDigit([3, 4, 2]) === 1
because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.


Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.

source  from: https://exponentcalculator.net/Tutorials/How-to-find-the-last-digit-of-a-large-exponent.html
 */

function lastDigit(arr) {
    const x = arr[1] % 4;
    const y = arr[0] % 10;
    switch (arr.length) {
        case 0:
            return 1;
        case 1:
            return arr[0] % 10;
        case 2:
            if (arr[1] == 0) return 1;
            const table = [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [6, 2, 4, 8],
                [1, 3, 9, 7],
                [6, 4, 6, 4],
                [5, 5, 5, 5],
                [6, 6, 6, 6],
                [1, 7, 9, 3],
                [6, 8, 4, 2],
                [9, 1, 9, 1],
            ];
            return table[y][x];
        default:
            switch (arr[2] % 2) {
                case 0:
                    const evenTable = [
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [1, 2, 6, 2],
                        [1, 3, 1, 3],
                        [1, 4, 6, 4],
                        [1, 5, 5, 5],
                        [1, 6, 6, 6],
                        [1, 7, 1, 7],
                        [1, 8, 6, 8],
                        [1, 9, 1, 9],
                    ];
                    console.log(evenTable[y]);
                    console.log(x);
                    return evenTable[y][x];
                case 1:
                    const oddTable = [
                        [0, 0, 0, 0],
                        [1, 1, 1, 1],
                        [1, 2, 6, 6],
                        [1, 3, 1, 7],
                        [1, 4, 6, 4],
                        [1, 5, 5, 5],
                        [1, 6, 6, 6],
                        [1, 7, 1, 3],
                        [1, 8, 6, 8],
                        [1, 9, 1, 9],
                    ];
                    console.log(oddTable[y]);
                    console.log(x);
                    return oddTable[y][x];
            }
    }
}

console.log(lastDigit([0, 0])); // 0 ^ 0
console.log(lastDigit([0, 0, 0])); // 0^(0 ^ 0) = 0^1 = 0
console.log(lastDigit([1, 2]));
console.log(lastDigit([3, 4, 5]));
console.log(lastDigit([4, 3, 6]));
console.log(lastDigit([7, 6, 21]));
console.log(lastDigit([12, 30, 21]));
console.log(lastDigit([2, 0, 2, 0]));
console.log(lastDigit([937640, 767456, 981242]));
console.log(lastDigit([123232, 694022, 140249]));
console.log(lastDigit([499942, 898102, 846073]));
console.log(lastDigit([694022, 140249]));
console.log(lastDigit([898102, 846073]));

var r1 = Math.floor(Math.random() * 100);
var r2 = Math.floor(Math.random() * 10);

console.log(lastDigit([]));
console.log(lastDigit([r1]));
console.log(lastDigit([r1, r2]));
