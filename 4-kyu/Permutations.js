/**
 * 
 * In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
 */

function permutations(string) {
    var arr = [];

    const stringArr = string.split("");
    const numUnique = [...new Set(stringArr)];
    console.log(numUnique);

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }

    const numOfPermutations = // P = n! / (u1!*u2!...un!)
        /**
         * n = total number of letters
         * r = number of unique lterrs
         *
         */

        arr.push(stringArr);
    return arr[0];
}

console.log(
    permutations("a"), // 1
    permutations("ab"), // 2
    permutations("abc"), // 6
    permutations("aabb"), // 6
    permutations("banana") // 60
);
