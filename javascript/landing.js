
const tlo = gsap.timeline({delay:0});

tlo.to(".insight", {
       scale: 1.2,
       x: -80,
        scrollTrigger: {
            trigger: '.contente',
            start: 'top 60%',
            end: "+=700",
            scrub: 1,
            duration: {min: 0.2, max: 3},
            ease: "power1.inOut"
        }
    }, 0);

/*

    gsap.set('.fullwidth-image_text', {
        y: 32,
        opacity : 0
    })
    gsap.set('.fullwidth-image img', {
        scale: 1.3
    })
    */
    /*
    gsap.set('.follow-text', {
        x:2,
        scale: 1.4
    })

    */

     /*
       
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
        }, 0).
         */
     


        gsap.set(".letters", {
            fontSize: '7em',
            color: '#000'
        })
        gsap.set(".zunguka", {
            transform: 'rotate(40deg)'
        },"-=1")
        gsap.set(".fullwidth-image_text", {
            opacity: 0
        })
        gsap.set(".follow", {
           opacity: 1
          
        })
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.collabos',
                start: 'top 0%',
                end: '+=300',
                toggleActions: "play reverse reverse play",
                scrub: 1,
                pin: true,
                ease: "power4.inOut",
                duration: {min: 0.2, max: 5}
            }
        })
        
        tl.to(".letters", {
            fontSize: '11.6em',
            color: '#fff'
        },'<')
        .to(".zunguka", {
            transform: 'rotate(0deg)',
            width: '100vw',
            height: '100vh'
        }, '<')
        .to(".fullwidth-image_text", {
            opacity: 1
        },'-=.4')
       
        gsap.to(".follow", {
            opacity: 1,
            duration: 2
        })
        
       
        
        
        
        