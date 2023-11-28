//Rotate an array by k times using anonyms

var Rotate = function(a,k){
    var b;
    for(var x = 0;x<=k;x++){
    a.unshift(a.pop());
    b=x;
    if(b==k){
      break;
    }
    }
        return a;
} 
console.log(Rotate([1,2,3,4],2));

//Rotate an array by k times using IIFE

(function Rotate(a,k) {
    var b;
    for(var x = 0;x<=k;x++){
    a.unshift(a.pop());
    b=x;
    if(b==k){
      break;
    }
    }
    console.log(a);
})([1,2,3,4],2);