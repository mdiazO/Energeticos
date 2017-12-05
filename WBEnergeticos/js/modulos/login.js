$(function () {
    init();
    console.log('Start Login');
});

function init() {
    bootsVal();
    $('#btnValida').click(function () {
        bootsVal();
        $('#form_login').data('bootstrapValidator').validate();
        var n = $('#form_login').data('bootstrapValidator').isValid();
        if (n) {
            acceder();
        } else {
            bootsVal();
        }
    });


}

/* Validación form */
function bootsVal() {
    $("#form_login").bootstrapValidator({
        live: 'enabled',
        submitButtons: 'button[id="btnValida"]',
        message: 'Valor invalido',
        fields: {
            usuario: {
                selector: '#usuario',
                group: '#valUser',
                validators: {
                    notEmpty: {
                        message: 'Campo usuario obligatorio'
                    }
                }
            },
            pass: {
                selector: '#pass',
                group: '#valPass',
                validators: {
                    notEmpty: {
                        message: 'Campo contraseña obligatorio'
                    }
                }
            }
        }
    })
}

/* Validación de campos - Expresión Regular */
function validarCampo(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true;
    patron = /^[a-zA-Z0-9]+$/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

/* Ajax Login */
function acceder() {
    var arr = [];
    $.ajax({
        async: false,
        type: 'POST',
        dataType: "text",
        url: 'WSEnergeticos.asmx/AccesoDatos',
        data: {
            usuario: $("#usuario").val(),
            contrasena: $("#pass").val()
        },
        success: function (data) {
            var resultadoXML = data.substring(76, data.indexOf('</string>'));

            if (resultadoXML == "Error") {
                alert("Error: Usuario o contraseña incorrecta.");
            } else {
                var variableUsuario = resultadoXML;
                $.cookie('sesion', variableUsuario);
                console.log($.cookie('sesion'));
                window.location.href = "Index.html#welcome.html";
            }

        }
    });
}