//print odd numbers in an array using anonymus function

var Median= function(a,b){
    var c = a.sort();
    var d = b.sort();
    var x;
    var y;
    var z =[];
    var sum = 0;
    if(c.length % 2 != 0 && d.length % 2 != 0){
       x =(c.length-1)/2;
       y =(d.length-1)/2;
      z.push(c[x]);
      z.push(d[y]);
      }
    else if(c.length % 2 == 0 && d.length % 2 == 0){
       x =(c.length)/2;
       y =(d.length)/2;
      z.push(c[x])&&z.push(c[x-1]);
      z.push(d[y])&&z.push(d[y-1]);
      }
    for (x=0;x<z.length;x++){
      sum += z [x];
      }
      return (sum/2);
    }
    console.log(Median([1,4,3,2,5],[6,5,4,3,5]));

//print odd numbers in an array using IIFE function

(function Median(a,b){
    var c = a.sort();
    var d = b.sort();
    var x;
    var y;
    var z =[];
    var sum = 0;
    if(c.length % 2 != 0 && d.length % 2 != 0){
       x =(c.length-1)/2;
       y =(d.length-1)/2;
      z.push(c[x]);
      z.push(d[y]);
      }
    else if(c.length % 2 == 0 && d.length % 2 == 0){
       x =(c.length)/2;
       y =(d.length)/2;
      z.push(c[x])&&z.push(c[x-1]);
      z.push(d[y])&&z.push(d[y-1]);
      }
    for (x=0;x<z.length;x++){
      sum += z [x];
      }
      console.log(sum/2);
    })([1,4,3,2,5],[6,5,4,3,5]);