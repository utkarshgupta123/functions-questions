function people(){
    console.log("hello world");         //hello world
}
people()

function wow(a,b){
    let done=a+b;               
    console.log(done);                     //7
}
wow(3,4)


const world = (d,e) =>{               
    let work= (d+e);
    console.log(work);                            //7
}
world(4,6);



var x = 21; 
var girl = function () { 
   console.log(x);                    //undefined
   var x=20; 
}
girl();



var x = 21; 
girl ();
console.log (x)                             //21
function girl() { 
   console.log(x);                               //undefined
    var x=20;
}


var z = 21;
a();                                               //a is not defined
b();
console.log(a);
a = function() {  
    
    z = 20;
    console.log(z);//20
};
b = function() {
    
    z = 40;
    console.log(z);
};


const n=5;
let fact=1
  for(let i=1;i<=5;i++){                     //120
  fact*=i;
}
console.log(fact);