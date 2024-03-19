const a = document.querySelector(".signinbtn");
const b = document.querySelector(".signupbtn");
const c = document.querySelector(".wraper");
const h = document.querySelector(".btnlogin-popup");

b.addEventListener("click", function () {
    c.classList.toggle("active");
});
a.addEventListener("click", function () {
    c.classList.toggle("active");
});
h.addEventListener("click", function () {
    c.classList.toggle("active-popup");
});

let tl = gsap.timeline()
function anim() {
    tl.from(".loder h1",{
        y:-200,
        duration:1,
        opacity:0,
        ease:Expo.easeInout
    })
    gsap.from(".loder h2",{
        y:200,
        duration:1,
        opacity:0,
        ease:Expo.easeInout
    })
    tl.to(".loder",{
        y:-700,
        duration:1,
        delay:0.2,
        opacity:0,
        ease: Expo.easeInout,
    })
    tl.from(".topleft h1", {
        x: -100,
        duration: 0.4,
        stagger: 0.3,
        opacity: 0,
        ease: Expo.easeInout,
    })
    gsap.from(".topright", {

        scale:-1.3,
        duration: 1,
        stagger: 0.3,
        opacity: 0,
        delay: 1,
        ease: Expo.easeInout,
    })
    gsap.from(".box1", {
        x: -200,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page2 .box1",
            scroller: "body",
            // markers:true,
            start: "top 70%",
            end: "top 30%",
            scrub: 1

        }
    })
    gsap.from(".box2", {
        scale: 1.3,
        duration: 1.2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page2 .box3",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 30%",
            scrub: 1
        }
    })
    gsap.from(".box3", {
        x: 200,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page2 .box3",
            scroller: "body",
            // markers:true,
            start: "top 70%",
            end: "top 30%",
            scrub: 1
        }
    })
    gsap.from(".page3 .text p", {
        x: 100,
        duration: 1,
        ease: Expo.easeInout,
        stagger: 0.8,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3 .text p",
            scroller: "body",
            // markers:true,
            start: "top 60%",
            end: "top 30%",
            scrub: 1
        }
    })
    tl.from(".page4 .contacts h1", {
        x: -100,
        duration: 2,
        ease: Expo.easeInout,
        stagger: 0.9,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page4 .contacts",
            scroller: "body",
            // markers:true,
            start: "top 60%",
            end: "top 30%",
            scrub: 2
        }
    })
    tl.from(".page4 .tellus input,textarea ", {
        x: 100,
        duration: 1,
        ease: Expo.easeInout,
        stagger: 0.6,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page4 .tellus",
            scroller: "body",
            // markers:true,
            start: "top 60%",
            end: "top 30%",
            scrub: 2
        }
    })

}
anim()