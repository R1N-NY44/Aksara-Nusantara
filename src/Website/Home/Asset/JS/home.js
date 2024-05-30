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

document.addEventListener("alpine:init",()=>{
    Alpine.data("itemsList",()=>({
        itemsKulinerNusantara:[
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
        ],
        itemsKisahInspiratif: [
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
        ],
        itemsFooterOptions1: [
            {
                id:1,
                title:"Beranda",
                url:"/beranda"
            },
            {
                id:2,
                title:"Galeri Budaya",
                url:"/galeri_budaya"
            },
            {
                id:3,
                title:"Kuliner Nusantara",
                url:"/kuliner_nusantara"
            },
            {
                id:4,
                title:"Kisah & Rencana",
                url:"/kisah_rencana"
            },
        ],
        itemsFooterOptions2: [
            {
                id:1,
                title:"Newsletter",
                url:"/newsletter"
            },
            {
                id:2,
                title:"Podcast",
                url:"/podcast"
            },
            {
                id:3,
                title:"Press",
                url:"/press"
            },
            {
                id:4,
                icons:[
                    "../../../Asset/twitter.svg",
                    "../../../Asset/instagram.svg",
                    "../../../Asset/linkedin.svg"
                ]
            }
        ]
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

document.addEventListener('DOMContentLoaded',()=>{
    gsap.registerPlugin(ScrollTrigger);

    const body = document.body
    gsap.fromTo(body,{
        opacity:0,
        y:-10
    },{
        opacity:1,
        y:0,
        duration:1
    })

    const elementsFadeRightTransition = document.querySelectorAll(".transition-fade-element-right")
    elementsFadeRightTransition.forEach((element,index)=>{
        gsap.fromTo(element,
           {
            opacity: 0,
            x: 200
           },
           {
            opacity:1,
            x:0,
            duration:1,
            delay:index * 0.5,
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // ketika bagian atas kotak mencapai 80% dari tinggi viewport
                end: "top 30%", // ketika bagian atas kotak mencapai 20% dari tinggi viewport
                scrub: 1, // scrubbing halus, membutuhkan 1 detik untuk menyesuaikan
                //markers: true, // aktifkan marker untuk debugging
                once:true
            }
           } 
        )
    })

    const elementsFadeLeftTransition = document.querySelectorAll(".transition-fade-element-left")
    elementsFadeLeftTransition.forEach((element,index)=>{
        gsap.fromTo(element,
           {
            opacity: 0,
            x: -200
           },
           {
            opacity:1,
            x:0,
            duration:1,
            delay:index * 0.5,
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // ketika bagian atas kotak mencapai 80% dari tinggi viewport
                end: "top 30%", // ketika bagian atas kotak mencapai 20% dari tinggi viewport
                scrub: 1, // scrubbing halus, membutuhkan 1 detik untuk menyesuaikan
                //markers: true, // aktifkan marker untuk debugging
                once:true
            }
           } 
        )
    })

    const elementsFadeTopTransition = document.querySelectorAll(".transition-fade-element-top")
    elementsFadeTopTransition.forEach((element,index)=>{
        gsap.fromTo(element,
           {
            opacity: 0,
            y: -200
           },
           {
            opacity:1,
            y:0,
            duration:1,
            delay:index * 0.5,
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // ketika bagian atas kotak mencapai 80% dari tinggi viewport
                end: "top 30%", // ketika bagian atas kotak mencapai 20% dari tinggi viewport
                scrub: 1, // scrubbing halus, membutuhkan 1 detik untuk menyesuaikan
                //markers: true, // aktifkan marker untuk debugging
                once:true
            }
           } 
        )
    })

    const elementsBottomTransition = document.querySelectorAll(".transition-fade-element-bottom")
    elementsBottomTransition.forEach((element,index)=>{
        gsap.fromTo(element,
           {
            opacity: 0,
            y: 100
           },
           {
            opacity:1,
            y:0,
            duration:1,
            delay:index * 0.5,
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // ketika bagian atas kotak mencapai 80% dari tinggi viewport
                end: "top 30%", // ketika bagian atas kotak mencapai 20% dari tinggi viewport
                scrub: 1, // scrubbing halus, membutuhkan 1 detik untuk menyesuaikan
                //markers: true, // aktifkan marker untuk debugging
                once:true
            }
           } 
        )
    })

    const elementLeftTransition = document.querySelectorAll(".transition-element-left")
    elementLeftTransition.forEach((element,index)=>{
        gsap.fromTo(element,
            {
                x:-500
            },
            {
                x:0,
                duration:0.5,
                delay:index * 0.3,
            }
        )
    })

    const elementRightTransition = document.querySelectorAll(".transition-element-right")
    elementRightTransition.forEach((element,index)=>{
        gsap.fromTo(element,
            {
                x:500
            },
            {
                x:0,
                duration:0.5,
                delay:index * 0.3,
            }
        )
    })

    const elementTopTransition = document.querySelectorAll(".transition-element-top")
    elementTopTransition.forEach((element,index)=>{
        gsap.fromTo(element,
            {
                y:-150,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:0.5,
                delay:index * 0.3,
            }
        )
    })



})
