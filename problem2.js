// feel free to add more test cases.
// the format is as follows -
// [[numbers, targetSum], expectedOutput, errorMessage]

//Time complexity O(n^2)
//Auxillary space O(n) additional space required

const testCases2 = [
    [
        [
            [5, 4, 10, 7, 1, 9], 13
        ], true, "Triplet Exists"
    ],
    [
        [
            [4, 2, 5, 8, 11, 23], 9
        ], false, "Triplet does not exist"
    ],
    [
        [
            [15, 4, 10, 0, 1, 9], 26
        ], true, "Triplet Exists"
    ]
];

function main2(numbers, targetSum) {
    // complete this function
    let hashObject = {};
    for (let i = 0; i < numbers.length - 2; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (hashObject[targetSum - numbers[i] - numbers[j]]) {
                console.log(
                    "Triplets are",
                    numbers[i],
                    numbers[j],
                    targetSum - numbers[i] - numbers[j]
                );
                return true;
            } else {
                hashObject[numbers[i]] = true;
            }
        }
    }
    return false;
}

testCases2.forEach(([input, expectedResult, message]) => {
    if (main2(...input) === expectedResult) {
        console.log(message);
    }
});