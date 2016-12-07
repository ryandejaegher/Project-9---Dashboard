/*Bar Chart*/

var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)',
                'rgba(115, 119, 190, 1)'
            ]
        }]
    },
    options: {
		title: {
/*            display: true,
            text: 'Daily Traffic',
			position: 'top',
			fullWidth: true,
			fontSize: 14*/
        },
		legend: {
			display: false,
        responsive: true,
		maintainAspectRatio: true,	
        scales: {
			yAxes: [{
                ticks: {
					maxTicksLimit: 5,
                    beginAtZero: true,
                }
            }]
			}	
        }
    }
});


/*Donut Chart*/
var dtx = document.getElementById("donutChart");
var myDoughnutChart = new Chart(dtx, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [{
            data: [50, 100, 300],
            backgroundColor: [
                "#74b1be",
                "#81c98f",
                "#7377be"
            ],
            hoverBackgroundColor: [
                "#74b1be",
                "#81c98f",
                "#7377be"
            ]
        }]
    },
    options: {
        responsive: true,
		maintainAspectRatio: true,	
		title: {
/*            display: true,
            text: 'Mobile Users',
			position: 'top',
			fullWidth: true,
			fontSize: 14*/
        },
		legend: {
			position: 'right',
			fullWidth: true,
			labels: {
				boxWidth: 20,
				padding: 15
			}
		}
    }
});

/*Line Chart*/

var ltx = document.getElementById("lineChart");
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
            label: "Hourly",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(226, 227, 246, 0.4)",
            borderColor: "rgba(190, 191, 236, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(190, 191, 236, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(115, 119, 190, 0.8)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000],
            spanGaps: false,
        },
		{
            label: "Daily",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(226, 227, 246, 0.4)",
            borderColor: "rgba(190, 191, 236, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(190, 191, 236, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(115, 119, 190, 0.8)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [650, 1350, 1100, 1300, 1800, 1700, 1450, 1150, 1450, 2350, 1450, 1000],
            spanGaps: false,
        },
		{
            label: "Weekly",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(226, 227, 246, 0.4)",
            borderColor: "rgba(190, 191, 236, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(190, 191, 236, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(115, 119, 190, 0.8)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [450, 1250, 1000, 1200, 2000, 1900, 1750, 1350, 1750, 2050, 1750, 1500],
            spanGaps: false,
        },
		{
            label: "Monthly",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(226, 227, 246, 0.4)",
            borderColor: "rgba(190, 191, 236, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(190, 191, 236, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(115, 119, 190, 0.8)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 4,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [250, 1250, 1200, 1500, 1100, 1500, 1950, 1250, 1450, 2250, 1550, 2300],
            spanGaps: false,
        }]

    },
    options: {
        responsive: true,
		maintainAspectRatio: true,	
        scales: {
            yAxes: [{
                ticks: {
					maxTicksLimit: 5,
                    beginAtZero: true,
                }
            }]
        }
    }
});