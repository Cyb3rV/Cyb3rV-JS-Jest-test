test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(3.5);

    // If 1 dollar is 146.26 yens, then 3.5 dollars should be (3.5 * 146.26)
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91);
})

test("One yen should be 0.0055 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);

    // If 1 yen is 0.0055 pounds, then 3.5 yens should be (3.5 * 0.0055)
    const expected = 3.5 * 0.0055; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.01);
})