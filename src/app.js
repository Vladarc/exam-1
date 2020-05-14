const BODY = document.body;

const toggler = (e) => {
    e.preventDefault();
    BODY.classList.toggle('opened');
}

const addListenerForMobileMenuLinks = () => {
 const navMenu = document.querySelector('.nav__menu');
    if(window.innerWidth <= 992) {
        navMenu.addEventListener('click',event =>{
            let cureLink = event.target.classList.contains('nav__link');
                cureLink ? BODY.classList.remove('opened') : null;
        });
    }
}



window.addEventListener('resize',addListenerForMobileMenuLinks);
addListenerForMobileMenuLinks();



