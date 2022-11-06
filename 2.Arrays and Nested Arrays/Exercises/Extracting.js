function extracting(arr) {
        let biggest = 0;
        let result = [];
        for (let i = 0; i < arr.length; i++) {
                let currentEl = arr[i]
                if (currentEl >= biggest) {
                        biggest = arr[i];
                        result.push(biggest)
                }
        }
        return result;
}
extracting([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extracting([1, 2, 3, 4]);
extracting([20, 3, 2, 15, 6, 1]);