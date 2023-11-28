//print prime numbers in an array using anonymus function

var prime =function (a) {
    var c =[];
    for(var x =0;x<a.length;x++){
        var b =0;
        for(var i=1;i<=a[x];i++){
        if(a[x]%i==0){
            b++
        } 
        }
           if(b==2){
        c.push(a[x]);
    }
         
        }
    return c
}
console.log(prime([2,3,4,5]));

//print prime numbers in an array using IIFE function

(function prime(a) {
    var c =[];
    for(var x =0;x<a.length;x++){
        var b =0;
        for(var i=1;i<=a[x];i++){
        if(a[x]%i==0){
            b++
        } 
        }
           if(b==2){
        c.push(a[x]);
    }
         
        }
    console.log(c);
})([2,3,4,5]);

//print prime numbers in an array using Arrow function

var prime = (a)=> {
    var c =[];
    for(var x =0;x<a.length;x++){
        var b =0;
        for(var i=1;i<=a[x];i++){
        if(a[x]%i==0){
            b++
        } 
        }
           if(b==2){
        c.push(a[x]);
    }
         
        }
    return c
}
console.log(prime([2,3,4,5]));
