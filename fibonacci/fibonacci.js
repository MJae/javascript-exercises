const fibonacci = function(x) {
    let a = b = 1;
    
    // Check if the number is positive
    if (x < 1) {
        return "OOPS"
    }

    // Transform to int if string is input
    if (typeof(x) === "string") {
        x = Number(x);
    }

    // Get the number
    if (x == 1 || x == 2) {
        return 1;
    } else {
        let f = 0;
        for (let i = 3; i <= x; i++) {
            f = a + b;
            a = b;
            b = f;
        }

        return f;
    }
}

module.exports = fibonacci
