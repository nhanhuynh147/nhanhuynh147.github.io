
x=100;
y=-300;
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