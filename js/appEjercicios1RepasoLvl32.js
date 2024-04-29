const app = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            selected: false,
            selectedOp: '',
            checked: false, 
            checkBtn: 'COMPROVAR'

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
        
        checkAnswer(option){
            var op = document.getElementById(this.selectedOp);
            var warningDiv = document.getElementById('warning');

            if(this.checked===true){
                this.openPage('./ejercicios2RepasoLvl32.html');
            } else {
                if(this.selectedOp === ''){
                    warningDiv.style.display = 'block';
                } else if(this.selectedOp === option){
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(0, 255, 0)';
                    this.checked = true;
                    this.checkBtn = 'SEGÜENT';
                } else {
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(255, 0, 0)';
                    this.selected = false;
                }
            }
            

        }, getSelected(option){
            var op = document.getElementById(option);
            var computedStyle = window.getComputedStyle(op);
            var backgroundColor = computedStyle.backgroundColor;
            if(this.checked===false){
                if(backgroundColor === 'rgb(172, 172, 172)'){
                    op.style.backgroundColor = 'rgb(249, 247, 238)';
                    this.selected = false;
                    
                } else if(this.selected===false){
                    op.style.backgroundColor = '#acacac';
                    this.selected = true;
                    this.selectedOp=option;
                    console.log("nena");
                }
            }
            
            
        }

    }
  });

app.mount("#app");




const app2 = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            selected: false,
            selectedOp: '',
            checked: false, 
            checkBtn: 'COMPROVAR'

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
        
        checkAnswer(option){
            var op = document.getElementById(this.selectedOp);
            var warningDiv = document.getElementById('warning');

            if(this.checked===true){
                this.openPage('./ejercicios3RepasoLvl32.html');
            } else {
                if(this.selectedOp === ''){
                    warningDiv.style.display = 'block';
                } else if(this.selectedOp === option){
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(0, 255, 0)';
                    this.checked = true;
                    this.checkBtn = 'SEGÜENT';
                } else {
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(255, 0, 0)';
                    this.selected = false;
                }
            }
            

        }, getSelected(option){
            var op = document.getElementById(option);
            var computedStyle = window.getComputedStyle(op);
            var backgroundColor = computedStyle.backgroundColor;
            if(this.checked===false){
                if(backgroundColor === 'rgb(172, 172, 172)'){
                    op.style.backgroundColor = 'rgb(249, 247, 238)';
                    this.selected = false;
                    
                } else if(this.selected===false){
                    op.style.backgroundColor = '#acacac';
                    this.selected = true;
                    this.selectedOp=option;

                }
            }
            
            
        }

    }
  });

app2.mount("#app2");



const app3 = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            selected: false,
            selectedOp: '',
            checked: false, 
            checkBtn: 'COMPROVAR'

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
        
        checkAnswer(option){
            var op = document.getElementById(this.selectedOp);
            var warningDiv = document.getElementById('warning');

            if(this.checked===true){
                this.openPage('./ejercicios4RepasoLvl32.html');
            } else {
                if(this.selectedOp === ''){
                    warningDiv.style.display = 'block';
                } else if(this.selectedOp === option){
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(0, 255, 0)';
                    this.checked = true;
                    this.checkBtn = 'SEGÜENT';
                } else {
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(255, 0, 0)';
                    this.selected = false;
                }
            }
            

        }, getSelected(option){
            var op = document.getElementById(option);
            var computedStyle = window.getComputedStyle(op);
            var backgroundColor = computedStyle.backgroundColor;
            if(this.checked===false){
                if(backgroundColor === 'rgb(172, 172, 172)'){
                    op.style.backgroundColor = 'rgb(249, 247, 238)';
                    this.selected = false;
                    
                } else if(this.selected===false){
                    op.style.backgroundColor = '#acacac';
                    this.selected = true;
                    this.selectedOp=option;

                }
            }
            
            
        }

    }
  });

app3.mount("#app3");


const app4 = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            selected: false,
            selectedOp: '',
            checked: false, 
            checkBtn: 'COMPROVAR'

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
        
        checkAnswer(option){
            var op = document.getElementById(this.selectedOp);
            var warningDiv = document.getElementById('warning');

            if(this.checked===true){
                this.openPage('./ejercicios6RepasoLvl32.html');
            } else {
                if(this.selectedOp === ''){
                    warningDiv.style.display = 'block';
                } else if(this.selectedOp === option){
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(0, 255, 0)';
                    this.checked = true;
                    this.checkBtn = 'SEGÜENT';
                } else {
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(255, 0, 0)';
                    this.selected = false;
                }
            }
            

        }, getSelected(option){
            var op = document.getElementById(option);
            var computedStyle = window.getComputedStyle(op);
            var backgroundColor = computedStyle.backgroundColor;
            if(this.checked===false){
                if(backgroundColor === 'rgb(172, 172, 172)'){
                    op.style.backgroundColor = 'rgb(249, 247, 238)';
                    this.selected = false;
                    
                } else if(this.selected===false){
                    op.style.backgroundColor = '#acacac';
                    this.selected = true;
                    this.selectedOp=option;

                }
            }
            
            
        }

    }
  });

app4.mount("#app4");


const app5 = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            selected: false,
            selectedOp: '',
            checked: false, 
            checkBtn: 'COMPROVAR'

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
        
        checkAnswer(option){
            var op = document.getElementById(this.selectedOp);
            var warningDiv = document.getElementById('warning');

            if(this.checked===true){
                this.openPage('./enhorabonaRepasoLvl32.html');
            } else {
                if(this.selectedOp === ''){
                    warningDiv.style.display = 'block';
                } else if(this.selectedOp === option){
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(0, 255, 0)';
                    this.checked = true;
                    this.checkBtn = 'FINALITZAR';
                } else {
                    warningDiv.style.display = 'none';
                    op.style.backgroundColor = 'rgb(255, 0, 0)';
                    this.selected = false;
                }
            }
            

        }, getSelected(option){
            var op = document.getElementById(option);
            var computedStyle = window.getComputedStyle(op);
            var backgroundColor = computedStyle.backgroundColor;
            if(this.checked===false){
                if(backgroundColor === 'rgb(172, 172, 172)'){
                    op.style.backgroundColor = 'rgb(249, 247, 238)';
                    this.selected = false;
                    
                } else if(this.selected===false){
                    op.style.backgroundColor = '#acacac';
                    this.selected = true;
                    this.selectedOp=option;

                }
            }
            
            
        }

    }
  });

app5.mount("#app5");


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




