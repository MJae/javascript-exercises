const caesar = function(plaintext, shift) {
    /**
     * ASCII reference
     * upper case alphabet: 65 to 907
     * lower case alphabet: 97 to 122
     */

     // Transform the plaintext into an array of unicodes
     let plaintextLen = plaintext.length;
     let charCodeList = [];
     for (let i = 0; i < plaintextLen; i++) {
         charCodeList.push(plaintext.charCodeAt(i));
     }

     // Shift each character in the string, except special ones
     let shiftedCharList = [];
     for (let j = 0; j < plaintextLen; j++) {
        let resultCode = charCodeList[j];
         if (charCodeList[j] >= 65 && charCodeList[j] <= 90) {
             resultCode = charCodeList[j] + shift;
             if (resultCode < 65) {
                 let wrapNum = 65 - resultCode;
                 resultCode = 90 - wrapNum - 1;
             } else if (resultCode > 90) {
                 let wrapNum = resultCode - 90;
                 resultCode = 65 + wrapNum -1;
             }
         } else if (charCodeList[j] >= 97 && charCodeList[j] <= 122) {
             resultCode = charCodeList[j] + shift;
             if (resultCode < 97) {
                 let wrapNum = 97 - resultCode;
                 resultCode = 122 - wrapNum - 1;
             } else if (resultCode > 122) {
                 let wrapNum = resultCode - 122;
                 resultCode = 97 + wrapNum + 1;
             } 
         }
         shiftedCharList.push(resultCode);
     }

     // Transfor code back to characters
     let transformedChars = [];
     for (let k = 0; k <= plaintextLen; k++) {
         let resultChar = String.fromCharCode(shiftedCharList[k]);
         transformedChars.push(resultChar);
     }

     // Transform the array into a string
     let resultStr = transformedChars.join('');
     console.log(resultStr);

     return resultStr;
}

module.exports = caesar
