//navbar-fixed
window.onscroll = function name(params) {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}


//hamburger
const hamburger = document.querySelector('#hamburger')
const navmenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function name(params) {
    hamburger.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
})
