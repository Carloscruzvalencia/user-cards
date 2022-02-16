//  ========================= gsap scrollTrigger code ========================
// added vh and vw to math css grid scale
const vh = (coef) => window.innerHeight * (coef / 100);
const vw = (coef) => window.innerWidth * (coef / 100);

// getting error gsap dont find css clases html dom partially loaded 
document.addEventListener("DOMContentLoaded",
    // the code below is what u normally do
    function (event) {
        gsap.registerPlugin(ScrollTrigger);
        
        // classic card animation
        gsap.to(".tarjet-container", {
            scrollTrigger: {
                Trigger: ".large-card-clasic",
                toggleActions: "restart resume reverse resume",
                scrub: true,
                start: "200vh",
                end: "600vh",
            },
            y: vh(-85),
            duration: 1.5,
        });
        // button section animation
        gsap.to(".bt-section", {
            scrollTrigger: {
                scrollTrigger: ".show-button",
                toggleActions:"play resume reverse resume",
                scrub: true,
                start: "100vh",
                end: "400vh",
            },
            opacity:  1,
            durantion: 0.1,
        });
        gsap.to("#th-1-an", {
            scrollTrigger: {
                scrollTrigger: ".thin-cards",
                toggleActions:"restart resume reverse resume",
                scrub: true,
                start: "2200vh",
                end: "2600vh",
            },
            y: vh(-100),
            duration: 2,
        });
    });
//  =================================================

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
function copyFunction3() {
    /* Get the text field */
    var copyText = document.getElementById("copyhtml2");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip3");
    tooltip.innerHTML = "Copiado";
}
function copyFunction4() {
    /* Get the text field */
    var copyText = document.getElementById("copycss2");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip4");
    tooltip.innerHTML = "Copiado";
}
function copyFunction5() {
    /* Get the text field */
    var copyText = document.getElementById("copyhtml3");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip5");
    tooltip.innerHTML = "Copiado";
}
function copyFunction6() {
    /* Get the text field */
    var copyText = document.getElementById("copycss3");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip6");
    tooltip.innerHTML = "Copiado";
}
function copyFunction7() {
    /* Get the text field */
    var copyText = document.getElementById("copyhtml4");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip7");
    tooltip.innerHTML = "Copiado";
}
function copyFunction8() {
    /* Get the text field */
    var copyText = document.getElementById("copycss4");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    var tooltip = document.getElementById("myTooltip8");
    tooltip.innerHTML = "Copiado";
}
// ======================= display code block sections ========================
function DisplayFunction() {
    var x = document.getElementById("CodeSection1");
    if (x.style.display == "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function DisplayFunction2() {
    var x = document.getElementById("CodeSection2");
    var x1 = document.getElementById("CodeSection3");
    var x2 = document.getElementById("CodeSection4");
    if (x.style.display == "grid") {
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
    } else {
        x.style.display = "grid";
        x1.style.display = "none";
        x2.style.display = "none";
    } 
}
function DisplayFunction3() {
    var x = document.getElementById("CodeSection2");
    var x1 = document.getElementById("CodeSection3");
    var x2 = document.getElementById("CodeSection4");
    if (x1.style.display == "grid") {
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
    } else {
        x.style.display = "none";
        x1.style.display = "grid";
        x2.style.display = "none";
    } 
}
function DisplayFunction4() {
    var x = document.getElementById("CodeSection2");
    var x1 = document.getElementById("CodeSection3");
    var x2 = document.getElementById("CodeSection4");
    if (x2.style.display == "grid") {
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
    } else {
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "grid";
    } 
}
// ======================== textillate ============================
$(function () {
    $('h1').textillate({ in : {
            effect: 'fadeInDownBig'
        },
        out: {
            effect: 'none'
        },
        loop: false
    });
});
