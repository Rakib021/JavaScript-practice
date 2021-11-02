function checkPrime(n){
    for(var i = 2; i<=n; i++){
        if(n%i==0){
            return 'Not a prime number';
        }
        else{
            return 'Is a Prime Number';
        }
    }
}
var result = checkPrime(2);
console.log(result);