document.querySelector('.menu-btns').addEventListener('pointerdown', function(e) {
    const menu = document.querySelector('.main-nav');
    if (e.target.classList.contains('open')) {
        this.dataset.open = 'open';
        menu.classList.add('show');
    } else {
        this.dataset.open = 'closed';
        menu.classList.remove('show');
    }
});