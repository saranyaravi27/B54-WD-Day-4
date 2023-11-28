//Remove duplicates from an array using anonyms

var Duplicates = function(a){
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            b.push(a[i]);
        }
    } 
       return b;
} 
console.log(Duplicates(["ravi","1","2","3","ravi","3"]));

//Remove duplicates from an array using IIFE

(function Duplicates(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            b.push(a[i]);
        }
    }
    console.log(b);
})(["ravi","1","2","3","ravi","3"]);
