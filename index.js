var card = $(".card");
$(document).on("mousemove", function (e) {
    var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
    var ay = ($(window).innerWidth() / 2 - e.pageY) / 10;
    card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg) traslateZ(7em)");
});