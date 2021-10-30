// let factorial = 1;
// for (var i = 1; i <5;i++){
//     factorial = factorial *i;
//     console.log(i,factorial);
// }
function factorial(n){
    let factorial = 1;
for (var i = 1; i <n;i++){
    factorial = factorial *i;
}
return factorial;
}
var result = factorial(10);
console.log(result);

