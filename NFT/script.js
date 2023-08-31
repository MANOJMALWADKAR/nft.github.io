const barIcon = document.querySelector('.bar-icon');
const sideMenuContent = document.querySelector('.sidemenu-content');
const opacity = document.querySelector('.opacity')
const sideMenu = document.querySelector('.sidemenu')
const cross = document.querySelector('.logo i')
const sliderNft = document.querySelectorAll('.slider-nft')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

barIcon.addEventListener('click', () => {
    sideMenu.style.display = 'flex'
    sideMenuContent.style.right = 0
})

opacity.addEventListener('click', (e) => {
    sideMenu.style.display = 'none'
})

cross.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

var swiper = new Swiper('.swiper', {

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    }
});