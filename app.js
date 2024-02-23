// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = valueInEuro => {

    return valueInEuro * oneEuroIs.USD;
}

const fromDollarToYen = valueInDollar => {

    return Math.floor((valueInDollar / oneEuroIs.USD * oneEuroIs.JPY) * 100) / 100;
}

const fromYenToPound = valuenInYen => {

    return Math.floor((valuenInYen / oneEuroIs.JPY * oneEuroIs.GBP) * 100) / 100;
}


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
