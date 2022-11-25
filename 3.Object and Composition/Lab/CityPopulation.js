function cityPopulation(array) {
        let obj = {};
        
        for (let line of array){
                let [city, population] = line.split(' <-> ');
                population = Number(population)
                if (obj.hasOwnProperty(city)){
                    obj[city] += population;    
                } else {
                        obj[city] = population
                } 
        }

        for (let city in obj){
                console.log(`${city} : ${obj[city]}`);
        }
}
cityPopulation(['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
)
console.log('-----');
cityPopulation(['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
)