const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToogler= document.querySelector(".theme-toogler");

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})



//change theme
themeToogler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-varibles');

    themeToogler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToogler.querySelector('span:nth-child(2)').classList.toggle('active');
})