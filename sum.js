function sumarray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum +=arr[i]
    }
    return sum
}

const numbers=[1,2,3,4,5]
const result=sumarray(numbers)
console.log(`The sum of the array is: ${result}`);