const itemList = [
    {niv: '32', tema: 'Pentagrama'},
    {niv: '31', tema: 'Pentagrama'},
    {niv: '30', tema: 'Pentagrama'},
    {niv: '29', tema: 'Pentagrama'},
    {niv: '28', tema: 'Pentagrama'},
    {niv: '27', tema: 'Pentagrama'},
    {niv: '26', tema: 'Pentagrama'},
    {niv: '25', tema: 'Pentagrama'},
    {niv: '24', tema: 'Pentagrama'},
    {niv: '23', tema: 'Pentagrama'},
    {niv: '22', tema: 'Pentagrama'},
    {niv: '21', tema: 'Pentagrama'},
    {niv: '20', tema: 'Pentagrama'},
    {niv: '19', tema: 'Pentagrama'},
    {niv: '18', tema: 'Pentagrama'},
    {niv: '17', tema: 'Pentagrama'},
    {niv: '16', tema: 'Pentagrama'},
    {niv: '15', tema: 'Harmonia negativa'},
    {niv: '14', tema: 'Pentagrama'},
    {niv: '13', tema: 'Pentagrama'},
    {niv: '12', tema: 'Pentagrama'},
    {niv: '11', tema: 'Pentagrama'},
    {niv: '10', tema: 'Pentagrama'},
    {niv: '9', tema: 'Pentagrama'},
    {niv: '8', tema: 'Pentagrama'},
    {niv: '7', tema: 'Pentagrama'},
    {niv: '6', tema: 'Pentagrama'},
    {niv: '5', tema: 'Pentagrama'},
    {niv: '4', tema: 'Pentagrama'},
    {niv: '3', tema: 'Pentagrama'},
    {niv: '2', tema: 'Pentagrama'},
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