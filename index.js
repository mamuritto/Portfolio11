var menuButton = document.querySelector(".header-menu__button");
menuButton.addEventListener('click', function(){
    console.log("Click button");
    document.querySelector(".header-nav__list").classList.toggle('header-nav__list__mobile');document.querySelector("body").classList.toggle('lock');
})