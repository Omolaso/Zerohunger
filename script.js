const menuIcon = document.querySelector('#bars');
menuIcon.addEventListener('click', () => {
   const nav = document.querySelectorAll('#nav');
   nav.forEach(nav => {
        nav.classList.toggle('list');
   });
});

