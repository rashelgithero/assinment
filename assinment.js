function feetToMile (feet){
    var magerment = 5080;
    var mile = feet / magerment;
    return mile;
}
var result = feetToMile(100000);
console.log("mile:", result)




function brickCalculator(n){
    if(n <= 10)(
         height = 15
         
    )
    else if(n > 10 && n <= 20){
        var height = 12;
       
    }
    else {
       var height = 10;
        
    }
    var floor = 1000 * height;
    return floor;

}
var brick = brickCalculator(10);
console.log(brick)





function woodCalculator (num1, num2, num3){
    var table = num1*1;
    var chair = num2*3;
    var bed = num3*5;
    var cost = table + chair + bed; 
    return cost
}
var total = woodCalculator (1 , 7, 3)
console.log(total)




function tinyFriend(ages){
    var min = ages[0];
    for (i= 0 ; i < ages.length; i++ ){
        var age = ages[i];
        if(age < min){
            min = age;
        }
    }
    return min;
}
var ages = [45, 35, 23, 21, 34, 45, 9, 16, 15]  
var get = tinyFriend(ages);
console.log(get)
