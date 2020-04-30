const selectElement= (element)=>{
    return document.querySelector(element)
};

let menuToggler= selectElement('.menu-toggle');
let body= selectElement('body');

menuToggler.addEventListener('click',()=>{
    body.classList.toggle('open');
})

//login button
var x= document.getElementById('pass')
var y= document.getElementById('driver')
var z= document.getElementById('btn')

function driver(){
    x.style.left="-40rem";
    y.style.left="5rem";
    z.style.left="11rem";
};
function passenger(){
    x.style.left="5rem";
    y.style.left="45rem";
    z.style.left="0";
};