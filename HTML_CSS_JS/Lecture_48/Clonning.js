console.log(" Shivam");
let obj={
    age:21,
    wt:68,
    ht:180
};
// 1st method->Spread Operator
// let dest={...obj};

// 2nd Method->Assign 
// let dest=Object.assign({},obj);
let dest={};
//3rd method->Iteration
for(let key in obj){
    let newKey=key;
    let newValue=obj[key];
    dest[newKey]=newValue;
}
obj.age=100;
console.log("Source:",obj," ","Destination:",dest);