let button = document.querySelector('.navbarbtn');
let navbar = document.querySelector('.navbar');
let image = document.querySelector('img');
let h1 = document.querySelector('.body h1');
let div1 = document.querySelector('.div1');
let lastbtn = document.querySelector('.lastbtn');
let logo = document.querySelector('.logo');
let section = document.querySelector('.section1');
let header = document.querySelector('.header');

let linkforbutton = document.querySelector('.button a');
let arrow = document.querySelector('.button .fa-solid');


let links = document.querySelectorAll('.divprincipale a');
let imageindivs = document.querySelectorAll('.upper .image img');
button.addEventListener('click', ()=>{
    button.classList.toggle('active');
    navbar.classList.toggle('active');
})



links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('active');
        let image = link.querySelector('.image');
        if (image) {
            image.classList.add('active');
        }
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('active');
        let image = link.querySelector('.image');
        if (image) {
            image.classList.remove('active');
        }
    });
});


linkforbutton.addEventListener('mouseover', () => {
    linkforbutton.classList.add('active');
    arrow.classList.add('active');
});

linkforbutton.addEventListener('mouseout', () => {
    linkforbutton.classList.remove('active');
    arrow.classList.remove('active');
});


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    image.style.top = value * -0.1 + 'px';
    h1.style.top = value * -0.05 + 'px';
    image.style.transform = 'rotate(' + (0.0001- (value * 0.05)) + 'deg)';
});

if (window.innerWidth > 890) {
    
    window.addEventListener('scroll', function(){
        section.style.transform = 'rotate(5deg)';
    let value = window.scrollY;
    image.style.top = value * -0.1 + 'px';
    image.style.transform = 'rotate(' + (0.0001- (value * 0.05)) + 'deg)';
    h1.style.top = value * -0.05 + 'px';
    section.style.transform = 'rotate(' + (5- (value * 0.00384615384)) + 'deg)';
    section.style.width =   50 + (value * 0.038) + '%';
    console.log(value);

    if (window.scrollY >= 1300) {
        section.style.transform = 'rotate(0deg)';
        section.style.width = '100%';
    }
    
    if (window.scrollY >= 1240) {
        button.classList.add('scrolled');
        navbar.classList.add('scrolled');
        h1.classList.add('scrolled');
        lastbtn.classList.add('scrolled');
        logo.classList.add('scrolled');
        header.classList.add('scrolled');
    } else if(window.scrollY < 1240){
        button.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
        h1.classList.remove('scrolled');
        lastbtn.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        header.classList.remove('scrolled');
    }
});
}

if (window.innerWidth < 890) {
    window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
    if (window.scrollY >= 1240) {
        button.classList.add('scrolled');
        navbar.classList.add('scrolled');
        h1.classList.add('scrolled');
        lastbtn.classList.add('scrolled');
        logo.classList.add('scrolled');
        header.classList.add('scrolled');
    } else if(window.scrollY < 1240){
        button.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
        h1.classList.remove('scrolled');
        lastbtn.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        header.classList.remove('scrolled');
    }
    })
}




