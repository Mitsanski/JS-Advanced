function listOfNames(names) {
        let count = 1;
        names.sort((a, b) => a.localeCompare(b));

        for (let name of names){
                console.log(`${count}.${name}`);
                count++;
        }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);