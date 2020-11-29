/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org

Tags:
ALGORITHMS STRING FORMATTING FORMATTING STRINGS
*/

function solution(list){
    // TODO: complete solution 
     var range = [], rStart, rEnd;
     for (let i=0; i < list.length; i++){
       rStart = list[i];
       rEnd = rStart;
       while (list[i+1] - list[i] === 1){
         rEnd = list[i+1];
         i++;
       }
       if (rStart === rEnd){
         range.push(rStart.toString())
       } else if (rEnd - rStart === 1){
         range.push(rStart.toString(), rEnd.toString())
       } else {
         range.push(`${rStart}-${rEnd}`)
       }
     }
     return range.join(",")
   }