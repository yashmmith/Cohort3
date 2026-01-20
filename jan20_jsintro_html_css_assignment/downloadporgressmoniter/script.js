let count=0;
let progress=document.querySelector(".progress-fill");
let percent=document.querySelector(".progress-text");
let status1=document.querySelector(".status-text");
let intv=setInterval(function(){
if (count<=99){
    count++;
    progress.style.width=`${count}%`
    percent.textContent=`${count}%`
}
else{
    status1.textContent="Downloaded";
    clearInterval(intv);
}
},5000/100)
