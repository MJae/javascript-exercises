const palindromes = function(usrStr) {
    // Remove special characters
    let lettersStr = usrStr.replace(/[^A-Za-z]+/g, '');

    // Change all characters to lower case
    let cleanStr = lettersStr.toLowerCase();

    // Reverse the characters in the cleaned-up string
    // Code originally in reverseString.js
    let strLen = cleanStr.length;
    let resultStr = "";

    for (let i = strLen - 1; i >= 0; i--) {
        resultStr += cleanStr.charAt(i);
    }

    // Check whether the string is the same forwards and backwards
    if (cleanStr == resultStr) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
