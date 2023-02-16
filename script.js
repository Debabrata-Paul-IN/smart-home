
/** Open and close nav menu for mobile devices */

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav_items');


menuBtn.addEventListener("click", ()=>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})


/** Faq answer opening closing */



const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})


/*** Navbar background style */

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})