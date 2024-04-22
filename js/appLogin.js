const app = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            user: '',
            pswd: '',
            savedUser: ['pauplanes', 'ninabravo'],
            savedPswd: ['abc123abc', '123abc123'],
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
            element.style.display = "none";

            if(this.user===this.savedUser[0] && this.pswd===this.savedPswd[0]){
                event.preventDefault();
                this.openPage("./pinicio.html");
            } else if(this.user===this.savedUser[1] && this.pswd===this.savedPswd[1]){
                event.preventDefault();
                this.openPage("./pinicio.html");
            } else {
                if(this.user!==this.savedUser[0] && this.user!==this.savedUser[1]){
                    this.warning='Aquest usuari no existeix';
                    var box = document.getElementById("userInput");
                    box.style.borderColor = "red";
                } else{
                    this.warning='L\'usuari i la contrasenya no concideixen';
                    var box = document.getElementById("userInput");
                    box.style.borderColor = "red";
                    var box2 = document.getElementById("pswdInput");
                    box2.style.borderColor = "red";
                }
                event.preventDefault();
                element.style.display = "block";

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


