/*
const trails = document.querySelectorAll(".trail");
const smoothPointer = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
};
const totalPointsArray = [40, 35, 30, 25, 20, 15, 10];

window.addEventListener("mousemove", (event) => {
    gsap.to(smoothPointer, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power4.out",
    });
});

function updatePath() {
    trails.forEach((path, index) => {
        let points = path.points || [];
        points.unshift({ ...smoothPointer });
        while (points.length > totalPointsArray[index]) {
            points.pop();
        }
        path.points = points;

        if (points.length > 1) {
            let d = `M ${points[0].x} ${points[0].y}`;
            for (let i = 1; i < points.length; i++) {
                d += ` L ${points[i].x} ${points[i].y}`;
            }
            path.setAttribute("d", d);
        }
    });

    requestAnimationFrame(updatePath);
}

updatePath();

*/

gsap.registerPlugin(ScrollTrigger);


gsap.set(".about", {
    opacity: 0,
    y:270
})
gsap.set(".first-text", {
    x:-30,
    opacity: 0
})
gsap.set(".second-text", {
    x:170,
    opacity: 0,
})
gsap.set(".about-image", {
   opacity: 0
})
let tla = gsap.timeline({delay:0});

tla.to(".about", {
    opacity: 1,
    y: 20,
    duration: 2,
    ease: "power4.inOut"
}, 0);
tla.to(".first-text", {
    x: 40,
    opacity:1,
    duration: 2,
    ease: "power4.inOut"
}, 0);
tla.to(".second-text", {
    opacity:1,
    x: 7,
    duration: 3,
    ease: "power4.inOut"
}, 0);
tla.to(".about-image", {
    opacity: 1,
    duration: 3,
    ease: "power2.inOut"
}, 0);

