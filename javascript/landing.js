/*
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

*/
gsap.registerPlugin(ScrollTrigger);

const tlo = gsap.timeline({delay:0});

tlo.to(".col", {
    top: 0,
    duration: 3,
    ease: "power4.inOut"
});

tlo.to(".c-1 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=2");

tlo.to(".c-2 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4");

tlo.to(".c-3 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4");

tlo.to(".c-4 .item", {
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4");

tlo.to(".c-5 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4");

tlo.to(".container", {
    scale: 6,
    duration: 4,
    ease: "power4.inOut"
},"-=2");

tlo.to(".nav-item a, .title p, .slide-num p, .preview img", {
    top: 0,
    stagger: 0.075,
    duration: 1,
    ease: "power3.out"
}, "-=1.5");

tlo.to(".icon ion-icon, .icon-2 ion-icon", {
    scale: 1,
    stagger: 0.05,
    ease: "power3.out"
}, "-=1");

tlo.to(".insight", {
       scale: 1.2,
       x: -80,
        scrollTrigger: {
            trigger: '.contente',
            start: 'top 50%',
            end: "+=400",
            scrub: 1,
            duration: {min: 0.2, max: 3},
            ease: "power1.inOut"
        }
    }, 0);



    gsap.set('.fullwidth-image_text', {
        y: 32,
        opacity : 0
    })
    gsap.set('.fullwidth-image img', {
        scale: 1.3
    })

    
       
        const tli = gsap.timeline({
            scrollTrigger: {
                trigger: '.fullwidth-image',
                start: 'top top',
                end: '+=1500',
                scrub: true,
                pin: true
            }
        });

        tli.to('.fullwidth-image_overlay', {
            opacity: 0.6
        }).to('.fullwidth-image', {
            "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }, 0).to('.fullwidth-image img', {
            scale: 1
        }, 0).to('.fullwidth-image_text', {
            y: 0,
            opacity: 1
        }, 0)


