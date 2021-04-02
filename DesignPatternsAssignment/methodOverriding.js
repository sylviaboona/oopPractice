var a, b;
//First addNum
var addNum = function(a, b){
    return a+b;
}
//Second addNum
var addNum = function(x, y, z){
    return x+y+z;
}
// tSecond addNum overrides the first addNum 
console.log(addNum(2,4,7));

