//Easy
function is_anagram(str1,str2){
    if (str1.length!=str2.length) return false;
    const str11=str1.toLowerCase().split("").sort().join("");
    const str22=str2.toLowerCase().split("").sort().join("");
    if (str11===str22){
        return true;
    }
    else{
        return false;
    }
}
// console.log(is_anagram("Helo","leho"));





function calculateTotalSpentByCategory(transactions){
  let totalSpentByCategory = [];
  for(let i=0; i<transactions.length; i++){
      const category = totalSpentByCategory.find(item => item.category === transactions[i].category);

      if (category){
          category.totalSpent += transactions[i].price;
      }
      else{
          totalSpentByCategory.push({
              category: transactions[i].category,
              totalSpent: transactions[i].price
          });
      }
  }
  return totalSpentByCategory;
}





function le(arr1){
    let ans=arr1[0];
    for(let i=1;i<arr1.length;i++){
        if (arr1[i]>ans){
            ans=arr1[i];
        }
    }
    return ans;
}
// console.log(le([1,2,3,4,5]));





//medium
function count_vowels(string1){
    let arr1=string1.split('');
    let ctr=0;
    let vovels=["a","e","i","o","u"];
    arr1.forEach(element => {
        if (vovels.includes(element)===true){
            ctr++;
        }
    });
    console.log("Hello");
    return ctr;
}
// console.log(count_vowels("Hello"));




function palindrome(string1){
    return string1.split("").reverse().join("")===string1;
}
// console.log(palindrome("amma"));


function calct(no){
    const date1=new Date;
    sum1=0;
    for(let i=1;i<=no;i++){
        sum1++;
    }
    const date2=new Date;
    return date2-date1;
}
// console.log(calct(10000000));





//Hard
class Calc1{
    constructor(ele1,ele2){
        this.ele1=ele1;
        this.ele2=ele2;
    }
    add(){
        return this.ele1+this.ele2;
    }
    sub(){
        return this.ele1-this.ele2;
    }
    mul(){
        return this.ele1*this.ele2;
    }
    div(){
        return this.ele1/this.ele2;
    }
}
// let a=new Calc1(2,3);
// console.log(a.add());
