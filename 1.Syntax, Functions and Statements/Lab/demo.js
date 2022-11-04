// const walk = (name) => {
//         return `${name} is walking`;
// }
// console.log(walk('Kiril'));


// function solve(count = 5){
//         console.log('*'.repeat(count));
// }
// solve(2)

function hypotenuse(m, n) {
        function square(num) {
                return num * num;
        }
        return Math.sqrt(square(m) + square(n));
}
console.log(hypotenuse(3, 4));
