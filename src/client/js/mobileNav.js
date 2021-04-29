document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.hamburger-icon');
    const closeBtn = document.querySelector('.close-btn');
    hamIcon.addEventListener('click', activeNav);
});

const restingNav = () => {
    hamIcon.classList.remove('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    closeBtn.classList.remove('close-btn-active');
    document.querySelector('.nav-list').innerHTML = '';
};

const activeNav = () => {
    hamIcon.classList.add('hamburger-none');

    const navItems = document.getElementsByClassName('nav-links');
    document.querySelector('.nav-list').innerHTML =
        `${navItems[0].outerHTML}<br>
        ${navItems[1].outerHTML}<br>
        ${navItems[2].outerHTML}<br>
        ${navItems[3].outerHTML}<br>`;

    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    closeBtn.classList.add('close-btn-active');
    closeBtn.addEventListener('click', restingNav);
    document.querySelector('.nav-list').addEventListener('click', restingNav);
};

export { restingNav }
export { activeNav }