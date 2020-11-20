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
    if (arr.length == 0) return 1;
    else if (arr.length == 1) return arr[0] % 10;
    else {
        while (arr.length > 2) {
            arr[arr.length - 2] = arr[arr.length - 2] ** arr[arr.length - 1];
            arr.pop();
        }
        if (arr[1] == 0) return 1;
        switch (arr[0] % 10) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return mod4(arr[1], 6, 2, 4, 8);
            case 3:
                return mod4(arr[1], 1, 3, 9, 7);
            case 4:
                return mod2(arr[1], 6, 4);
            case 5:
                return 5;
            case 6:
                return 6;
            case 7:
                return mod4(arr[1], 1, 7, 9, 3);
            case 8:
                return mod4(arr[1], 6, 8, 4, 2);
            case 9:
                return mod2(arr[1], 9, 1);
        }
    }

    function mod2(exp, a, b) {
        switch (exp % 2) {
            case 0:
                return a;
            case 1:
                return b;
        }
    }

    function mod4(exp, a, b, c, d) {
        switch (exp % 4) {
            case 0:
                return a;
            case 1:
                return b;
            case 2:
                return c;
            case 3:
                return d;
        }
    }

}

function modulo (n, p, m) {
    var result = 1;
    while(p--){
        result = (result * n) % m

    }
    return result
}

console.log(modulo(767456, 140248, 4))


// console.log((767456 ** 140248) % 10)

// console.log(lastDigit([0, 0])); // 0 ^ 0
// console.log(lastDigit([0, 0, 0])); // 0^(0 ^ 0) = 0^1 = 0
// console.log(lastDigit([1, 2]));
// console.log(lastDigit([3, 4, 5]));
// console.log(lastDigit([4, 3, 6]));
// console.log(lastDigit([7, 6, 21]));
// console.log(lastDigit([12, 30, 21]));
// console.log(lastDigit([2, 2, 2, 0]));
// console.log(lastDigit([937640, 767456, 981242]));
// console.log(lastDigit([123232, 694022, 140249]));
// console.log(lastDigit([499942, 898102, 846073]));
// console.log(lastDigit([694022, 140249]));
// console.log(lastDigit([ 898102, 846073]));

// var r1 = Math.floor(Math.random() * 100);
// var r2 = Math.floor(Math.random() * 10);

// console.log(lastDigit([]));
// console.log(lastDigit([r1]));
// console.log(lastDigit([r1, r2]));
