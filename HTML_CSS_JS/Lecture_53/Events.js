
// function changeText(event){
//     console.log(event);   
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="My name is Shivam"
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);  
// let anchorElement=document.getElementById('fanchor');

// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent='Click Done Bhai';
// });

// let paras=document.querySelectorAll('p');

function alertPara(event){
        if(event.target.nodeName==='SPAN'){
            alert("You have clicked on para: "+ event.target.textContent);
        }
    }

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);
// }

let fdiv=document.querySelector('wrapper');

document.addEventListener('click',alertPara);