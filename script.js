//mobile menu 
const bars = document.getElementById('bars');
const cancel = document.getElementById('cancel');
const mobileMenu = document.querySelector('.mobile-menu');

bars.addEventListener("click", ()=>{
    mobileMenu.style.width ="100%"
});

cancel.addEventListener("click", ()=>{
    mobileMenu.style.width = "0"
});
