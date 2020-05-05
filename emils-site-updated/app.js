// GSAP PLUGGINS
gsap.registerPlugin(ScrollToPlugin);
// ********

// ***** LOADING PAGE *******
var tl = gsap.timeline({ repeat: 2384 });
tl.to(".spinner", { duration: 2, rotation: 360, ease: "power4" });
tl.to(".box", { duration: 0.5, width: "100%" }, ">-.8");
tl.to(".spinner", { duration: 2, rotation: 900, ease: "power4" });
tl.to(".box", { duration: 0.5, width: 0 }, ">-.8");
gsap.to(".load-page h5", { opacity: .7, duration: .3, delay: .5 }, '');
gsap.to(".load-page h5", { duration: .3, opacity: 0, delay: 3 });
// **********************

// ******* MODAL *******
function modal(id) {
    var modal = document.querySelector("#" + id);
    modal.style.display = "flex"
    modal.addEventListener("click", () => {
        modal.style.display = "none"
    })
    modal.childNodes[1].addEventListener("click", () => {
        modal.style.display = "none"
    });
}
// ********************

// *** IF CONTAINER ROW ONLY HAS TWO PICS / MAINLY FOR TRACKS *****
var rows = document.querySelectorAll(".row");
rows.forEach((e, i) => {
    if (e.childElementCount < 3) {
        e.style.justifyContent = "space-evenly";
    }
});
// *******************


// *** FOR SOUNDCLOUD PLAYER ON PHONES *****
document.querySelector(".for-phone").style.display = "none"
var max900 = window.matchMedia("(max-width: 900px)")
if (max900.matches) {
    document.querySelector(".for-comp").style.display = "none";
    document.querySelector(".for-phone").style.display = "block";

}
// *******************

// ***** SHOW MORE/LES TRACKS  BUTTONS *****
var showMoreTracksButton = document.querySelector(".show-more-tracks");
var showLessTracksButton = document.querySelector(".show-less-tracks");
var listenSection = document.querySelector("#listen");
showMoreTracksButton.addEventListener("click", () => {
    gsap.to(listenSection, { height: "auto", duration: 1 })
    showMoreTracksButton.style.display = "none"
    showLessTracksButton.style.display = "block"
    showLessTracksButton.addEventListener("click", () => {
        gsap.to(window, { duration: .1, scrollTo: "#tracks" })
        if (max900.matches) {
            gsap.to(listenSection, { height: "100vh", duration: 2 })
        } else {
            gsap.to(listenSection, { height: "170vh", duration: 2 });
        }
        showMoreTracksButton.style.display = "block"
        showLessTracksButton.style.display = "none"
    });
});
// *********************

$(window).on("load", function() {
    $(".load-page").fadeOut("slow")
        // ****** LANDING ANIMATION *******
    var openTl = gsap.timeline({ delay: .3 })
    openTl.from(".artist", { opacity: 0, x: 50, duration: 1 });
    openTl.from(".social-media ul li", { opacity: 0, x: -30, stagger: .4, duration: .5 }, '<');
    openTl.from(".watch", { y: -50, opacity: -1 }, '<');
    if (max900.matches) {
        openTl.from(".video", { width: 0, x: 100, ease: "power4", duration: 1 }, '<+.1');
    } else {
        openTl.from(".video", { width: 0, x: 300, ease: "power4", duration: 1 }, '<+.1');
    }
    // **********************************

    // ***** SCROLL ANIMATION *******
    var scrollTl = gsap.timeline();
    scrollTl.from("nav ul li", { opacity: 0, y: -40, stagger: .1 });
    scrollTl.from('.content .iframe, .content .iframe-phone', { opacity: 0, duration: 1 }, '<+.5')
    scrollTl.timeScale(1.25)
    if (max900.matches) {
        scrollTl.timeScale(3)
    }

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
            triggerElement: '.video',
            triggerHook: 0,
        })
        .addIndicators({
            colorTrigger: 'transparent', //transparent
            colorStart: 'transparent',
            colorEnd: 'transparent',
            indent: 5
        })
        .setTween(scrollTl)
        .addTo(controller)

    document.querySelector(".artist").addEventListener("click", () => {

        openTl.restart()
    });
    // ********************************
})

// ***** IDK *******
var iframeElement = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1 = SC.Widget(iframeElement);
var widget2 = SC.Widget(iframeElementID);
console.log(widget1 + ' widget 1 is to the left... and widget two is to the right ');
// widget1 === widget2
console.log(widget2);
// *******************

// ***to play the youtube video when you click the landing page GIF
// $('#videolink').magnificPopup({
//     type: 'inline',
//     midClick: true
// });