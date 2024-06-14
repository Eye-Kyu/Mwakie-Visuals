gsap.set(".cursor",{xPercent:-50, yPercent:-50})

let cursor = document.querySelector(".cursor")

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 2, {x: mouseX, y: mouseY})
});


document.addEventListener("DOMContentLoaded", function() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    gsap.set(".menu-item p", {y: 225});


    const timeline = gsap.timeline({paused: true});

    timeline.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
    });

    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.3,
        ease: "power4.inOut"
    }, "-=1");

    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5
    }, "<");

    timeline.to(".sub-nav", {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    }, "<");
    

    toggleButton.addEventListener("click", function() {
        if(isOpen) {
            timeline.reverse();
        }else {
            timeline.play();
        }
        isOpen = !isOpen;
    })
})

/*

gsap.registerPlugin(ScrollTrigger);

const tl4 = gsap.timeline({ paused:true });
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

gsap.set(spanBefore, {background:"#000"});
gsap.set(".menu", {visibility:"hidden"});

//toggles menu
 function revealMenu() {
   revealMenuItems();

   const hamburger = document.getElementById("hamburger");
   const toggleBtn = document.getElementById("toggle-btn");

   toggleBtn.onclick = function (e) {
       hamburger.classList.toggle("active");
       tl4.reversed(!tl4.reversed());
   };
 }

 revealMenu();

 function revealMenuItems() {
   const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
   const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

   const power2 = "power2.inOut";
   const power4 = "power4.inOut"; 

   tl4.to("#hamburger", 1.25, {
       marginTop: "-5px",
       x: -40,
       y: 40,
       ease: power4,
   });

   tl4.to("#hamburger span", 1, {
       background: "#e2e2dc",
       ease: power2,
   },"<");

   tl4.to(spanBefore, 1, {
       background: "#e2e2dc",
       ease: power2,
   },"<");

   tl4.to(".btn .btn-outline", 1.25,{
       x: -30,
       y: 30,
       width: "20px",
       height: "20px",
       border: "1px solid #e2e2dc",
       ease: power4,
   }, "<");

tl4.to(path, 0.8, {
   attr: {
       d: start,
   },
   ease: power2.easeIn,
}, "<").to(path, 0.8, {
   attr: {
       d: end,
   },
   ease: power2.easeIn,
}, "-0.5"); 

tl4.to(".menu", 1, {
   visibility: "visible",
},"-=0.5");

tl4.to(".menu-item > a", 1, {
   top: 0,
   ease: "power3.out",
   stagger: {
       amount: 0.5 
   }
},"-=1").reverse();

 }


/*lenis basic scrolling setup*/

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// Registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

class App {
    constructor() {
        this.hero_images = [...document.querySelectorAll(".hero_images img")];
        this._initialize();
       // this._render(); // i'm calling render loop, assuming there is a rendering mechanism
    }

    _initialize() {
        this._setInitialStates();
        this._createIntro();
        this._createHero();
        // Assuming this method is defined elsewhere in the code
    
    }

    _setInitialStates() {
        gsap.set(".hero_title span", {
            y: 32,
            opacity: 0
        });
        gsap.set(".hero_images img", { 
            opacity: 0,
            y: gsap.utils.random(100, 50)
        });
    }


    _createIntro() {
        const tl = gsap.timeline();

        tl.to(".hero_title div", { 
            opacity: 1
        }, 0.6).to(".hero_title span", {
            y: 10,
            opacity: 1,
            ease: "power4.out",
            duration: 2,
            stagger: 0.02
        }).to(".hero_images img", {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 2,
            stagger: 0.04,
        }, 0.5);
    }

    _createHero()   {
        this.hero_images.forEach((image, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            tl.to(image, {
                ease: "none",
                yPercent: gsap.utils.random(-60, -120) + (index * 10), // Adjust parallax effect based on index
                duration: 1 // Duration of the parallax effect
            }, 0);
        });
    }

    /*
    _render(time) {
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this)); // Keep the rendering loop going
    }
    */
}

// Instantiate the App class
const app = new App();



const heroPage = document.querySelector(".hero");

 heroPage.addEventListener("scroll", function (e) {
    const horizontalScroll = e.target.scrollLeft;
    });

    console.log("horizontalScroll");



    //marquee animation on scroll
    
    let currentScroll = 0;
    let isScrollingDown = true;
    let arrows = document.querySelectorAll(".arrow");

    let tween = gsap
    .to(".marquee_part", {
        xPercent: -100,
        repeat: -1,
        duration: 5,
        ease: "linear"
    })
    .totalProgress(0.5);

    gsap.set(".marquee_inner", {xPercent: -50});

    window.addEventListener("scroll", function() {
        if (this.window.pageYOffset > currentScroll) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }
        
        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1,
        });

        arrows.forEach((arrow) => {
            if (isScrollingDown) {
                arrow.classList.remove("active");
            } else {
                arrow.classList.add("active");
            }
        });

        currentScroll = window.pageYOffset;
    });

/*
const sectionScroll = document.querySelector(".hero");
let sectionScrollWidth = sectionScroll.offsetWidth;
let amountToScroll = sectionScrollWidth - window.innerWidth;

const tween = gsap.to(sectionScroll, {
    x: - amountToScroll,
    duration: 3,
    ease: "none"
    
});

ScrollTrigger.create({
    trigger:".move_righter",
    start:"top top",
    end:"+=" + amountToScroll,
    pin: true,
    Animation:tween,
    scrub:1,
    markers:true
})
*/
