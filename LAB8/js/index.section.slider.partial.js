const slidesFirst = [
    `<div class="slide"><img src=".../img/first/baby-yoda.svg" alt="Baby Yoda"></div>`,
    `<div class="slide"><img src=".../img/first/banana.svg" alt="Girl"></div>`,
    `<div class="slide"><img src=".../img/first/girl.svg" alt="Girl"></div>`,
    `<div class="slide"><img src=".../img/first/viking.svg" alt="Viking"></div>`,
];

const slidesSecond = [
    `<div class="slide"><img src="../img/second/book.png" alt="book"></div>`,
    `<div class="slide"><img src="../img/second/electronic.png" alt="electronik"></div>`,
    `<div class="slide"><img src="../img/second/foods.png" alt="foods"></div>`,
    `<div class="slide"><img src="../img/second/things.png" alt="things"></div>`,
];

let currentSlideIdx = 0;
const slideContainer = document.querySelector('.products-carousel__slides');
const indicators = document.querySelectorAll('.indicator');

function renderSlide() {
    if (window.matchMedia('(min-width:768px)').matches) {
      

        slideContainer.innerHTML = slidesFirst[currentSlideIdx];
            
        const secondSlideIdx = currentSlideIdx + 1 >= slidesFirst.length ? 0 : currentSlideIdx + 1;
        slideContainer.classList.add("slide");
        slideContainer.innerHTML += slidesFirst[secondSlideIdx];
    
        const thirdSlideIdx = secondSlideIdx + 1 >= slidesFirst.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slidesFirst[thirdSlideIdx];
     
      
        
    }
    else if(window.matchMedia('(max-width:768px)').matches){
       
        slideContainer.innerHTML = slidesSecond[currentSlideIdx];
            
        const secondSlideIdx = currentSlideIdx + 1 >= slidesSecond.length ? 0 : currentSlideIdx + 1;
        slideContainer.classList.add("slide");
        slideContainer.innerHTML += slidesSecond[secondSlideIdx];
    
        const thirdSlideIdx = secondSlideIdx + 1 >= slidesSecond.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slidesSecond[thirdSlideIdx];
    }

    indicators.forEach((indicator, index) => {
        indicator.checked = index === currentSlideIdx;
    });

}

function nextSlide() {
    const slides = window.matchMedia('(min-width:768px)').matches ? slidesFirst : slidesSecond;
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    renderSlide();
}

function prevSlide() {
    const slides = window.matchMedia('(min-width:768px)').matches ? slidesFirst : slidesSecond;
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    renderSlide();
}

function goToSlide(index) {
    currentSlideIdx = index;
    renderSlide();
}

indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'), 10) - 1; 
        goToSlide(slideIndex);
    });
});

const btnPrev = document.querySelector('.product-carousel__btn-prev');
const btnNext = document.querySelector('.product-carousel__btn-next');

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

window.addEventListener('resize', renderSlide);

renderSlide();
