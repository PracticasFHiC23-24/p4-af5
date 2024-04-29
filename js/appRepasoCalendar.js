
// Agrupar los elementos de itemList por fecha

const app = Vue.createApp({
    data() {
      return {
        itemList: [
          { niv: '32', tema: 'Improvisació', data: "28/04/24" },
          { niv: '31', tema: 'Acompanyaments', data: "28/04/24" },
          { niv: '30', tema: 'Arpegis', data: "25/04/24" },
          { niv: '29', tema: 'Poliritmes', data: "25/04/24" },
          { niv: '28', tema: 'Progressions avançades', data: "25/04/24" },
          { niv: '27', tema: 'Ritmes avançats', data: "22/04/24" },
          { niv: '26', tema: 'Ritmes bàsics', data: "22/04/24" },
          { niv: '25', tema: 'Cercle de quintes', data: "18/04/24" },
          { niv: '24', tema: 'Progressions bàsiques', data: "18/04/24" },
          { niv: '23', tema: 'Harmonia avançada', data: "10/04/24" },
          { niv: '22', tema: 'Digitació avançada', data: "04/04/24" },
          { niv: '21', tema: 'Digitació bàsica', data: "01/04/24" },
          { niv: '20', tema: 'Altres escales (II)', data: "22/03/24" },
          { niv: '19', tema: 'Altres escales (I)', data: "22/03/24" },
          { niv: '18', tema: 'Escales pentatòniques', data: "22/03/24" },
          { niv: '17', tema: 'Escales menors', data: "18/03/24" },
          { niv: '16', tema: 'Escales majors', data: "18/03/24" },
          { niv: '15', tema: 'Harmonia negativa', data: "18/03/24" },
          { niv: '14', tema: 'Harmonia bàsica', data: "14/03/24" },
          { niv: '13', tema: 'Invertir acords', data: "14/03/24" },
          { niv: '12', tema: 'Altres acords', data: "13/03/24" },
          { niv: '11', tema: 'Power chords', data: "13/03/24" },
          { niv: '10', tema: 'Acords disminuits', data: "13/03/24" },
          { niv: '9', tema: 'Acords augmentats', data: "13/03/24" },
          { niv: '8', tema: 'Acords menors', data: "11/03/24" },
          { niv: '7', tema: 'Acords majors', data: "11/03/24" },
          { niv: '6', tema: 'Intervals', data: "11/03/24" },
          { niv: '5', tema: 'Sostinguts i bemols', data: "10/03/24" },
          { niv: '4', tema: 'Escala Do major', data: "10/03/24" },
          { niv: '3', tema: 'Llegir partitures', data: "10/03/24" },
          { niv: '2', tema: 'Llegir tablatures', data: "10/03/24" },
          { niv: '1', tema: 'Pentagrama', data: "10/03/24" },
          { niv: '0', tema: 'Introducció', data: "10/03/24" }
        ],
        selected: false
      };
    },
    computed: {
        groupedItemsArray() {
          // Agrupa los elementos de itemList por fecha
          const groupedItems = {};
          this.itemList.forEach(item => {
            if (!groupedItems[item.data]) {
              groupedItems[item.data] = [];
            }
            groupedItems[item.data].push(item);
          });
          // Convierte el objeto en un array
          return Object.values(groupedItems);
        }
      },
    methods: {
    
      selectButton(event) {
        var button = document.getElementById("btn_final");
        let niv_clic = parseInt(event.target.id);
        let niv = parseInt(this.itemList[0].niv);
        while(niv_clic<=niv){
            document.getElementById(niv.toString()).classList.add("selected");
            niv--;
        }
        let trobat= false;
        while(!trobat && niv >=0){
            if(document.getElementById(niv.toString()).classList.contains("selected")){
                document.getElementById(niv.toString()).classList.remove("selected");
                niv--;
            }
            else{
                trobat= true;
            }
        }
        if(!this.selected){
            this.selected = true;
            button.classList.add("enabled");
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
  
  app.mount("#calendar");



let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let selected = new Set();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document
    .querySelector(".calendar-current-date");
 
const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
const months = [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Augost",
    "Setembre",
    "Octubre",
    "Novembre",
    "Desembre"
];

// Function to generate the calendar
const manipulate = () => {
 
    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();
    if(dayone == 0){
        dayone = 7;
    }
 
    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
 
    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();
    if(dayend == 0){
        dayend = 7;
    }
 
    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();
 
    // Variable to store the generated calendar HTML
    let lit = "";
 
    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 1; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 2}</li>`;
    }
 
    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
 
        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";

        let isSelected =  selected.has(year.toString()+month.toString()+i.toString())
            ? "selected"
            : "";
        //fem això perquè es puguin seleccionar les dates
        let id = new Date(year, month, i).toDateString();
        lit += `<li id="${id}" class="${isToday} ${isSelected}" onclick="handleClick(id)">${i}</li>`;
    }
 
    // Loop to add the first dates of the next month
    for (let i = dayend; i < 7; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }
 
    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;
 
    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}
 
manipulate();

//mètode per seleccionar dates fins l'actual
function handleClick(id){
    var date_element = new Date(id);
    let current_date = new Date();
    let btn = document.getElementById("btn_final");
    selected.clear();
    if (date_element <= current_date){
        while(date_element <= current_date){
            selected.add(date_element.getFullYear().toString()+date_element.getMonth().toString()+date_element.getDate().toString());
            date_element= new Date(date_element.getFullYear(), date_element.getMonth(), date_element.getDate()+1);
        }
        btn.classList.add("enabled");

    }
    else{
        btn.classList.remove("enabled");
    }
    manipulate();
    
}
 
// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
 
    // When an icon is clicked
    icon.addEventListener("click", () => {
 
        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
 
        // Check if the month is out of range
        if (month < 0 || month > 11) {
 
            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());
 
            // Set the year to the new year
            year = date.getFullYear();
 
            // Set the month to the new month
            month = date.getMonth();
        }
 
        else {
 
            // Set the date to the current date
            date = new Date();
        }
 
        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});