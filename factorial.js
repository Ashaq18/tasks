function factorial(n){
    if (n<0){
        return "factorial doesnt have negative value"
    }
    if (n===0||n===1){
        return 1;
    }
    return n*factorial(n-1)
}

console.log(factorial(5))