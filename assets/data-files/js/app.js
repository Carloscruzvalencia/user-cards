//  ========================= gsap scrollTrigger code ========================
// added vh and vw to math css grid scale
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

// getting error gsap dont find css clases html dom partially loaded 
document.addEventListener("DOMContentLoaded",
    // the code below is what u normally do
    function (event) {
        gsap.registerPlugin(ScrollTrigger);

        // object to apply the Animation
        gsap.to(".tarjet-container", {
            y: vh(-85),
            duration: 1,

            // object that triggers the animation
            scrollTrigger: ".large-card-clasic"
        });
    });
//  ========================= gsap scrollTrigger code ========================

// ========================== copy text function =============================

function copyFunction1() {
    /* Get the text field */
    var copyText = document.getElementById("copyhtml1");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copiado";
}

function copyFunction2() {
    /* Get the text field */
    var copyText = document.getElementById("copycss1");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
}

// ======================= display code block sections ========================
function DisplayFunction() {
    var x = document.getElementById("CodeSection1");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}
// ======================== textillate ============================
$(function () {
    $('h1').textillate({ in : {
            effect: 'fadeInLeftBig'
        },
        out: {
            effect: 'hinge'
        },
        loop: true
    });
});