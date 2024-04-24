const app = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org'
        };
    },
    methods: {
        mostrarUrl() {
            return this.url;
        },

        openPage(ref) {
            window.location.href = ref;
            console.log();
        }, 
        
        makeRed(option){
            var op = document.getElementById(option);
            op.style.backgroundColor = 'rgb(255, 0, 0)';

            console.log('ride or die');
        }

    }
  });

app.mount("#app");


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




