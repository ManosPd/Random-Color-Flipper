'use strict';


let btn=document.getElementById('btn');
let change=document.querySelector('#color');

btn.addEventListener('click', ()=>{
   randomNumber();
   change.innerText = document.body.style.backgroundColor = randomNumber();
});

function randomNumber(){
   let r = Math.floor(256*Math.random());
   let g = Math.floor(256*Math.random());
   let b = Math.floor(256*Math.random());
   return `rgba(${r}, ${g}, ${b}, 0.4)`;
}
