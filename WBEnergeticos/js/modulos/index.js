$(function () {
    validaSesion();    
});


function validaSesion() {
    var session = $.cookie("sesion");
    console.log(session);
    $("#sesion").append(session);
    $("#bienvenido").append('<h5 class="text-center text-white">' + session +'</h5>');
}