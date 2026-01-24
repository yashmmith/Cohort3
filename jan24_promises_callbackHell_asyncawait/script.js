iconst fs=require('fs');

class rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        const area=this.width*this.height;
        return area;
    }
    print(){
        console.log(`The rectangle is ${this.color}`);
    }
}
const newrect=new rectangle(10,20,"red");
console.log(newrect.area());
newrect.print();

const newrect2=new rectangle(5,10,"Blue");
console.log(newrect2.print());

const mp=new Map();
mp.set("name","Yash");
console.log(mp.get("name"));


function callbackfunction(){
    console.log("Call back function is called 1");
}


function settimeoutpromisified(ms){
    let p=new Promise(function(resolve){
        setTimeout(resolve,ms)
    });
    return p;
}
setTimeout(callbackfunction,3000);
settimeoutpromisified(3000).then(callbackfunction);

function stp(ms){
    return new Promise((resolve)=>{
        setTimeout(cbf,ms);
    })
}

function cbf(){
    console.log("function is called 2");
}
stp(4000).then(cbf);





function promisifiedReadFile(path) {
        return new Promise((resolve) => {
            fs.readFile(path, 'utf8', (error, data) => {
                if (!error) {
                    resolve(data);
                }
            });
        }
    );
}
promisifiedReadFile('a.txt')
    .then((data) => console.log(data))

function prf(path){
    return new Promise((resolve)=>{
        fs.readFile(path,'utf-8',function(err,data){
            resolve(data);
        });
    })
}
prf("a.txt").then((data)=>{
    console.log(data);
})

