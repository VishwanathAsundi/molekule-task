const testCases = [
    [
        [
            [
                [-1, 1, 0, -1, 1],
                [1, 0, 1, -1, 1],
                [1, 0, 0, -1, 1]
            ]
        ],
        2,
        "Tomatoes will be rotten in 2 days"
    ],
    [
        [
            [
                [-1, 1, 0, -1, 1],
                [0, 0, 1, -1, 1],
                [1, 0, 0, -1, 1]
            ]
        ],
        -1,
        "All tomatoes cannot be rotten"
    ]
];

function main(tomatoGrid) {
    // complete this function

    //Time Complexity O(max(m,n)*m*n)
    //Where m is number of rows, n is number of columns

    //Space complexity O(1)

    let m = tomatoGrid.length;
    let n = tomatoGrid[0].length;

    let rottenFound = false;
    let initial = 2;

    function isLiesWithin(i, j) {
        if (i >= 0 && i < m && j >= 0 && j < n) return true;
        return false;
    }

    //Changing initial value of rotten tomatoes to 2
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (tomatoGrid[i][j] === -1) {
                tomatoGrid[i][j] = 2;
            }
        }
    }

    for (;;) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // (i+1, j), (i, j-1), (i, j+1), (i-1, j)
                if (tomatoGrid[i][j] == initial) {
                    if (isLiesWithin(i + 1, j) && tomatoGrid[i + 1][j] == 1) {
                        tomatoGrid[i + 1][j] = tomatoGrid[i][j] + 1;
                        rottenFound = true;
                    }
                    if (isLiesWithin(i, j + 1) && tomatoGrid[i][j + 1] == 1) {
                        tomatoGrid[i][j + 1] = tomatoGrid[i][j] + 1;
                        rottenFound = true;
                    }
                    if (isLiesWithin(i - 1, j) && tomatoGrid[i - 1][j] == 1) {
                        tomatoGrid[i - 1][j] = tomatoGrid[i][j] + 1;
                        rottenFound = true;
                    }
                    if (isLiesWithin(i, j - 1) && tomatoGrid[i][j - 1] == 1) {
                        tomatoGrid[i][j - 1] = tomatoGrid[i][j] + 1;
                        rottenFound = true;
                    }
                }
            }
        }

        // if no rotten tomato found means all are rotten now
        if (!rottenFound) break;
        rottenFound = false;
        initial++;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // if any tomato is not rotten then return
            if (tomatoGrid[i][j] == 1) {
                return -1;
            }
        }
    }

    return initial - 2;
}

testCases.forEach(([input, expectedResult, message]) => {
    let result = main(...input);
    if (result == expectedResult) {
        console.log(result, message);
    }
});