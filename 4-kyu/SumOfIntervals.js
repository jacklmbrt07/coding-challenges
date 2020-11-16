//**
/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 */
//

function sumIntervals(intervals) {
    const arr = [];
    for (let i = 0; i < intervals.length; i++) {
        var start = intervals[i][0];
        while (start != intervals[i][1]) {
            arr.push(start);
            start++;
        }
    }
    let uniqueArr = arr.filter(function (val, idx) {
        return arr.indexOf(val) === idx;
    });
    return uniqueArr.length;
}
