const swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    direction: 'horizontal',
    loop: true,
    centerSlide:'true',
    fade: 'true',
    grabCursor:'true',
    

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

