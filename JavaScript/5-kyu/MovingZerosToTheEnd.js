/**Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
  // TODO: Program me
  for (let i = arr.length - 1; i >= 0; i--) {
    var zeroes = []
    if (arr[i] === 0) {
      zeroes = arr.splice(i, 1)
      arr.push(zeroes[0])
    }
  }
  return arr
}
