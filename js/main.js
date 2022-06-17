const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const galleryImage = document.querySelectorAll('.gallery-image');

let heroIndex = 2;

const changeHeroSectionBg = () => {
    if (heroIndex > 3) heroIndex = 1;
    heroSection.style.background = `url('assets/images/hero-${heroIndex}.jpg') no-repeat`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center 80%';
    heroSection.style.transition = '0.3s ease-in-out';
    heroIndex++;
};

setInterval(() => {
    setTimeout(() => {
        changeHeroSectionBg();
    }, 2000);
}, 2000);

const stickyNavbar = () => {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
    navbar.classList.toggle('shadow', window.pageYOffset > 0);
};

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);

galleryImage.forEach((image, index) => {
    image.dataset.fancybox = 'gallery';
    image.dataset.aos = 'fade-up';
    image.dataset.aosDelay = index * 300 + 300;
});

AOS.init({
    once: true,
    duration: 1000,
});
