	var hourlyButton = document.getElementById('hourly-button');
	var dailyButton = document.getElementById('daily-button');
	var weeklyButton = document.getElementById('weekly-button');
	var monthlyButton = document.getElementById('monthly-button');
	
	var hourly = document.getElementById('hourly');
	var daily = document.getElementById('daily');
	var weekly = document.getElementById('weekly');
	var monthly = document.getElementById('monthly');

function validateForm() {
	var x=document.forms["myForm"]["fname"].value;
	
	if (x==null || x=="")
		{
			alert("Please choose a user");
			return false;
		}
	
	var y=document.forms["myForm"]["fmessage"].value;
	
	if (y==null || y=="")
		{
			alert("Please write a message");
			return false;
		}
}

function myFunction() {
	//Get the snackbar DIV
	
		var x=document.forms["myForm"]["fname"].value;
	
	if (x==null || x=="")
		{
			alert("Please choose a user");
			return false;
		}
	
	var y=document.forms["myForm"]["fmessage"].value;
	
	if (y==null || y=="")
		{
			alert("Please write a message");
			return false;
		}
	
	var z = document.getElementById("snackbar")
	
	//add the "show" class to DIV
	z.className = "show";
	
	//After 3 seconds, remove the show class from DIv
	setTimeout(function() {z.className = z.className.replace("show", ""); }, 2000);
	
	var form = document.forms["myForm"];
	form.reset();
}

document.getElementById("form-button").addEventListener("click", function() {
	event.preventDefault()
});


function badgeRemove() {
	var x = document.getElementById('alert');
	var y = document.getElementById('badge');
		if (x.style.display = 'none') {
			y.className = '';
		}
}

function showHourly(){
	hourlyButton.classList.add('selected');
	dailyButton.classList.remove('selected');
	weeklyButton.classList.remove('selected');
	monthlyButton.classList.remove('selected');
	
	hourly.classList.add('show-chart');	
	hourly.classList.remove('hide-chart');
	
	daily.classList.add('hide-chart');
	daily.classList.remove('show-chart');
	
	weekly.classList.add('hide-chart');
	weekly.classList.remove('show-chart');
	
	monthly.classList.add('hide-chart');
	monthly.classList.remove('show-chart');
}

function showDaily(){
	hourlyButton.classList.remove('selected');
	dailyButton.classList.add('selected');
	weeklyButton.classList.remove('selected');
	monthlyButton.classList.remove('selected');
	
	hourly.classList.add('hide-chart');	
	hourly.classList.remove('show-chart');
	
	daily.classList.add('show-chart');
	daily.classList.remove('hide-chart');
	
	weekly.classList.add('hide-chart');
	weekly.classList.remove('show-chart');
	
	monthly.classList.add('hide-chart');
	monthly.classList.remove('show-chart');
}

function showWeekly(){
	hourlyButton.classList.remove('selected');
	dailyButton.classList.remove('selected');
	weeklyButton.classList.add('selected');
	monthlyButton.classList.remove('selected');
	
	hourly.classList.add('hide-chart');	
	hourly.classList.remove('show-chart');
	
	daily.classList.add('hide-chart');
	daily.classList.remove('show-chart');
	
	weekly.classList.add('show-chart');
	weekly.classList.remove('hide-chart');
	
	monthly.classList.add('hide-chart');
	monthly.classList.remove('show-chart');
}

function showMonthly(){
	hourlyButton.classList.remove('selected');
	dailyButton.classList.remove('selected');
	weeklyButton.classList.remove('selected');
	monthlyButton.classList.add('selected');
	
	hourly.classList.add('hide-chart');	
	hourly.classList.remove('show-chart');
	
	daily.classList.add('hide-chart');
	daily.classList.remove('show-chart');
	
	weekly.classList.add('hide-chart');
	weekly.classList.remove('show-chart');
	
	monthly.classList.add('show-chart');
	monthly.classList.remove('hide-chart');
};

/*function showDaily() {
	$('#hourly-button').removeClass('selected');
	$('#daily-button').addClass('selected');
	$('#weekly-button').removeClass('selected');
	$('#monthly-button').removeClass('selected');
	
	$('#hourly').addClass('hide-chart');
	$('#hourly').removeClass('show-chart');
	$('#daily').removeClass('hide-chart');
	$('#daily').addClass('show-chart');	$('#weekly').removeClass('show-chart');
	$('#weekly').addClass('hide-chart');	$('#monthly').removeClass('show-chart');
	$('#monthly').addClass('hide-chart');
}*/

