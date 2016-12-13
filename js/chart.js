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

var ltx = document.getElementById("lineHourly");
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
    labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"],
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
        }]

    },
    options: {
        responsive: true,
		legend: {
			display: false,
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

var ltx = document.getElementById("lineDaily");
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
    labels: ["01/01", "01/02", "01/03", "01/04", "01/05", "01/06", "01/07", "01/08"],
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
            data: [750, 1250, 1500, 1800, 1000, 1300, 1450, 1250],
            spanGaps: false,
        }]

    },
    options: {
        responsive: true,
		legend: {
			display: false,
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

var ltx = document.getElementById("lineWeekly");
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
    labels: ["1-7", "8-15", "16-23", "24 - 31"],
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
        }]

    },
    options: {
        responsive: true,
		legend: {
			display: false,
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

var ltx = document.getElementById("lineMonthly");
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
    labels: ["January", "February", "March", "April", "May", "June"],
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
        }]

    },
    options: {
        responsive: true,
		legend: {
			display: false,
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