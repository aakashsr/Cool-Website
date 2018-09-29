const iconLink = document.querySelector('.mobile-nav-icon');
const navBar = document.getElementsByClassName('nav-bar')[0];
const icon = document.querySelector('.mobile-nav-icon i');
const mqFirst = window.matchMedia("(min-width: 767px)");
const mqSecond = window.matchMedia("(min-width: 1024px)");


iconLink.addEventListener('click', () => {

    if (navBar.style.display === 'inline-block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'inline-block';
        navBar.style.width = '50%';
        navBar.style.marginTop = 0;
        navBar.style.paddingRight = '1.75em';
    }

    if (icon.classList.contains('ion-md-menu')) {
        icon.classList.add('ion-md-close');
        icon.classList.remove('ion-md-menu');
    } else {
        icon.classList.add('ion-md-menu');
        icon.classList.remove('ion-md-close');
    }

});









// $('.mobile-nav-icon').click(function () {
//     const nav = $('.nav-bar');
//     const icon = $('mobile-nav-icon');

//     nav.slideToggle(200);

//     if (icon.hasClass('ion-md-menu')) {
//         icon.addClass('ion-md-close');
//         icon.removeClass('ion-md-menu');
//     } else {
//         icon.addClass('ion-md-menu');
//         icon.removeClass('ion-md-close');
//     }
// });