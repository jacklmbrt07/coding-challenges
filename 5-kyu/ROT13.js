/**How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 */

function rot13(str) {
    // turn into an array of letters
    var strArr = str.split("")
    // convert the letters to char codes
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].charCodeAt();
        //rotate 13 to the char code for only letters, and it resets after Z
        if ((strArr[i] >= 65 && strArr[i] <= 77) || (strArr[i] >= 97 && strArr[i] <= 109)){
            strArr[i] += 13;
        } else if ((strArr[i] >= 78 && strArr[i] <= 90) || (strArr[i] >= 110 && strArr[i] <= 122)) {
            strArr[i] -= 13;
        }
        //convert the new char code to letter
        strArr[i] = String.fromCharCode(strArr[i])
    }
    // return the joined array
    return strArr.join("")
}

console.log(rot13("EBG13 rknzcyr."))
console.log(rot13("This is my first ROT13 excercise!"))

