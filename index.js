let searchBtn=document.querySelector('#search-btn');
let searchbar=document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let vediobtn = document.querySelectorAll('.vid-btn');



window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
     });



searchBtn.addEventListener('click',()=>{
searchBtn.classList.toggle('fa-times');
searchbar.classList.toggle('active');
});




formBtn.addEventListener('click',()=>{
  
    loginform.classList.add('active');
    
});

formClose.addEventListener('click',()=>{
   
    loginform.classList.remove('active');
    
});

vediobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#vedio-slider').src=src;
    });
});

// var swiper = new Swiper(".swiper-slide", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });


// const swiper = new Swiper(".mySwiper", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
// });

