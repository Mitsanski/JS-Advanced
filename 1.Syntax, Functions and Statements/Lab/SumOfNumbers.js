function sumOfNumbers(n, m) {
        let sum = 0;
        n = Number(n)
        m = Number(m)
        for (let i = n; i <= m; i++){
                sum += i;
        }
        return sum;
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');