/*
    dataArray: array of positive and negative integers
    return: the closest number to zero

    if the closest number in input could be either negative or positive, the function returns the positive one

    if the input array is undefined or empty, the function returns 0

    Examples:

    when input is [8, 5, 10] it must returns 5

    when input is [5, 4, -9, 6, -10, -1, 8] it must return -1

    when input is [8, 2, 3, -2] it must return 2

    when input is [2, 0], it must returns 0, as 0 is ... the closest number to 0
*/
function closestToZero(dataArray) {
    if (dataArray == null) return 0; // Check if dataArray is null

    const size = dataArray.length;
    if (size == 0) return 0; // Check if dataArray is empty
    else {
        var minValue = dataArray[0];
        var value2return = 0;

        for (let i = 0; i < size; i++) {
            const integer = dataArray[i];
            const absInteger = Math.abs(integer);

            if (absInteger < minValue || integer == value2return) {
                minValue = absInteger;
                value2return = integer;
            } else if (integer > 0 && absInteger == minValue) {
                minValue = absInteger;
                value2return = absInteger;
            }
        }
    }

    return value2return;
}

function testFunction(array, minTheorical) {
    const minPractical = closestToZero(array);
    const res = minPractical == minTheorical ? "OK" : "KO";

    console.log("Minimum of the array [" + array + "]: " + minPractical + "\t\tTest: " + res);
}

testFunction(null, 0);
testFunction([], 0);
testFunction([8, 5, 10], 5);
testFunction([5, 4, -9, 6, -10, -1, 8], -1);
testFunction([8, 2, 3, -2], 2);
testFunction([2, 0], 0);