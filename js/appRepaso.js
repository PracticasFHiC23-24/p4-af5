const itemList = [
    {niv: '32', tema: 'Improvisació'},
    {niv: '31', tema: 'Acompanyaments'},
    {niv: '30', tema: 'Arpegis'},
    {niv: '29', tema: 'Poliritmes'},
    {niv: '28', tema: 'Progressions avançades'},
    {niv: '27', tema: 'Ritmes avançats'},
    {niv: '26', tema: 'Ritmes bàsics'},
    {niv: '25', tema: 'Cercle de quintes'},
    {niv: '24', tema: 'Progressions bàsiques'},
    {niv: '23', tema: 'Harmonia avançada'},
    {niv: '22', tema: 'Digitació avançada'},
    {niv: '21', tema: 'Digitació bàsica'},
    {niv: '20', tema: 'Altres escales (II)'},
    {niv: '19', tema: 'Altres escales (I)'},
    {niv: '18', tema: 'Escales pentatòniques'},
    {niv: '17', tema: 'Escales menors'},
    {niv: '16', tema: 'Escales majors'},
    {niv: '15', tema: 'Harmonia negativa'},
    {niv: '14', tema: 'Harmonia bàsica'},
    {niv: '13', tema: 'Invertir acords'},
    {niv: '12', tema: 'Altres acords'},
    {niv: '11', tema: 'Power chords'},
    {niv: '10', tema: 'Acords disminuits'},
    {niv: '9', tema: 'Acords augmentats'},
    {niv: '8', tema: 'Acords menors'},
    {niv: '7', tema: 'Acords majors'},
    {niv: '6', tema: 'Intervals'},
    {niv: '5', tema: 'Sostinguts i bemols'},
    {niv: '4', tema: 'Escala Do major'},
    {niv: '3', tema: 'Llegir partitures'},
    {niv: '2', tema: 'Llegir tablatures'},
    {niv: '1', tema: 'Pentagrama'},
    {niv: '0', tema: 'Introducció'}
]

const app = Vue.createApp({
    data() {
        return {
            mensaje1: 'Hello world',
            mensaje2: 'Mi primer programa con',
            jsF: 'Vue',
            url: 'https://vuejs.org',
            items: itemList,
            rendered: itemList,
            selected: 0
        };
    },
    methods: {
        render(){
            var input= document.getElementsByClassName("search__input")?.[0];
            if(!input.value){
                this.rendered = this.items;
            } else {
                this.rendered = [];
                for (var i=0; i<this.items.length; i++){
                    if (this.items[i].tema.toLowerCase().includes(input.value.toLowerCase())){
                        this.rendered.push(this.items[i]);
                    }
                }
            }
        },
        selectButton(event) {
            var button=document.getElementsByClassName("button")?.[0];
            if (event.target.classList.contains("selected")) {
                event.target.classList.remove("selected");
                this.selected-=1;
                console.log(this.selected);
                if(this.selected==0){
                    button.classList.remove("enabled");
                }
            } else {
                event.target.classList.add("selected");
                this.selected+=1;
                console.log(this.selected);
                if(this.selected==1){
                    button.classList.add("enabled");
                }
            }
        }, 

        mostrarUrl() {
            return this.url;
        },

        openPage(ref) {
            window.location.href = ref;
            console.log();
        }

    }
  });

app.mount("#app");


var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if we're scrolling up, or we haven't passed the header,
     show the header at the top */
  if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
      headerDiv.style.top = "0";
  }
  else{
      /* otherwise we're scrolling down & have passed the header so hide it */
      headerDiv.style.top = "-7.2rem";
  } 

  prevScrollpos = currentScrollPos;
}


document.getElementById('gotoRepas').addEventListener('click', function(event) {


    console.log("hiiiiii");
    if ( document.getElementById('gotoRepas').classList.contains('enabled') ) {
      // Only execute the code if the clicked element has the 'clickable' class
      console.log("holaaaaaaa");

      window.location.href = "./teoria1Repaso.html";
      
      // You can perform further actions here
    }
  });