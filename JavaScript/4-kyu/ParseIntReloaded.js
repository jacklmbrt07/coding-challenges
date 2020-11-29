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

https://medium.com/@spencerwhitehead7/snail-sort-the-gimmick-sort-goat-310510814eab
 */

function parseInt(string) {
    // 1. define unique words
    const numStrings = {
        zero: 0,
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
    // 2. split string into array and break hyphenated words
    var strArr = string.split(/-| /);
    // 3. convert each word into the number it represents
    strArr = strArr
        .filter((str) => str !== "and") // remove "and"
        .map((str) => numStrings[str]);

    // 4. convert clusters of hundreds into product ex. [7, 100] -> [700]
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 100 && strArr[i - 1] < 10) {
            strArr[i] = strArr[i] * strArr[i - 1];
            strArr.splice(i - 1, 1);
        }
    }

    // 5. combine tens and ones within clusters of hundreds [700, 80, 3] -> [783]
    for (let i = 0; i < strArr.length; i++) {
        if (
            (strArr[i] % 100 == 0 && strArr[i] < 1000) ||
            (strArr[i] % 10 == 0 && strArr[i] < 100)
        ) {
            while (strArr[i + 1] < strArr[i]) {
                strArr[i] = strArr[i] + strArr[i + 1];
                strArr.splice(i + 1, 1);
            }
        }
    }

    // 6. convert hundred clusters into product of millionths [783, 1000000] -> 783000000
    let millIdx = strArr.indexOf(1000000);
    if (millIdx != -1) {
        strArr[millIdx] = strArr[millIdx] * strArr[millIdx - 1];
        strArr.splice(millIdx - 1, 1);
    }

    // 7. convert hundred clusters into product of thousandths [783, 1000] -> 783000
    let thouIdx = strArr.indexOf(1000);
    if (thouIdx != -1) {
        strArr[thouIdx] = strArr[thouIdx] * strArr[thouIdx - 1];
        strArr.splice(thouIdx - 1, 1);
    }

    // 8. return sum of all remaining numbers
    return strArr.reduce((a, b) => a + b, 0);
}

console.log(parseInt("thirty-six thousand eight hundred eighty-nine")); // 36889
console.log(parseInt("one")); // 1
console.log(parseInt("twenty")); // 20
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

// not passing 5 digit varibales
