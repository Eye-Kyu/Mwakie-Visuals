
gsap.registerPlugin(ScrollTrigger);
/*
class App {
    constructor(){
        this.herombisha = [...document.querySelectorAll('.hero-mbisha img')];
        
        this._initialize();
        this._render();
    }

    _initialize() {
        this._setInitialStates();
        this._createLenis();
        this._createIntro();
        this._createHero();
        this.createTextAnimation();
    }

    _setInitialStates() {
        gsap.set('.title-name span', {
            y:32,
            opacity: 0
        })
        gsap.set('hero-mbisha img',{
            opacity: 0,
            y: gsap.utils.random(100, 50)
        })

    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }
    _createIntro() {
        const tl = gsap.timeline();

        tl.to('title-name div', {
            opacity: 1
        }).to('.title-name span', {
            y: 0,
            opacity: 1,
            ease: 'expo.out',
            duration: 2,
            stagger: 0.01
        }).to('.hero-mbisha img', {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.04,
        }, 0.5)
    }

    _createHero() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                markers: true
            }
        });

        this.herombisha.forEach(image => {
            tl.to(image, {
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50)
            }, 0)
        })
    }

    _render(time) {
        this.lenis.raf(time);

        requestAnimationFrame(this._render.bind(this))
    }
}

*/


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
            ease: "expo.out",
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
                yPercent: gsap.utils.random(-100, -50) + (index * 10), // Adjust parallax effect based on index
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
