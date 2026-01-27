// async function getdata() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
//     let data= await  response.json();
//     console.log(data);
// }  

// getdata();

const myHeaders = new Headers();

myHeaders.append("Content-Type","application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const Options = {
    method:"POST",
    body:JSON.stringify({username:"Shivam Upadhyay" }),
    headers:myHeaders
};

async function getData(){
    const response=await fetch(url);
    let data=await response.json();
    console.log("Get data response: " , data);
}

async function postData() {
    const response = await fetch(url,Options);
    let data=await response.json();
    console.log("Post data response: " , data);
}
async function processData() {
    await postData();
    await getData();
}
processData();

