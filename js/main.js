// var r = -20;


var slideStyle = document.getElementById("slideSystem").style.transform;

// hold sliders in array variable
var slide = document.querySelectorAll(".slide");

// hold right button
var buttonRight = document.querySelectorAll(".btn")[0];

// hold left button
var buttonLeft = document.querySelectorAll(".btn")[1];

var clicked = false;



// for (var i = 0; i < slide.length; i++) {
//     if (butRight.addEventListener("click", function () {
//         clicked = true;
//         console.log("clicked right");
//     })) {
//         document.getElementById("slideSystem").style.transform = `translate3d(${shiftR})`;
//     }

//     if (butLeft) {
//         document.getElementById("slideSystem").style.transform = `translate3d( ${shiftL})`;
//     }
// }
var r = -20;
var shiftRight = `${r}%, 0, 0`;

if (buttonRight.addEventListener("click", function () {

    clicked = true;
    {
        document.getElementById("slideSystem").style.transform = `translate3d(${shiftRight})`;
        // shiftRight = console.log(r + " - r after run");

        r = r - 20;
        shiftRight = `${r}%, 0, 0`;
        console.log(r + " - r after run");
        // shiftLeft = shiftRight;
    }
}));



var l = 0;
// var l = +20;
// var shiftLeft = shiftRight;
var shiftLeft = `${l}%, 0, 0`;
console.log(shiftLeft + " - after = to shiftRight");

if (buttonLeft.addEventListener("click", function () {
    clicked = true;
    {
        document.getElementById("slideSystem").style.transform = `translate3d(${shiftLeft})`;
        console.log(shiftLeft + " 1st check left");
        // shiftLeft = console.log(r + " - l after run");

        console.log(shiftLeft + " - after 1st check");
        console.log(l);
        l = l + 20;
        console.log(l + " - after l = l + 20");
        shiftLeft = `${l}%, 0, 0`;
        console.log(l + " - l after run");
    }
}));


