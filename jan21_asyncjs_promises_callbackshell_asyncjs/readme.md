The code runs line by line .
The function is put aside in memory and then when we call it it enters the function.
The loop runs again and again if it enters until the condition is true.

<!-- Homework : googleprocess.env.number
promisified async functions on settimeout ,fetch and fs.readfile. -->


syncronus code :any code which runs in a sequence unlike stopping or running it on an other thread is not possible The output is guaranteed to be in the exact order because each console.log waits for the one above it to finish. Each operation waits for the previous operation to complete then moves to the next one.

fs is an external library which means file system first we import it then we write fs.readfile("path","utf-8");
where readfilesync is a part of fs class or object utf-8 is the encoding 
const fs=require('fs');
const contents=fs.readFileSync("a.txt","utf-8");
console.log(contents);

i/o operations refer to taks which transfer of data takes place between the s/w and h/w ie reading the file 
These are cpu intensive tasks (ie we dont know how much time this code takes to run). can be time consuming than in memory computations eg :- reading a file ,starting a clock 


i/o bound tasks vs cpu bound tasks 
io bound tasks are file reading like tasks 
program remains unhinged during that task is done 
cput bound tasks are like loops printing etc

Asynchronous programming handles long-running tasks (like network requests, file I/O, or timers) without freezing the main application thread. 
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});
when we use only readFile instead of sync it is upto the cpu to determine hoe much time it may take as it is not sequential so it is not sequential and the next operations in normal non io based operations continue
once the asyncronous code is done it will call back to the main code 

function print(err,data){
    console.log(data);
}
fs.readFile("b.txt","utf-8",print);

The above code represents as soon as u are done reading the data asyncronously away from the main thread (which continues other operations) then the print function is called which is error first 

