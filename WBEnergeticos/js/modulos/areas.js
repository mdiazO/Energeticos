count = 0;

// -- Sortable y Draggable -- //
$(".ui-sortable").sortable({
    revert: true,
    stop: function (event, ui) {
        ui.item.addClass('dropped');
    }       
});
$(".draggable").draggable({
    connectToSortable: ".ui-sortable",
    helper: "clone",
    revert: 'invalid'
});

 //-- Funciones Agregar Piso -- //
//$("#agregarPiso").click(function () {  
//    count++;
//    $("#e" + count + "").removeClass("hidden");
//    console.log(count);
//});

// - Función Eliminar Piso -- //
//$("#eliminarPiso").click(function () {
//    console.log(count);
//    questElimina();
//});

// -- Función Mensaje Emergente [Opciones: Si - No] -- //
//function questElimina() {
//    confirmar = confirm("¿Deseas eliminar el piso? \nNo podrás recuperar los cambios.");
//    if (confirmar) {
//        $("#e" + count + "").addClass("hidden");
//        count--;
//    } else {
//        console.log("Cancel");
//    }
//}

// -- Función Guarda JSON De Áreas -- //
$("#guardar").click(function () {
    console.log("entra a guardar");
    var json = new Object();
    var values = [];
    var value = $(this).html();

    $("#tabla > tbody > tr > td").each(function (i, o) {
        var nameImagen = $(this).find("img").attr("name");
        if (nameImagen == undefined) {
            var indefinido = "indefinido";
            values.push(indefinido);
        } else {
            values.push(nameImagen);
        }        
    });

    json.Zona1 = values;
    var jsonString = JSON.stringify(json);
    console.log(jsonString);
});

//$("#agregarPiso").click(function () {
//    console.log("Click Agregar Piso");
//    $("#estructura").append('<div class="row" id="e1">' 
//                                +'<h3 class="text-center"><b>Estructura Piso 1</b></h3> <br />'
//                                +'<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">'
//                                    +'<h4><b><i class="fa fa-cubes"></i> Elementos</b></h4><hr />'
//                                    +'<img class="draggable ui-draggable img-reponsive" id="recamaraH" src="img/elementos/recamaraH.png" name="recamaraH" width="170" /><hr />'
//                                    +'<img class="draggable ui-draggable img-reponsive" id="sala" src="img/elementos/sala.png" width="170" name="sala negro" /><hr />'
//                                    +'<img class="draggable ui-draggable img-reponsive" id="recamaraM" src="img/elementos/recamaraM.png" width="170" name="recamaraM" /><hr />'
//                                    +'<img class="draggable ui-draggable img-reponsive" id="entretenimiento" src="img/elementos/entretenimiento.png" width="170" name="entretenimiento" /><hr />'
//                                +'</div>'                                
//                                +'<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">'
//                                    +'<!-- TABLA SMART ADMIN -->'
//                                    +'<div class="table-responsive">'
//                                        +'<table class="table table-bordered" id="tablita">'
//                                            +'<tbody>'
//                                                +'<tr>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                +'</tr>'
//                                                +'<tr>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                +'</tr>'
//                                                +'<tr>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                +'</tr>'
//                                                +'<tr>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                    +'<td class="ui-sortable"></td>'
//                                                +'</tr>'
//                                            +'</tbody>'
//                                        +'</table>'
//                                    +'</div>'
//                                    +'<!-- / TABLA SMART ADMIN -->'
//                                +'</div>'
//                            +'</div> <br />');
//});
