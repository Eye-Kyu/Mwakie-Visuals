

//Gallery zoom into scroll
window.addEventListener("load", function () {
    const slides = gsap.utils.toArray(".slide");
    const activeSlideImages = gsap.utils.toArray(".active-slide img");

    function getInitialTranslateZ(slide) {
        const style = window.getComputedStyle(slide);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if(matrix) {
            const values = matrix[1].split(", ");
            return parseFloat(values[14] || 0);
        }
        return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax) {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) => {
        const initialZ = getInitialTranslateZ(slide);

        ScrollTrigger.create({
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const zIncrement = progress* 22500;
                const currentZ = initialZ + zIncrement;

                let opacity;

                if (currentZ > -2500) {
                    opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
                } else {
                    opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
                }

                slide.style.opacity = opacity;

                slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

                if (currentZ < 100) {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 1,
                        ease: "power3.out",
                    });
                } else {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 0,
                        ease: "power3.out",
                    });
                }
            }
        })
    })
});




//gallery scroll
const positions = [
    {top: "0%", left: "0%" },
    {top: "0%", left: "10%" },
    {top: "0%", left: "60%" },
    {top: "16%", left: "15%" },
    {top: "16%", left: "40%" },
    {top: "16%", left: "90%" },
    {top: "32%", left: "50%" },
    {top: "32%", left: "75%" },
    {top: "48%", left: "0%" },
    {top: "64%", left: "30%" },
    {top: "64%", left: "50%" },
    {top: "64%", left: "90%" },
    {top: "80%", left: "20%" },
    {top: "80%", left: "70%" },
];

const imgs = document.querySelectorAll(".image");

gsap.set("img", {
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(1)",
});

gsap.from("p", {
    y: 40,
    ease: "power4.inOut",
    duration: 1,
    stagger: {
        count: 0.15,
    },
    delay: 0.5,
});

gsap.to("img", {
    scale: 1,
    width: "300px",
    height: "40px",
    stagger: 0.15,
    duration: 0.75,
    ease: "power2.out",
    delay: 1,
    onComplete: scatterAndShrink(),
});

gsap.to("p", {
    top: "40px",
    ease: "power4.inOut",
    duration: 1,
    stagger: {
        amount: 0.15
    },
    delay: 3,
    onComplete: () => {
        document.querySelector(".header").remove();
    },
});

gsap.from("a", {
    y: 20,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    stagger: {
        amount: 0.15,
    },
    delay: 4,
});


function scatterAndShrink() {
    gsap.to(".image", {
        top: (i) => positions[i].top,
        left: (i) => positions[i].left,
        transform: "none",
        width: "75px",
        height: "100px",
        stagger: 0.075,
        duration: 0.075,
        ease: "power2.out"
    });
}

