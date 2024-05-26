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

// Kuliner Section
const KulinerNusantaraCarouselClassName = document.getElementsByClassName("swiper1")[0]
const KulinerNusantaraCarouselWrapperClassName = document.getElementsByClassName("swiper-wrapper")[0]
const KulinerNusantaraCarousel = new Swiper(KulinerNusantaraCarouselClassName,{
      slidesPerView: 2.5,
      spaceBetween: 30,
      mousewheel: {
        invert: false,
      },
      direction:'horizontal',
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

const itemsKulinerNusantara = [
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

const fragmentKulinerNusantara = document.createDocumentFragment();
function renderItemsKulinerNusantara() {
    itemsKulinerNusantara.forEach(item =>{
        const itemContent = document.createElement("div");
        itemContent.className = "swiper-slide";
        itemContent.classList.add("relative","h-96","rounded-xl","overflow-hidden","hover:h-[30rem]","group","transition-all","duration-300","w-96","ease-in-out")

        const childContent = document.createElement("div")
        childContent.classList.add("h-full","relative", "overflow-hidden","w-full","rounded-2xl")

        const image = document.createElement("img")
        image.className = "image-item";
        image.classList.add("h-96","group-hover:h-[30rem]","object-cover","rounded-2xl","w-full","transition-all","duration-300", "group-hover:scale-105","ease-in-out")
        image.src = item.image;
        image.alt = item.title;

        const overlayImage = document.createElement("div")
        overlayImage.classList.add("before:w-full","before:bg-gradient-to-b","from-transparent", "to-black","to-100%","before:z-20","before:h-full","before:absolute","before:left-0","before:rounded-2xl","w-full")

        const initials = document.createElement("div")
        initials.classList.add("flex","flex-col","justify-center","opacity-100","group-hover:opacity-0","absolute","z-30", "bottom-5", "transition-all","text-white","p-5")

        const initialText = document.createElement("h1")
        initialText.innerText = item.title;
        initialText.classList.add("text-3xl","font-semibold","font-dmsans")

        const initialDesc = document.createElement("p")
        initialDesc.innerText = item.desc;
        initialDesc.classList.add("truncate","w-96","text-xl","font-dmsans","font-light")

        const nestedContent = document.createElement("div")
        nestedContent.classList.add("flex","flex-row","justify-center","items-center","absolute", "bottom-0", "opacity-0","group-hover:bottom-14","group-hover:opacity-100","group-hover:z-30","transition-all","duration-500","ease-in-out","w-full")

        const nestedText = document.createElement("div")
        nestedText.classList.add("flex","flex-col","gap-y-3","text-white","relative", "font-dmsans")

        const h1 = document.createElement("h1");
        h1.className = "title-item";
        h1.innerText = item.title;
        h1.classList.add("group-hover:text-6xl","group-hover:font-bold","text-2xl","transition-all","font-bold","duration-300","w-40")

        const p = document.createElement("p")
        p.className = "desc"
        p.innerText = item.desc;
        p.classList.add("text-2xl","text-[#D9D9D9]","w-[25rem]")

        const button = document.createElement("button")
        button.innerHTML = "<svg width='25' class='m-auto'  height='28' viewBox='0 0 25 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24.6381 20.0875L22.7967 0.972266L3.67213 2.71444C3.47041 2.70614 3.26925 2.74127 3.08228 2.81747C2.89531 2.89367 2.7269 3.00915 2.58844 3.1561C2.44998 3.30304 2.34471 3.47802 2.27976 3.66918C2.2148 3.86035 2.19168 4.06324 2.21195 4.26411C2.23222 4.46499 2.29542 4.65917 2.39726 4.8335C2.49911 5.00783 2.63721 5.15825 2.80224 5.27456C2.96727 5.39088 3.15536 5.47038 3.35378 5.50768C3.55221 5.54498 3.75633 5.53922 3.95233 5.49078L18.2855 4.20763L1.0832 24.9674C0.844706 25.2552 0.73032 25.626 0.765195 25.9981C0.800069 26.3703 0.981353 26.7134 1.26916 26.9518C1.55698 27.1903 1.92774 27.3047 2.29989 27.2698C2.67205 27.235 3.0151 27.0537 3.25359 26.7659L20.4558 6.00609L21.858 20.3281C21.8943 20.7003 22.0769 21.0429 22.3657 21.2805C22.6545 21.5181 23.0259 21.6312 23.3981 21.595C23.7703 21.5588 24.1129 21.3762 24.3505 21.0874C24.5881 20.7986 24.7013 20.4272 24.6651 20.055L24.6381 20.0875Z' fill='white'/> </svg>"
        button.classList.add("w-24","h-24","border","border-white","rounded-full","backdrop-blur-lg","group-hover:backdrop-blur-2xl")

        nestedText.appendChild(h1)
        nestedText.appendChild(p)
        overlayImage.appendChild(image)
        childContent.appendChild(overlayImage);
        nestedContent.appendChild(nestedText)
        nestedContent.appendChild(button)
        childContent.appendChild(nestedContent);
        initials.appendChild(initialText)
        initials.appendChild(initialDesc)
        childContent.appendChild(initials)
        itemContent.appendChild(childContent);
        fragmentKulinerNusantara.appendChild(itemContent);
        //console.log(fragmentKulinerNusantara.appendChild(itemContent))

    })
    KulinerNusantaraCarouselWrapperClassName.innerHTML = ''
    KulinerNusantaraCarouselWrapperClassName.appendChild(fragmentKulinerNusantara)
    KulinerNusantaraCarouselClassName.innerHTML = ''
    KulinerNusantaraCarouselClassName.append(KulinerNusantaraCarouselWrapperClassName);
    //console.log(KulinerNusantaraCarouselClassName.append(KulinerNusantaraCarouselWrapperClassName))
}
renderItemsKulinerNusantara();



// Kisah Inspiratif
 const KisahInspiratifCarouselClassName = document.getElementsByClassName('swiper2')[0]
 const KisahInspiratifCarouselWrapperClassName = document.getElementsByClassName("swiper-wrapper")[1]
 const KisahInspiratifCarouselNext = document.getElementsByClassName("swiper-button-next")[0]
 const KisahInspiratifCarouselPrev = document.getElementsByClassName("swiper-button-prev")[0]
 const KisahInspiratifCarousel = new Swiper(KisahInspiratifCarouselClassName,{
    slidesPerView: 1,
    spaceBetween: 30,
    direction:'horizontal',
    mousewheel: {
      invert: false,
    },
    breakpoints: {
      640: {
          slidesPerView: 1
      },
      1024: {
          slidesPerView: 1
      },
    },
    navigation: {
      nextEl:KisahInspiratifCarouselNext,
      prevEl:KisahInspiratifCarouselPrev
    },
 });
const itemsKisahInspiratif = [
    {
        id:1,
        title:"Pawai Budaya Siswa SD se-Kecamatan Karimun",
        desc:"Dalam peringatan Hari Sumpah Pemuda ke-95, siswa SD se-Kecamatan Karimun memukau dengan pawai budaya yang meriah. Dengan penuh semangat, mereka mengenakan pakaian adat daerah dan menampilkan atraksi yang memukau di hadapan Bupati Aunur Rafiq dan para penyaksi. Bupati pun mengajak mereka untuk memaknai peringatan ini sebagai bentuk cinta kepada NKRI dan semangat membangun Kabupaten Karimun yang terus berkembang.",
        image:"../../../Asset/upacara.jpg"
    },
    {
        id:2,
        title:"Pawai Budaya Siswa SD se-Kecamatan Karimun",
        desc:"Dalam peringatan Hari Sumpah Pemuda ke-95, siswa SD se-Kecamatan Karimun memukau dengan pawai budaya yang meriah. Dengan penuh semangat, mereka mengenakan pakaian adat daerah dan menampilkan atraksi yang memukau di hadapan Bupati Aunur Rafiq dan para penyaksi. Bupati pun mengajak mereka untuk memaknai peringatan ini sebagai bentuk cinta kepada NKRI dan semangat membangun Kabupaten Karimun yang terus berkembang.",
        image:"../../../Asset/upacara.jpg"
    },
    {
        id:3,
        title:"Pawai Budaya Siswa SD se-Kecamatan Karimun",
        desc:"Dalam peringatan Hari Sumpah Pemuda ke-95, siswa SD se-Kecamatan Karimun memukau dengan pawai budaya yang meriah. Dengan penuh semangat, mereka mengenakan pakaian adat daerah dan menampilkan atraksi yang memukau di hadapan Bupati Aunur Rafiq dan para penyaksi. Bupati pun mengajak mereka untuk memaknai peringatan ini sebagai bentuk cinta kepada NKRI dan semangat membangun Kabupaten Karimun yang terus berkembang.",
        image:"../../../Asset/upacara.jpg"
    }
]
const fragmentKisahInspiratif = document.createDocumentFragment();
function renderItemsKisahInspiratif() {
    itemsKisahInspiratif.forEach(item => {
        const itemContentKisahInspiratif = document.createElement("div");
        itemContentKisahInspiratif.className = "swiper-slide"
        itemContentKisahInspiratif.classList.add("relative","h-96","rounded-xl","overflow-hidden",)

        const content = document.createElement("div");
        content.id = "kisahInspiratifContent"
        content.classList.add("flex","flex-row","h-full","px-52","items-center","gap-x-10")

        const contentText = document.createElement("div");
        contentText.classList.add("flex","flex-col","gap-10")

        const a = document.createElement("a")
        a.href = "#"
        a.innerText = "Load More"
        a.classList.add("bg-[#B7351F]","w-40","flex","flex-row","justify-center","p-3","rounded-full","text-[#FFEDC6]","font-bold","font-dmsans","shadow-lg")

        const title = document.createElement("h1");
        title.innerText = item.title
        title.classList.add("text-4xl","w-[25rem]","font-dmsans","font-medium")

        const desc = document.createElement("p");
        desc.innerText = item.desc
        desc.classList.add("text-xl","line-clamp-5","font-light","w-[30rem]","font-dmsans")

        const image = document.createElement("img");
        image.src = item.image
        image.classList.add("h-full","w-[50rem]","rounded-2xl","object-cover")

        contentText.appendChild(title)
        contentText.appendChild(desc)
        contentText.appendChild(a)
        content.appendChild(image)
        content.appendChild(contentText)
        itemContentKisahInspiratif.appendChild(content)
        fragmentKisahInspiratif.appendChild(itemContentKisahInspiratif)
    })
    KisahInspiratifCarousel.innerHTML = ""
    KisahInspiratifCarouselWrapperClassName.appendChild(fragmentKisahInspiratif)
    KisahInspiratifCarouselClassName.append(KisahInspiratifCarouselWrapperClassName)
}
renderItemsKisahInspiratif()
