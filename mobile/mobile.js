const toggleMenuBtn = document.getElementById('toggle-menu-btn')

toggleMenuBtn.addEventListener('click', () => {
    const menu = document.querySelector('menu');
    const btns = document.querySelectorAll('.btn');

    menu.classList.toggle('active');

    btns.forEach((btn) => {
        btn.classList.toggle('active');
    });
});