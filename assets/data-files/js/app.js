// added vh and vw to math css grid scale
const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);

// getting error gsap dont find css clases html dom partially loaded 
document.addEventListener("DOMContentLoaded",
    function (event) {
        // the code below is what u normally do
        gsap.registerPlugin(ScrollTrigger);

        // object to apply the Animation
        gsap.to(".tarjet-container", {
            y: vh(-85),
            duration: 1,

            // object that triggers the animation
            scrollTrigger: ".large-card-clasic"
        });

    });