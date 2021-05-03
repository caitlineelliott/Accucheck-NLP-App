document.addEventListener('DOMContentLoaded', function () {
    const hamIcon = document.querySelector('.hamburger-icon');
    const closeBtn = document.querySelector('.close-btn');

    // active nav bar
    hamIcon.addEventListener('click', activeNav);

    //inactive nav
    closeBtn.addEventListener('click', restingNav);
});

const restingNav = () => {
    document.querySelector('.close-btn').classList.add('hamburger-none');
    document.querySelector('nav').classList.add('nav');
    document.querySelector('nav').classList.remove('mobile-nav');
    document.querySelector('.close-btn').classList.remove('close-btn-active');
    document.querySelector('.nav-list').innerHTML = '';
    document.querySelector('.hamburger-icon').classList.remove('hamburger-none');
};

const activeNav = () => {
    document.querySelector('.hamburger-icon').classList.add('hamburger-none');
    const navItems = document.getElementsByClassName('nav-links');
    document.querySelector('.nav-list').innerHTML =
        `${navItems[0].outerHTML}<br>
        ${navItems[1].outerHTML}<br>
        ${navItems[2].outerHTML}<br>
        ${navItems[3].outerHTML}<br>`;

    document.querySelector('nav').classList.add('mobile-nav');
    document.querySelector('nav').classList.remove('nav');
    document.querySelector('.close-btn').classList.add('close-btn-active');
    document.querySelector('.nav-list').addEventListener('click', restingNav);
};

export { restingNav }
export { activeNav }