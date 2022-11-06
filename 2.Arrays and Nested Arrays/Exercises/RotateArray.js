function rotate(arr, n) {
        for (let i = 0; i < n; i++) {
                let last = arr.splice(-1).join('');
                arr.unshift(last)
        }
        console.log(arr.join(' '));
}
rotate(['1',
        '2',
        '3',
        '4'],
        2);
rotate(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
        15);