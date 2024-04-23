document.getElementById("myForm").addEventListener("submit", function(event) {
    // Obtenemos todos los radio buttons
    var radios = document.getElementsByName("opciones");
    var checked = false;
    // Verificamos si al menos uno está seleccionado
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            break;
        }
    }
    // Si ninguno está seleccionado, evitamos el envío del formulario
    if (!checked) {
        alert("Selecciona al menos una opción.");
        event.preventDefault();
    }
});
