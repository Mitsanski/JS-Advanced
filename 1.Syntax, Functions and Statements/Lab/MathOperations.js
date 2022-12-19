function mathOperations(a, b, opp) {
    let result = 0;
    switch (opp) {
        case '+': result = a + b; break; 
        case '-': result = a - b; break; 
        case '*': result = a * b; break; 
        case '/': result = a / b; break; 
        case '%': result = a % b; break; 
        case '**': result = a ** b; break; 
        default:
            break;
    }
    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');