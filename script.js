const menu = document.querySelector('.nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

console.log(close);
open.addEventListener('click',()=>{
    menu.classList.add("show");
    close.style.display = 'inline-block';
    open.style.display = 'none';
})
close.addEventListener('click', ()=>{
    menu.classList.remove("show");
    open.style.display = 'inline-block';
    close.style.display = 'none';
})

