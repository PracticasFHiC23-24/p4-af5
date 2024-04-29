const itemList = [
    {niv: '32', tema: 'Improvisació', data: "28/04/24"},
    {niv: '31', tema: 'Acompanyaments', data: "28/04/24"},
    {niv: '30', tema: 'Arpegis', data: "25/04/24"},
    {niv: '29', tema: 'Poliritmes',data: "25/04/24"},
    {niv: '28', tema: 'Progressions avançades', data: "25/04/24"},
    {niv: '27', tema: 'Ritmes avançats', data: "22/04/24"},
    {niv: '26', tema: 'Ritmes bàsics', data: "22/04/24"},
    {niv: '25', tema: 'Cercle de quintes', data: "18/04/24"},
    {niv: '24', tema: 'Progressions bàsiques', data: "18/04/24"},
    {niv: '23', tema: 'Harmonia avançada', data: "10/04/24"},
    {niv: '22', tema: 'Digitació avançada', data: "04/04/24"},
    {niv: '21', tema: 'Digitació bàsica', data: "01/04/24"},
    {niv: '20', tema: 'Altres escales (II)', data: "22/03/24"},
    {niv: '19', tema: 'Altres escales (I)', data: "22/03/24"},
    {niv: '18', tema: 'Escales pentatòniques', data: "22/03/24"},
    {niv: '17', tema: 'Escales menors', data: "18/03/24"},
    {niv: '16', tema: 'Escales majors', data: "18/03/24"},
    {niv: '15', tema: 'Harmonia negativa', data: "18/03/24"},
    {niv: '14', tema: 'Harmonia bàsica', data: "14/03/24"},
    {niv: '13', tema: 'Invertir acords', data: "14/03/24"},
    {niv: '12', tema: 'Altres acords', data: "13/03/24"},
    {niv: '11', tema: 'Power chords', data: "13/03/24"},
    {niv: '10', tema: 'Acords disminuits', data: "13/03/24"},
    {niv: '9', tema: 'Acords augmentats', data: "13/03/24"},
    {niv: '8', tema: 'Acords menors', data: "11/03/24"},
    {niv: '7', tema: 'Acords majors', data: "11/03/24"},
    {niv: '6', tema: 'Intervals', data: "11/03/24"},
    {niv: '5', tema: 'Sostinguts i bemols', data: "10/03/24"},
    {niv: '4', tema: 'Escala Do major', data: "10/03/24"},
    {niv: '3', tema: 'Llegir partitures', data: "10/03/24"},
    {niv: '2', tema: 'Llegir tablatures', data: "10/03/24"},
    {niv: '1', tema: 'Pentagrama', data: "10/03/24"},
    {niv: '0', tema: 'Introducció', data: "10/03/24"}
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

      window.location.href = "./teoria1Repaso.html";
      
      // You can perform further actions here
    }
  });