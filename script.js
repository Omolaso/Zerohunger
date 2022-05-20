const menuIcon = document.querySelector('#bars');
menuIcon.addEventListener('click', () => {
    const nav = document.querySelector('.nav1' , '.nav2');
    console.log(nav)
    nav.classList.toggle('.list');
})