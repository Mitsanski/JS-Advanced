function equalNeighbors(matrix) {
        let count = 0;

        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
                for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
                        if (matrix[rowIndex][colIndex] === [rowIndex][colIndex + 1]) {
                                count++;
                        }
                }
        }
        const rowSize = matrix[0].length;

        for (let colIndex = 0; colIndex < rowSize; colIndex++) {
                for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
                        if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                                count++
                        }
                }
        }
        console.log(count);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
console.log('-----');
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)