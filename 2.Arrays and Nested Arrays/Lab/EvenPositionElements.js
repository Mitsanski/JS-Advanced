function evenPosEl(arr) {
        let result = [];

        for (let i = 0; i < arr.length; i += 2) {
                        result.push(arr[i]);
        }
        console.log(result.join(' '));
}
evenPosEl(['20', '30', '40', '50', '60'])
evenPosEl(['5', '10'])