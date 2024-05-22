
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
      mousewheel: {
        invert: true,
      },
      slidesOffsetAfter: 210,
      slidesOffsetBefore: 210,
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

const items = [
    {
        id:1,
        title: "Masakan Tradisonal",
        desc: "Jelajahi inovasi dalam kuliner Indonesia yang modern. Temukan sajian yang memadukan cita rasa tradisional dengan sentuhan kontemporer, seperti Ayam Geprek, Bakso Aci, Seblak, dll.",
        image: "../../../Asset/sate.jpg"
    },
    {
        id:2,
        title: "Kreasi Kuliner Modern",
        desc: "Jelajahi inovasi dalam kuliner Indonesia yang modern. Temukan sajian yang memadukan cita rasa tradisional dengan sentuhan kontemporer, seperti Ayam Geprek, Bakso Aci, Seblak, dll.",
        image: "../../../Asset/nasi.jpg"
    },
    {
        id:3,
        title: "Tempat Makan",
        desc: "Jelajahi inovasi dalam kuliner Indonesia yang modern. Temukan sajian yang memadukan cita rasa tradisional dengan sentuhan kontemporer, seperti Ayam Geprek, Bakso Aci, Seblak, dll.",
        image: "../../../Asset/warung.jpg"
    }
];

const fragment = document.createDocumentFragment();
function renderItems() {
    items.forEach(item =>{
        const itemContent = document.createElement("swiper-slide");
        itemContent.className = "item";
        itemContent.classList.add("relative","h-96","rounded-xl","overflow-hidden","hover:h-[30rem]","group","transition-all","duration-300")

        const childContent = document.createElement("div")
        childContent.classList.add("h-full","relative","w-full", "overflow-hidden")

        const image = document.createElement("img")
        image.className = "image-item";
        image.classList.add("h-96","group-hover:h-[30rem]","object-cover","rounded-xl","w-full","transition-all","duration-300", "group-hover:scale-105")
        image.src = item.image;
        image.alt = item.title;

        const overlayImage = document.createElement("div")
        overlayImage.classList.add("before:w-full","before:bg-gradient-to-b","from-transparent", "to-black","to-100%","before:z-20","before:h-full","before:absolute","before:left-0","before:rounded-2xl")

        const initialText = document.createElement("h1")
        initialText.innerText = item.title;
        initialText.classList.add("opacity-100","group-hover:opacity-0","absolute","group-hover:-z-30","z-30", "bottom-5", "transition-all","text-white","p-5","text-2xl","font-bold")

        const nestedText = document.createElement("div")
        nestedText.classList.add("flex","flex-col", "absolute", "bottom-0", "gap-y-3","p-5","text-white","relative","group-hover:bottom-44","transition-all","duration-300","opacity-0","group-hover:opacity-100","group-hover:z-30")

        const h1 = document.createElement("h1");
        h1.className = "title-item";
        h1.innerText = item.title;
        h1.classList.add("group-hover:text-3xl","group-hover:font-bold","text-2xl","transition-all","font-bold","duration-300")

        const p = document.createElement("p")
        p.className = "desc"
        p.innerText = item.desc;

        nestedText.appendChild(h1)
        nestedText.appendChild(p)
        overlayImage.appendChild(image)
        childContent.appendChild(overlayImage);
        childContent.appendChild(nestedText);
        childContent.appendChild(initialText)
        itemContent.appendChild(childContent);
        fragment.appendChild(itemContent);

    })
    KulinerNusantaraCarousel.innerHTML = ''
    KulinerNusantaraCarousel.appendChild(fragment);
}
renderItems();
