$(document).ready(function() {
    $("#summit").click(function(e) {
        e.preventDefault();

        var travel = $("#viaje").val().trim();

        console.log(travel);

        mostrarDato(travel);

    });


    async function mostrarDato(travel) {

        var travel1 = "Tlalocan";
        var travel2 = "Valle del mezquital";
        var travel3 = "Chichihuacuauhco";
        var travel4 = "Mictlán"

        if (travel == travel1) {
            location.href = "tlalocan.html";
        } else if (travel == travel2) {
            location.href = "vm.html";
        } else if (travel == travel3) {
            location.href = "chichihua.html";
        } else if (travel == travel4) {
            location.href = "mict.html";
        } else {
            alert("Ingresa un lugar válido");
        }
    }

});