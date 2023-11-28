//Sum of all numbers in an array using anonymus function

var sum = (a)=>{
    var b=0
    for(var x =0;x<a.length;x++){
  b += a[x]
        }
       return b;
} 
console.log(sum([1,2,3]));

//Sum of all numbers in an array using IIFE function

(function sum(a){
    var b=0
    for(var x =0;x<a.length;x++){
 b+=a[x]
        }
       console.log(b);
}) ([1,2,3]);

//Sum of all numbers in an array using Arrow function

var sum = (a)=>{
    var b=0
    for(var x =0;x<a.length;x++){
  b += a[x]
        }
       return b;
} 
console.log(sum([1,2,3]));