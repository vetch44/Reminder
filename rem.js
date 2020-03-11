const wybor = document.getElementById('wybierz');
const pol = document.getElementById("pol");
const wui = document.getElementById("wui");
const wynik = document.getElementById("wynik");

let data = new Date();
let dzien = data.getUTCDate();
let wybrano = [];

pol.addEventListener('click', ala = () => {
    let strUser = wybor.options[wybor.selectedIndex].value
    wybrano.push(strUser)
wui.classList.add('hide')
alarm()})
;

const alarm = () => {
    let wy = wybrano-dzien;
    let tw = dzien-wybrano;
    if (wy===0){
      wynik.classList.remove('hide')
        wynik.innerText="Wyrzuć śmieci"  }
    else if (wybrano>dzien){wynik.classList.remove('hide')
    wynik.innerHTML="Wyrzuć śmieci za " + wy + " dni"}
    
    else if (dzien>wybrano){wynik.classList.remove('hide')
    wynik.innerHTML= "W tym miesiącu śmieci zostały już wyrzucone " +tw + " dni temu"
    }}