//print odd numbers in an array using anonymus function

var odd = function(a){
    var c =[]
    for(var x =0;x<a.length;x++){
        if(a[x]%2!=0){
            c.push(a[x]); 
        }

        }
       return c;
} 
console.log(odd([1,2,3]));

//print odd numbers in an array using IIFE function

(function odd(a){
    var c =[]
    for(var x =0;x<a.length;x++){
        if(a[x]%2!=0){
            c.push(a[x]); 
        }

        }
       console.log(c);
}) ([1,2,3]);

//print odd numbers in an array using Arrow function

var odd = (a)=>{
    var c =[]
    for(var x =0;x<a.length;x++){
        if(a[x]%2!=0){
            c.push(a[x]); 
        }

        }
       return c;
} 
console.log(odd([1,2,3]));