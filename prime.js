function isPrime(n) {
    if (n <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // If n is divisible by i, it's not prime
    }
    return true; // If no divisors were found, n is prime
}

// Example Usage
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
