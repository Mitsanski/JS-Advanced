function pieceOfPie(pies, start, end) {
        const startIndex = pies.indexOf(start)
        const endIndex = pies.indexOf(end);

        let result = pies.slice(startIndex, endIndex + 1);

        return result;
}       
pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
        'Key Lime Pie',
        'Lemon Meringue Pie'
);