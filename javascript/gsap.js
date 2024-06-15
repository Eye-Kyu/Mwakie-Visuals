/*import {gsap} from "./gsap/gsap.min.js";
/**Event Listener for mouseMove Event
 * Gets the current mouse position and on mouseMove event, updates the cursor position
 */

gsap.set('.cursor',{xPercent:-50, yPercent:-50});

const links = document.querySelectorAll('button');
const cursor = document.querySelector('.cursor');
const linksnum = links.length;

let mouseX;
let mouseY;
let i = 0;

const grow = () => {
    if (i < linksnum) {
        cursor.classList.toggle('grow')
    }
    else {
        console.log("this is not a link!!!");
    }

}; 
      //Add mouseevent listener to each link
      links.forEach(link => {
        link.addEventListener('mouseenter', event => grow());
        link.addEventListener('mouseleave', event => cursor.classList.toggle('grow'));

    });
    
    



window.addEventListener('mousemove', e => {
     mouseX = e.clientX;
     mouseY = e.clientY;

    console.log(mouseX, mouseY);

    gsap.to(cursor, {x: mouseX, y: mouseY})
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
                yPercent: gsap.utils.random(-50, -100) + (index * 12), // Adjust parallax effect based on index
                duration: .4 // Duration of the parallax effect
            }, 0);
        });
    }

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

