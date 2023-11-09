

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

