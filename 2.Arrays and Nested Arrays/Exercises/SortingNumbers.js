function sortingNumbers(arr) {
        let result = [];
        arr.sort((a, b) => a - b)
        while (arr.length !== 0) {
                let smallest = arr.shift();
                let biggest = arr.pop();
                result.push(smallest);
                result.push(biggest);
        }
        return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);