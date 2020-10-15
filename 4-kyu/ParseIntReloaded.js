/**
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
 */

const numStrings = {
    zero: 0, //unique
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
};

function parseInt(string) {
    // split string seperated by spaces and hyphens
    var strArr = string.split(/-| /);
    // convert array of strings into a array of numbers
    strArr = strArr
        .filter((str) => str !== "and")
        .map((str) => numStrings[str]);

    //iterate
    // while (strArr.length > 1) {
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 100 && strArr[i - 1] < 10) {
            strArr[i] = strArr[i] * strArr[i - 1];
            strArr.splice(i - 1, 1);
        }
    }
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] % 100 == 0 && strArr[i] < 1000) {
            while (strArr[i + 1] < strArr[i]) {
                strArr[i] = strArr[i] + strArr[i + 1];
                strArr.splice(i + 1, 1);
            }
        }
    }
    var millIdx = strArr.indexOf(1000000);
    if (millIdx != -1) {
        strArr[millIdx] = strArr[millIdx] * strArr[millIdx - 1];
        strArr.splice(millIdx - 1, 1);
    }
    var thouIdx = strArr.indexOf(1000);
    if (thouIdx != -1) {
        strArr[thouIdx] = strArr[thouIdx] * strArr[thouIdx - 1];
        strArr.splice(thouIdx - 1, 1);
    }

    // return strArr;
    return strArr.reduce((a, b) => a + b, 0);
}

console.log(parseInt("one"));
console.log(parseInt("twenty"));
console.log(parseInt("twenty thousand"));
console.log(parseInt("two hundred forty-six"));
console.log(
    parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
console.log(
    parseInt(
        "five hundred twenty-three million nine hundred nineteen thousand twelve"
    )
);

// 783919
//"(((seven*hundred)+(eighty+three))*thousand) + (nine*hundred) + nineteen"
// (7*100+80+3)*1000+9*100+19 = 783919
// (((7*100)+80+3)*1000)+((9*100)+19) = 783919
// ((700+80+3)*1000)+(900+19)
