// const navOpen = document.getElementById("nav-open");
// const navClose = document.getElementById("nav-close");
// const navMenu = document.getElementById("nav-menu");
// const navLinks = document.querySelectorAll(".nav-links");
// const overlay = document.querySelector(".overlay");

// let t1 = gsap.timeline({
//         paused: "true",
// });

// t1.to(".overlay",{
//         duration: 0.2,
//         opacity: 0.9,
//         PointerEvents: "auto",
//         ease: Expo.easeInOut,


// });

// t1.to(".nav-menu ",{
//         duration: 1,
//         opacity: 1,
//         x:0,
//         ease: Expo.easeInOut,


// });

// t1.fromTo(
//         ".nav-item",
//         {
//         y: "-100%",
//         opacity:0,

// },
// {
//         duration: 0.5,
//         opacity: 1,
//         y: "0%",
//         stagger: 0.25,
// }
// );


// t1.fromTo(
//         ".social-link, .email",
//         {
//         x: "-50%",
//         opacity:0,

// },
// {
//         duration: 0.8,
//         opacity: 1,
//         x: "0%",
//         ease: Expo.easeInOut,
// },
// "-=0.5"
// );



// navOpen.addEventListener('click', () => {
//         t1.play();
// });

// navClose.addEventListener('click', () => {
//         t1.reverse();
// });

// overlay.addEventListener('click', () => {
//         t1.play();
// });

// navLinks.forEach((e) => {
//         e.addEventListener('click', () => {
//                 t1.reverse();
//         });


// });

// // hide logo and switch

// function hideLogo() { 
//         const logo = document.querySelector(".logo");
//         const themeSwitch =  document.querySelector("theme-container");

//         if(this.scrollY >= 100) { 
//                 logo.classList.add("hide-logo");

//                 themeSwitch.classList.add("hide-logo");
//         } else{
//                 logo.classList.remove("hide-logo");
//                 themeSwitch.classList.remove("hide-logo");
//         }
// }

// window.addEventListener("scroll" , hideLogo);

$(document).ready(function(){
        $('#menu').click(function(){
                $(this).toggleClass('fa-times');
                $('header').toggleClass('toggle');
        });
        $(window).on('scroll load', function(){
                $('#menu').removeClass('fa-times');
                $('header').removeClass('toggle');

                if($(window).scrollTop()>0){
                        $('.top').show();
                }
                else{
                        $('.top').hide();
                }

        });


$('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
                scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
        });
});

