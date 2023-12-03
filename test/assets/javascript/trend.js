var btnList = document.querySelectorAll('button')
const filter = document.querySelectorAll('.container__container-filter-button')
/////////////// Daily-Monthly
function ActiveButton(btnActive){
    btnList.forEach(btn=>{
        btn.classList.remove('active')
    })
    btnActive.classList.add('active')
}
btnList.forEach(btn=>{
    btn.addEventListener('click',e=>{
        // console.log(e.currentTarget.getAttribute('type'));
        ActiveButton(e.currentTarget);
    })
})
////// Device list
const select_device = document.querySelector(".device__select");
const options_list_device = document.querySelector(".device__options-list");
const options_device = document.querySelectorAll(".device__option");
select_device.addEventListener("click", () => {
    options_list_device.classList.toggle("active");
  });

  //select option
  options_device.forEach((option_device) => {
      option_device.addEventListener("click", () => {
          options_device.forEach((option_device) => {option_device.classList.remove('selected')});
          option_device.classList.add("selected");
          select_device.querySelector("span").innerHTML = option_device.innerHTML;
          options_list_device.classList.toggle("active");
    });
  });



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','hello'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 12],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            tension:0
        },
        {
            label: '# of Votes',
            data: [0, 2, 3, 10, 25, 31, 12],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
                'rgba(155, 159, 64, 1)'
            ],
            borderWidth: 3,
            tension:0
        }
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

