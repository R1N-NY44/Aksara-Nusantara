// const body = document.body
// let lastScroll = 0
// const header = document.getElementById('header')

const { default: Alpine } = require("alpinejs")

// window.addEventListener("scroll", () => {
//     const currentScroll = window.scrollY;
//     if (currentScroll <= 0){
//         body.classList.add("scroll-up");
//         header.classList.remove("shadow-md")
//         return;
//     }
//     console.log(currentScroll)
//     if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//         body.classList.remove("scroll-up");
//         body.classList.add("scroll-down");
//     }else if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
//         body.classList.remove("scroll-down");
//         body.classList.add("scroll-up");
//         header.classList.add("shadow-md")
//     }
//     lastScroll = currentScroll
//     console.log(lastScroll)
// })
document.addEventListener("alpine:init",()=>{
    Alpine.data('stickyNavbar',()=>({
        hideNavbar:false,
        lastScrollTop:0,
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            this.hideNavbar = scrollTop > this.lastScrollTop;
            this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
    }))
})

