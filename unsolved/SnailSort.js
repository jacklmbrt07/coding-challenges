/**
 * Snail Sort
 * 
 * 4 kyu
 * 
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


 */

snail = function (array) {
    // 1) find n
    const n = array.length;
    // 2) declare array that will be answer
    var snailArr = [];
    // 3) solve for n = 0, length is still 1
    // 4) solve for n = 1
    if (n == 1) {
        return array[0][0] ? [array[0][0]] : snailArr;
    }
    // 5) solve for n = 2
    if (n == 2) {
        snailArr.push(array[0][0])
        snailArr.push(array[0][1])
        snailArr.push(array[1][1])
        snailArr.push(array[1][0])
        return snailArr
    }
    // 6) solve for n = 3
    if (n == 3) {
        var transpose = array.map((_, colIndex) => array.map(row => row[colIndex]))
        var arrayCopy = array
        console.log(array)
        // console.log(transpose)
        // array[0].forEach(num => snailArr.push(num))
        snailArr.push(array[0][0]) // direction: start
        arrayCopy[0].splice(0, 1)
        console.log(arrayCopy)
        snailArr.push(array[0][1]) // dir: right
        arrayCopy[0].splice(0, 1)
        console.log(arrayCopy)
        snailArr.push(array[0][2]) // dir right     pivot
        arrayCopy[0].splice(0, 1)
        console.log(arrayCopy)
        snailArr.push(array[1][2]) // dir: down
        arrayCopy[1].splice(2, 1)
        console.log(arrayCopy)
        snailArr.push(array[2][2]) // dir: down pivot
        arrayCopy[2].splice(2, 1)
        console.log(arrayCopy)
        snailArr.push(array[2][1]) // dir: left
        arrayCopy[2].splice(1, 1)
        console.log(arrayCopy)
        snailArr.push(array[2][0]) // dir: left pivot 
        arrayCopy[2].splice(0, 1)
        console.log(arrayCopy)
        snailArr.push(array[1][0]) // dir: up   pivot 
        arrayCopy[1].splice(0, 1)
        console.log(arrayCopy)
        snailArr.push(array[1][1]) // dir: right
        arrayCopy[1].splice(0, 1)
        console.log(arrayCopy)
        return snailArr
    }
    // 7) solve for n = 4
    // 8) solve for n = 5
    // 9) solve for n = 6
    // 10) solve for n = infinity
};

// console.log(snail([[]])); // [];
// console.log(snail([[1]])); // [1];
// console.log(snail([
//     [1, 2],
//     [3, 4]
// ])); // [1, 2, 4, 3]

console.log(
    snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5];
// console.log(
//     snail([
//         [1, 2, 3, 4, 5],
//         [6, 7, 8, 9, 10],
//         [11, 12, 13, 14, 15],
//         [16, 17, 18, 19, 20],
//         [21, 22, 23, 24, 25],
//     ])
// ); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
// console.log(
//     snail([
//         [1, 2, 3, 4, 5, 6],
//         [20, 21, 22, 23, 24, 7],
//         [19, 32, 33, 34, 25, 8],
//         [18, 31, 36, 35, 26, 9],
//         [17, 30, 29, 28, 27, 10],
//         [16, 15, 14, 13, 12, 11],
//     ])
// ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
