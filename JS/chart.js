var ctx = document.getElementById("myChart");

var color1 = [];

for(let i = 0; i <= tiers; i++){     
    color1.push('rgba(54, 162, 235, 0.2)');
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ranges,
        datasets: [{
            label: 'Players',
            data: counts,
            backgroundColor: color1,
            borderColor: color1,
            borderWidth: 5
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
