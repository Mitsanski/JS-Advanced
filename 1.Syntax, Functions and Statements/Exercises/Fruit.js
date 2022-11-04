function fruit(fruit, grams, perKg){
        let kg = grams / 1000;
        console.log(`I need $${(kg * perKg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
console.log('----');
fruit('apple', 1563, 2.35);