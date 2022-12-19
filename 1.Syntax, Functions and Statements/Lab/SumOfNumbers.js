function sumOfNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    let total = 0;

    for (let i = a; i <= b; i++) {
        total += i;
    }
    console.log(total);
}
sumOfNumbers("-8", "20");
sumOfNumbers("1", "5");
