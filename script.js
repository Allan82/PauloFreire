function Modal(a) {
    if (a === 1) {
        $("#modal2").css("display", "none");
        $("#modal3").css("display", "none");

    };
    if (a === 2) {
        $("#modal1").css("display", "none");
        $("#modal3").css("display", "none");

    };
    if (a === 3) {
        $("#modal1").css("display", "none");
        $("#modal2").css("display", "none");

    };
    abrirmask()
    $("#modal" + a).css("display", "flex");
    $("#modal" + a).css("position", "absolute");
    $("#mask").css("z-index", -1);

};
$("#mask").css("display", "flex");

function FecharModal(a) {
    $("#modal" + a).css("display", "none");
};

function Sim(local) {
    var pagina = local + ".html";
    window.location.assign(pagina);
}

function Nao(e) {
    $("#modal1").css("display", "none");
    $("#modal2").css("display", "none");
    $("#modal3").css("display", "none");
    $("#mask").css("display", "none");
}

function Home(e) {
    window.location.assign("index.html");
}
$(document).ready(function () {
    console.log("Oi");
});
function abrirmask() {

    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });
    $("#mask").css("display", "flex");
    $("#mask").css("position", "absolute");
}