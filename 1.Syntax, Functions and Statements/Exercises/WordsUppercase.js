function upperCase(string){
        let pattern = /\w+/g;

        let arr = string.match(pattern);

        let result = [];

        for (let word of arr){
                result.push(word.toUpperCase()) ;
        }
        console.log(result.join(', '));
}
upperCase('Hi, how are you?')