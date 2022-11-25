const car1 = {
        model: 'Race Car',
        start(){
                console.log(`${this.model} goes vrrom!`);
        }
};

const car2 = {
        model: 'Station Wagon',
        start: car1.start
};
car2.start()