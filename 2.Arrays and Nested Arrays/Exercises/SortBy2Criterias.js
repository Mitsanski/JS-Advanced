function sortByCriterias(arr) {
        return arr.sort((a, b) => 
                a.length === b.length 
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )
        .join('\n')
}
sortByCriterias(['alpha',
        'beta',
        'gamma']);
console.log('-----');
sortByCriterias(['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George']);
console.log('-----');
sortByCriterias(['test',
        'Deny',
        'omen',
        'Default']);