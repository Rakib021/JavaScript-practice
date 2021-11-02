var fibo = [0,1];
// fibo [2]= fibo[2-1]+ fibo[2-2];
// fibo [3]= fibo[3-1]+ fibo[3-2];
// fibo [4]= fibo[4-1]+ fibo[4-2];
// fibo [5]= fibo[5-1]+ fibo[5-2];
// fibo [6]= fibo[6-1]+ fibo[6-2];
// fibo[n] = fibo[n-1]+ fibo[n-2];
// fibo [i]= fibo[i-1]+ fibo[i-2];
//er ek ghor aghe ar dui ghor agher shonka diye juug korbo
//j position ta ber korbo oi position er aghe j dui ta position ache 
//ogula sum korbo 
for(var i =2; i<=10; i++){
 fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo);v 