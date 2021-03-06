function checkLoginState() {
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response){
	if (response.status === "connected"){
		console.log('Successfully logged in with Facebook');
		FB.api('/me?fields=name,first_name', changeUser);
	}
}

function changeUser(response) {
	console.log(response);
	$('.facebookLogin').hide();
	$('#name').text(response.name);
}