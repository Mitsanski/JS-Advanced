function biggestElement(matrix) {
        let biggest = 0;

        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
                for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
                        if (matrix[rowIndex][colIndex] > biggest) {
                                biggest = matrix[rowIndex][colIndex];
                        }

                }
        }
        console.log(biggest);
}
biggestElement([[20, 50, 10],
[8, 33, 145]]
);