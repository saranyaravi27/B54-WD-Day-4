//Return all the palindromes in an array using anonymus function

var palindrome =function (a) {
    var c =[];
    var e = 0;
    for(var x =0;x<a.length;x++){
            var d = a[x];
            var b = d.length-1;
    for(var i=0;i<a.length/2;i++){       
        if(d[i]==d[b]){
            b--;
            e=true;
        } 
    }
    if(e==true){
        c.push(d);
    }
    }
    return c;
}
console.log(palindrome(["guvi","racecar","mom"]));

//Return all the palindromes in an array using IIFE function

(function palindrome(a){
    var c =[];
    var e = 0;
    for(var x =0;x<a.length;x++){
            var d = a[x];
            var b = d.length-1;
    for(var i=0;i<a.length/2;i++){       
        if(d[i]==d[b]){
            b--;
            e=true;
        } 
    }
    if(e==true){
        c.push(d);
    }
    }
    console.log(c);
})(["guvi","racecar","mom"]);

//Return all the palindromes in an array using Arrow function

var palindrome =(a)=> {
    var c =[];
    var e = 0;
    for(var x =0;x<a.length;x++){
            var d = a[x];
            var b = d.length-1;
    for(var i=0;i<a.length/2;i++){       
        if(d[i]==d[b]){
            b--;
            e=true;
        } 
    }
    if(e==true){
        c.push(d);
    }
    }
    return c;
}
console.log(palindrome(["guvi","racecar","mom"]));
