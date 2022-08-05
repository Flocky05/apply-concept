function factorial(number){
    var sum=1;
    for(var i=1;i<=number;i++){
        sum=sum*i;
    }
    //console.log(sum);
    return sum;
}
var result= factorial(5);
console.log(result);
