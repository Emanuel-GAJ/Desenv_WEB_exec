const soma  = function (a,b) {
    return a + b
}

console.log(soma(1,2))

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

const trian = function (a,b,c) {

    if (a <= 0 || b <= 0 || c <= 0) {
        return 'none'
    } 

    if (a === b && a === c) {
        return 'equilatero'
    }

    if (a === b && a + b > c) {
        return 'isosceles'
    }
    
    if (a === c && a + c > b) {
        return 'isosceles'
    } 

    if (c === b && c + b > a) {
        return 'isosceles'
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
        return 'none'
    }

    else {
        return 'escaleno'
    }
} 

console.log(trian(2,1,4))