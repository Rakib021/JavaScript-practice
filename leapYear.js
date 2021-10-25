// let year = 1999;
// if(year % 400==0){
//     console.log("Leap Year");
// }
// else if(year % 4 ==0 && year % 100!=0){
//     console.log("Leap Year");
// }
// else{
//     console.log("Not a Leap Year");
// }
function isLeapYear(year){
    if(year % 400==0){
        return true;
    }
    else if(year % 4 == 0 && year % 100!=0){
        return true;
    }
    else{
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000);
const check1998 = isLeapYear(1998);
console.log(check1998);
const check1997 = isLeapYear(1997);
console.log(check1997);
const check1996 = isLeapYear(1996);
console.log(check1996);
