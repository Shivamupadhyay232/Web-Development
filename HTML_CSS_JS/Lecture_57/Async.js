async function getData() {
    setTimeout(function(){
        console.log("I am inside set Tiimeout Block");
    },3000);
}

let output = getData();