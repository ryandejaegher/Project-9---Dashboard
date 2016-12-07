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
