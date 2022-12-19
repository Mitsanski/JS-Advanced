function aggregateElements(input) {
    let sum = 0;
    let sequence = "";
    let inverse = 0;

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        inverse += 1 / input[i];
        sequence += input[i] + "";
    }
    console.log(sum);
    console.log(inverse);
    console.log(sequence);
}
aggregateElements([1, 2, 3]);
console.log("------");
aggregateElements([2, 4, 8, 16]);
