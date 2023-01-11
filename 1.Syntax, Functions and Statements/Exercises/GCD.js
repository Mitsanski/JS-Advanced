function gcd(a, b) {
    if (a == 0) {
        console.log(b);
    }

    while (b != 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a ;
        }
    }
    console.log(a);
}
gcd(15, 5);
gcd(2154, 458);
