var num = 18;

for(var i=2; i<num - 1; i++){
    console.log(i, num% i);
    if(num % i == 0){
        console.log('Not a prime number');
        break;
    }
}