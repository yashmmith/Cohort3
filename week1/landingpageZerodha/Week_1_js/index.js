//The answers start from here.

let q1=()=>{
    const favcol=["Red","White","Black","Blue"];
    let age=18;
    const height="174.4 cm";
    console.log(favcol[0]);
    console.log(age);
    console.log(height);
}
//q1();



let q2=(a,b)=>{
   console.log(a+b);
}
//q2("5",10);




let q3=(age)=>{
    if (age>=18){
        console.log("Can Vote");
    }
    else{
        console.log("Cannot vote");
    }
}
//q3(18);




let q4=(no)=>{
    if(no%2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
//q4(21);




let q5=(no)=>{
    console.log(no*((no+1)/2));
}
//q5(10);




let q6=(object1)=>{
    console.log(`Hi ${object1.Name} is your house in ${object1.Area} ??`)
}
// q6({
//     Name:"Yashmmith",
//     Age:20,
//     Area:"DD colony"
// });



let q7=(arr1)=>{
    arr1.forEach((element) => {
        if (element.Age>=18){
            console.log(`Hi ${element.Name} You are Eligible to vote`)
        }
        else{
            console.log(`Hi ${element.Name} You are Not Eligible to vote`)
        }
    });
}
// q7([{
//     Name:"Yashmmith",
//     Age:20,
//     Area:"DD colony"
// },{
//     Name:"Nikki",
//     Age:16,
//     Area:"DD colony"  
// }]);





let q8=(arr1)=>{
    let arr2=arr1.filter((ele)=>{
        if (ele%2===0){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(arr2);
}
// q8([2,3,4,5,6]);




let q9=res=>{
    return res.age>18 && res.gender==="Male";
}
let q10=arr=>{
    let ans=arr.filter(q9);
    console.log(ans);
}

q10([{
    age:20,
    gender:"Male"
},{
    age:10,
    gender:"Male"
}]);


