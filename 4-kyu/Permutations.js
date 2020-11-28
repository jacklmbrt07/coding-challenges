/**
 * 
 * In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
 */

// function permutations(string) {
//     var arr = [];

//     const stringArr = string.split("");
//     var counts = {};
//     for (var i = 0; i < stringArr.length; i++) {
//         counts[stringArr[i]] = 1 + (counts[stringArr[i]] || 0);
//     }
//     Object.values(counts).forEach(element => {
//         element = factorial(element)
//     });

//     const uniqueDenominator = Object.values(counts).reduce((a, b) => a*b)

//     function factorial(n) {
//         return n ? n * factorial(n - 1) : 1;
//     }

//     const numOfPermutations =  factorial(stringArr.length) / uniqueDenominator// P = n! / (u1!*u2!...un!)
//     console.log(numOfPermutations);
//         /**
//          * n = total number of letters
//          * u = count of unique letter
//          *
//          */

//         arr.push(stringArr);
//     return arr[0];
// }

// function permutations(string) {
//     // Heap's Algorithm
//     const arr = string.split("");

//     const output = [];

//     const swapInPlace = (arrToSwap, indexA, indexB) => {
//         const temp = arrToSwap[indexA];
//         arrToSwap[indexA] = arrToSwap[indexB];
//         arrToSwap[indexB] = temp;
//     };

//     const generate = (n, heapArr) => {
//         if (n === 1) {
//             output.push(heapArr.slice());
//             return;
//         }

//         generate(n - 1, heapArr);

//         for (let i = 0; i < n - 1; i++) {
//             if (n % 2 === 0) {
//                 swapInPlace(heapArr, i, n - 1);
//             } else {
//                 swapInPlace(heapArr, 0, n - 1);
//             }

//             generate(n - 1, heapArr);
//         }
//     };

//     generate(arr.length, arr.slice());

//     return output;
// }

function permutations(string) {
    var anagrams = [];

    const genAnagrams = (word, anagram = "") => {
        if (!word) {
            anagrams.push(anagram);
            return;
        }
        for (let i = 0; i < word.length; i++) {
            anagram += word[i];
            genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram);
            anagram = anagram.slice(0, anagram.length - 1);
        }
    };

    genAnagrams(string);

    return [...new Set(anagrams)];
}

console.log(permutations("a"));
console.log(permutations("ab"));
console.log(permutations("abc"));
console.log(permutations("aabb"));
console.log(permutations("banana"));
