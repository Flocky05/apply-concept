

function findOddSum(array){
    var sum=0;
    for(var i=0;i<array.length;i++){
        if(array[i]%2==1){
            sum+=array[i];
        }
    }
    console.log('The sum of array is ',sum);
    var avg=sum/array.length;
    return avg;   
    // console.log(avg);
}
var array=[2,3,4,5,6,7,8,9,0,11]
var average= findOddSum(array);
console.log(average);
