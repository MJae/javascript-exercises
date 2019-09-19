// Needs to accept multiple optional arguments
// Will not work if total items to remove exceeds four
const removeFromArray = function(userArray, item0, item1, item2, item4) {
    // Transform all arguments into an array
    let userArgs = Array.from(arguments);
    // Remove first argument, original array
    userArgs.shift();

    // Evaluate each item to remove
    let finalArray = userArray;
    for (let i = 0; i < userArgs.length; i++) {
        if (typeof userArgs[i] === "undefined") {
            continue;
        }
        
        // Check for presence in array
        if (finalArray.includes(userArgs[i])) {
            let itemIndex = finalArray.indexOf(userArgs[i]);
            let resultFront = finalArray.slice(0, itemIndex);
            let resultBack = finalArray.slice(itemIndex + 1);

            finalArray = resultFront.concat(resultBack);
        }
    }
    
    return finalArray;
}

module.exports = removeFromArray
