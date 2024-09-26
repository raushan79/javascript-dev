// write program to find gcd of two number

function gcd(a, b) {
    if(b == 0) return a;
    return gcd(b, a%b)
}

console.log(gcd(15, 5))