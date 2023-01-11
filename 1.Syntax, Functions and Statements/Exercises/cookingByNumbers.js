function cookingByNumbers(num, command1, command2, command3, command4, command5) {
    let n = Number(num);
    let commands = [command1, command2, command3, command4, command5];

    let chop = (n) => n / 2;
    let dice = (n) => Math.sqrt(n);
    let spice = (n) => n += 1;
    let bake = (n) => n * 3;
    let fillet = (n) => n - n * 0.2;

    for (let el of commands) {
        switch (el) {
            case "chop":
                n = chop(n);
                console.log(n);
                break;
            case "dice":
                n = dice(n);
                console.log(n);
                break;
            case "spice":
                n = spice(n);
                console.log(n);
                break;
            case "bake":
                n = bake(n);
                console.log(n);
                break;
            case "fillet":
                n = fillet(n);
                console.log(n);
                break;
            default:
                break;
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
