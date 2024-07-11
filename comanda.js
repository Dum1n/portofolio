let button = document.querySelector('.navbarbtn');
let navbar = document.querySelector('.navbar');
let lastbtn = document.querySelector('.lastbtn');
let logo = document.querySelector('.logo');
let header = document.querySelector('.header');

button.addEventListener('click', ()=>{
    button.classList.toggle('active');
    navbar.classList.toggle('active');
})

function SendMail(){
    var params = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_portofolio", "template_ntcf5tu", params).then(function(res){
        alert("Mesajul a fost trimis cu succes!");
    });
}