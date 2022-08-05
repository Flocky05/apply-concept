function leapyear(){
    if((year%4==0 && year%100!==0||(year%400==0))){
        return 'true';
    }else{
        return 'false';
    }
}
var year=2200;
var Isleap=leapyear(year);
console.log(Isleap);