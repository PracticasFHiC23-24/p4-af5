const itemList = [
    {tema: 'Guitarra 🎸'},
    {tema: 'Solfeig ♪'},
    {tema: 'Piano 🎹'}
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


document.getElementById('afegeix').addEventListener('click', function(event) {


    
    if ( document.getElementById('afegeix').classList.contains('enabled') ) {
      // Only execute the code if the clicked element has the 'clickable' class

      window.location.href = "./pinicioNewUser.html";
      
      // You can perform further actions here
    }
  });
