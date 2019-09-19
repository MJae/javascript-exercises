const sumAll = function(userNum1, userNum2) {
    let sumStart = 0;
    let sumEnd = 0;
    let finalSum = 0;

    // Check if either number is negative
    // Question: Why should this return an error if one of the
    //      numbers is negative? Negative numbers can still be put
    //      in a range.
    if (userNum1 < 0 || userNum2 < 0) {
        return 'ERROR';
    }

    // Confirm that both arguments are numbers
    if (typeof userNum1 != "number" || typeof userNum2 != "number") {
        return "ERROR";
    }

    // Decide which number is greater
    if (userNum2 > userNum1) {
        sumStart = userNum1;
        sumEnd = userNum2;
    } else {
        sumStart = userNum2;
        sumEnd = userNum1;
    }

    // Add them all
    for (let i = sumStart; i <= sumEnd; i++) {
        finalSum += i;
    }

    return finalSum;

}

module.exports = sumAll
