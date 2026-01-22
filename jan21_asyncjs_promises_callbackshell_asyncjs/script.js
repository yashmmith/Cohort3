function asd(a,b){
    return parseInt(a)+parseInt(b);
}
let ans1=asd("20",40);
console.log(ans1);

 function nw(n){
    return n*((n+1)/2);
 }
 console.log(nw(5));

//  import { readFileSync } from "fs";
//  var a = readFileSync("./a.txt", "utf-8");
//  console.log(a);
const fs=require('fs');
const contents=fs.readFileSync("a.txt","utf-8");
console.log(contents);
const contents2=fs.readFileSync("b.txt","utf-8");
console.log(contents2);

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

function print(err,data){
    console.log(data);
}

fs.readFile("b.txt","utf-8",print);

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function calc(a,b,op){
    return op(a,b);
}
console.log(calc(2,3,mul))
