const calc = function (a,b,c) {
    if (c === '+') {
        return a + b
    }

    if (c === '-') {
        return a - b
    }
   
    if (c === '*') {
        return a * b
    }

    if (c === '/') {
        return a / b
    }

 }

console.log(calc(3,4,'*'))