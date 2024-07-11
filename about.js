let button = document.querySelector('.navbarbtn');
let navbar = document.querySelector('.navbar');
let lastbtn = document.querySelector('.lastbtn');
let logo = document.querySelector('.logo');
let header = document.querySelector('.header');

button.addEventListener('click', ()=>{
    button.classList.toggle('active');
    navbar.classList.toggle('active');
})


var typed = new Typed(".typing",{
    strings:["","Web Designer", "Graphic Designer","Web Developer", "Coder"],
    typeSpeed:200,
    BackSpeed:70,
    loop:true
})

let text = document.querySelector('.typing')

text.style.color = 'rgb(128, 207, 253)';
