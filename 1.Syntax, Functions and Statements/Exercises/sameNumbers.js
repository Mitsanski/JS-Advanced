function sameNumbers(n) {
    let input = String(n);
    let isSame = true;
    let sum = 0;
    let firstDigit = input[0];

    for (let i = 0; i < input.length; i++) {
        let currentDigit = Number(input[i]);
        sum += currentDigit;
        if (firstDigit != currentDigit) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
