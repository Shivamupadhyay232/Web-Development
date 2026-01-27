let arr=[1,2,3,5,6];
console.log(arr);

let brr = new Array('Shivam',1,true);
console.log(brr);
brr.push('Motu');
brr.push(100);
brr.splice(0,0,'Shiva');
console.log(brr);

arr.map((number,index)=>{
    console.log(number+1," ",index);
    
})

let ansArray=arr.map((number)=>{
    return number*number;
})
console.log(ansArray);

let arr1=[10,10,45,21,60,21];

let evenArray=arr1.filter((number)=>{
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(evenArray);
let arr2=[1,'Shivam','Upadhyay',true];

let ans=arr2.filter((value)=>{
    if(typeof(value)==='string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);

let arr3=[10,20,30,40];

let ans2=arr3.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(ans2);

arr.forEach((value,index)=>{
    console.log("Number:",value, "Index:",index);
})

for(let value of arr){
    console.log(value);
}