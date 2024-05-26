import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
const KulinerNusantaraCarousel = new Swiper(".swiper1",{
    slidesPerView: 2.5,
    spaceBetween: 30,
    direction:"horizontal",
    slidesOffsetAfter: 210,
    slidesOffsetBefore: 210,
    breakpoints: {
        640: {
            slidesPerView:2.5
        },
        1024: {
            slidesPerView: 2.5
        },
    },
});

// Kisah Inspiratif
const KisahInspiratifCarouselClassName = document.getElementsByClassName('swiper2')[0]
const KisahInspiratifCarouselNext = document.getElementsByClassName("swiper-button-next")[0]
const KisahInspiratifCarouselPrev = document.getElementsByClassName("swiper-button-prev")[0]
const KisahInspiratifCarousel = new Swiper(KisahInspiratifCarouselClassName,{
   slidesPerView: 1,
   spaceBetween: 30,
   direction:'horizontal',
   breakpoints: {
     640: {
         slidesPerView: 1
     },
     1024: {
         slidesPerView: 1
     },
   },
   slidesOffsetAfter: 210,
   slidesOffsetBefore: 210,
   navigation: {
     nextEl:KisahInspiratifCarouselNext,
     prevEl:KisahInspiratifCarouselPrev
   },
});