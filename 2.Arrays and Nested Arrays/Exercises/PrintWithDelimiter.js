function printWithDelimiter(input, delimiter) {
        console.log(input.join(delimiter));
}
printWithDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
        '-');
console.log('-------');
printWithDelimiter(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
        '_');