document.addEventListener("alpine:init",()=>{
    Alpine.data('stickyNavbar',()=>({
        hideNavbar:false,
        lastScrollTop:0,
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            this.hideNavbar = scrollTop > this.lastScrollTop;
            this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            if(this.lastScrollTop > 10){
                document.getElementById("header").classList.add("shadow-md")
            }else{
                document.getElementById("header").classList.remove("shadow-md")
            }
        }
    }))
})

function isMobile() {
    const desktop = document.getElementById("desktop");
    const mobile = document.getElementById("mobile")
    if (navigator.maxTouchPoints > 0 && /Android|iPhone/i.test(navigator.userAgent)) {
        desktop.classList.add("hidden")
        mobile.classList.remove("hidden")
    } else {
        desktop.classList.remove("hidden")
        mobile.classList.add("hidden")
    }
}
isMobile()

function isReload(){
    return window.location.reload()
}

 // swiper for Rekomendasi Warung
const KulinerNusantaraCarousel = document.getElementById('kuliner-nusantara')
// swiper parameters
const KulinerNusantaraCarouselParams = {
      slidesPerView: 2.5,
      spaceBetween: 30,
      breakpoints: {
        640: {
            slidesPerView:1
        },
        1024: {
            slidesPerView: 2.5
        },
      },
      on: {
        init() {
          // ...
        },
      },
};
// now we need to assign all parameters to Swiper element
Object.assign(KulinerNusantaraCarousel, KulinerNusantaraCarouselParams);
// and now initialize it
KulinerNusantaraCarousel.initialize();
