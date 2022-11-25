function sumTable() {
    let sum = 0;

    let prices = [...document.querySelectorAll("td")];
    for (let i = 1; i < prices.length - 2; i += 2) {
        sum += Number(prices[i].textContent);
    }
    document.getElementById('sum').textContent = sum;
}
