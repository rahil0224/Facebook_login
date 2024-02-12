document.getElementById('signup-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	var displayData = 'First name: ' + fname + '<br>' +
					  'Last name: ' + lname + '<br>' +
					  'Email: ' + email + '<br>' +
					  'Password: ' + password;

	document.getElementById('display-data').innerHTML = displayData;
});