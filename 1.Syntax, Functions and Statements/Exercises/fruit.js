function fruit(fruit, weight, pricePerKg){
    weight = weight / 1000;
    let total = weight * pricePerKg;

    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);