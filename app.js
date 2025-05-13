let nav = $(".navbar-mob ul");
let navbar = $(".navbar");
let navLinks = $(".navbar ul li a");
let btnMenu = $(".btn-menu");
let Fh1 = $(".home-content h1");
let btn = $(".btn-menu");
var x = false;

nav.hide();
Fh1.css('opacity','0');
navLinks.css('opacity','0');
btnMenu.css('opacity','0');
setTimeout(()=>{
    Fh1.css('opacity','1');
    Fh1.css('transform','translateY(-40px)');
},5000)

setTimeout(()=>{
    navLinks.css('opacity','1')
    btnMenu.css('opacity','1')
},4000)

window.addEventListener("scroll", function() {
    if (window.scrollY < 2) {
        navbar.css('backgroundColor','transparent')
    }
    if (window.scrollY > 40) {
        navbar.css('backgroundColor', '#05121b');  
        navbar.css('z-index', '100');  
        // navbar.css('backgroundColor', 'rgba(67, 95, 116, 0.5)');  
    }
});



btn.on('click', function(){
    x = !x;
    if(x){
        btn.html(`<ion-icon name="close-outline"></ion-icon>`);
        nav.slideDown('slow');
    }else{
        btn.html(`<ion-icon name="menu-outline"></ion-icon>`);
        nav.slideUp('slow');
    }

});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: only animate once
    }
  });
}, {
  threshold: 0.3 // 10% of the element is visible
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
