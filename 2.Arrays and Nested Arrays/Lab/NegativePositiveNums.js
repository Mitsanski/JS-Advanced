function negativePositiveNumbers(arr) {
        let result = [];

        for (let el of arr){
                if (el >= 0){
                        result.push(el);
                } else {
                        result.unshift(el);
                }
        }
        console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
console.log('-----');
negativePositiveNumbers([3, -2, 0, -1])