// Start Button
$('.main-nav-button').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('main-nav-button--off');
    $('.main-nav').toggle();
});
$(document.body).click(function () {
    $('.main-nav-button').addClass('main-nav-button--off');
    $('.main-nav').hide();
});
$('.main-nav').hide();

//Time
var myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}