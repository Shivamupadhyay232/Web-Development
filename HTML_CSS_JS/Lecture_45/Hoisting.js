// sayName('Shivam');  
// function sayName(name){
//     console.log(name);
// } 

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans =solve(10);

// let finalans=ans(20);
// console.log(finalans);

const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a-b;
    }
];
let first=arr[0];
let ans=first(10,5);
console.log(ans);