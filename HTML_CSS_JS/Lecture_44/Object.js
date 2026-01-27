let obj={
    name:"Shivam",
    age:21,
    greet:function(){
        console.log("Hello , to kaise hai aaplog");
    }
}
console.log(obj);
obj.greet();

for(let key in obj){
    console.log(key," ",obj[key]);
}