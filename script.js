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
    $("#modal" + a).css("display", "flex");
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
}

function Home(e) {
    window.location.assign("index.html");
}