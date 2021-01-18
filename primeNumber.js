function primeNumber(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "not a prime number";
        }
    }
    return "your number is a prime number";
}
let result = primeNumber(139);
console.log(result);