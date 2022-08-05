function factorial(number){
    var sum=1;
    for(var i=number;i>=1;i--){
        sum=sum*i;
    }
    console.log(sum);
}
var result= factorial(6);
// console.log(result);