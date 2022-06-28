const dropdownBtns = document.querySelectorAll('button.dropdown');

dropdownBtns.forEach((dropdownBtn) => {
    dropdownBtn.addEventListener('click', () => {
        const dropdown = dropdownBtn.parentElement;
        const nav = dropdownBtn.nextElementSibling;
        dropdown.classList.toggle('active');
        nav.classList.toggle('active');
    });
});