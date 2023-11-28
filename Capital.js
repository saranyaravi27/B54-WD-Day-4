//Convert all the strings to title caps in a string array using anonyms

var cap = function(a){
    var c =[];
    for(var x =0;x<a.length;x++){
            c.push(a[x].toUpperCase()); 
        }
        
       return c;
} 
console.log(cap(["guvi","geek"]));

//Convert all the strings to title caps in a string array using IIFE

(function cap(a){
    var c =[];
    for(var x =0;x<a.length;x++){
            c.push(a[x].toUpperCase()); 
        }
        
       console.log(c);
}) (["guvi","geek"]);

//Convert all the strings to title caps in a string array using arrow

var cap = (a)=>{
    var c =[];
    for(var x =0;x<a.length;x++){
            c.push(a[x].toUpperCase()); 
        }
        
       return c;
} 
console.log(cap(["guvi","geek"]));