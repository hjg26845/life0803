
$(function () {
    $("#main").height(document.documentElement.clientHeight);
    $("#main .card-lattice").height($("#main").height()-$("#main .top-card").height());
});