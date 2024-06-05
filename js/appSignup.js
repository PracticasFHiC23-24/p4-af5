const app = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            user: '',
            pswd: '',
            pswd2: '',
            warning: ''
        };
    },
    methods: {
        mostrarUrl() {
            return this.url;
        },

        openPage(ref) {
            window.location.href = ref;
        },

        checkLogin() {
            
            var element = document.getElementById("warning");
            var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$");
            element.style.display = "none";
            if(this.pswd.length < 8){
                this.warning='La contrasenya ha de tenir 8 caràcters com a mínim';
                var box = document.getElementById("pswdInput");
                box.style.borderColor = "red";
                event.preventDefault();
                element.style.display = "block";
            } else if (!pattern.test(this.pswd)){
                this.warning='La contrasenya ha de tenir almenys 1 minúscula, 1 majúscula i 1 nombre';
                var box = document.getElementById("pswdInput");
                box.style.borderColor = "red";
                event.preventDefault();
                element.style.display = "block";
            } else{
                event.preventDefault();
                this.openPage("./pinicioTasca4.html");
            }
        }, 

        closeLogin() {
            console.log('Tamo en nota');
            this.openPage("./defaultpag.html");
        }


    }
  });

app.mount("#form_and_principios");

const passEye = document.querySelector("#passEye");
const password = document.querySelector("#pswdInput");
var toggle = true;

passEye.addEventListener("click", function () {
   
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye icon
    if (toggle === true) {
        document.getElementById('passEye').src  = 'images/icons8-eye-100.png';
        toggle = !toggle;
    } 
    else {
       document.getElementById('passEye').src = 'images/icons8-closed-eye-100.png';
       toggle = !toggle;
    }
});



const appH = Vue.createApp({
    data() {
        return {
        };
    },
    methods: {

        openPage(ref) {
            window.location.href = ref;
        }


    }
  });

  appH.mount("#header");


