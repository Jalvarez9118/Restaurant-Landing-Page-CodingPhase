// import "css/animate.scss";
// $('.food-image').hover(
//     function () { $(this).toggleClass('animated jello') },
//     function () { $(this).removeClass('animated jello') }
// )


$(document).ready(function () {
    $(".food-image").hover(function () {
        $(this).addClass("animated jello");
    });
});