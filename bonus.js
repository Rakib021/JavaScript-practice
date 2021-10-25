// 

function laargestNumber(numbers){
    var larger = numbers[0];
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        if(element>larger){
            larger = element;
        }
        // console.log(element);
    }
    return larger;
}
var output=laargestNumber([87,45,34]);
console.log('output', output);