var r = -20;
var l = +20;

var shiftR = `${r}%, 0, 0`;

var shiftL = "-0%, 0, 0";

var slideStyle = document.getElementById("slideSystem").style.transform;


// RIGHT SLIDE MOVE
var right = document.getElementById("rightBtn").addEventListener("click", () => {

    document.getElementById("slideSystem").style.transform = `translate3d(${shiftR})`;
    console.log(r);
    var a = 20;
    shiftR = `$({r} (- a))%, 0, 0`

    console.log(shiftR);
    console.log(r);
});



// LEFT SLIDE MOVE
var left = document.getElementById("leftBtn").addEventListener("click", () => {
    document.getElementById("slideSystem").style.transform = `translate3d( ${shiftL})`;
});










// var right = document.getElementById("rightBtn").addEventListener("click", function () {
//     document.getElementById("slideSystem").style.transform = "translate3d(-20%, 0, 0)"
// });



// slide left by 1 slide (20%)
// function move() {
//     document.getElementById("slideSystem").style.transform = "translate3d(-20%, 0, 0)";
// };

// var let = () => {

// }