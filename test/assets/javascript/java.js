const sc = document.querySelector('#container__content-body-clock-mn');
const sr = document.querySelector('#container__content-body-clock-mn2');
x=200;
y=-300;

function rotatefinger (){
    let scdeg = 300/1000*x-150;
    let srdeg = 150/500*y;
    sc.style.transform = 'rotateZ('+ String(scdeg) +'deg)';
    // sr.style.transform = 'rotateZ('+ String(srdeg)  +'deg)';
}
setInterval(rotatefinger(), 1000);


document.getElementById('idcard').addEventListener('click', function(){
    if (document.getElementById('frame__login').style.display.endsWith('none') ) {
        // frame_login_js.style.display = 'block';
        document.getElementById('frame__login').style.display = 'block';
    }
    else {  
        // frame_login_js.style.display = 'block';
        document.getElementById('frame__login').style.display = 'none';
    }
});

const select = document.querySelector(".language__select");
const options_list = document.querySelector(".language__options-list");
const options = document.querySelectorAll(".language__option");

    //show & hide options list
    select.addEventListener("click", () => {
      options_list.classList.toggle("active");
      select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });

    //select option
    options.forEach((option) => {
        option.addEventListener("click", () => {
            options.forEach((option) => {option.classList.remove('selected')});
            option.classList.add("selected");
            select.querySelector("span").innerHTML = 'Language: '+option.innerHTML;
            select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
            options_list.classList.toggle("active");
      });
    });
var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","Febuary","March","April","May","Jun","July","August","September","October","November","December"];
var date= new Date();
document.getElementById("Date").innerHTML = days[date.getDay()]+', '+ date.getDate()+' '+month[date.getMonth()]+', '+date.getFullYear();