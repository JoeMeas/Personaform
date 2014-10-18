
(function(){

	//Load  Facebook API
	window.fbAsyncInit = function() {
		FB.init({
		appId      : '793098777421131',
		xfbml      : true,
		version    : 'v2.1'
		status     : true
		alert("taco poop");
		});
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	//Handles Facebook login
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			console.log('Logged in.');
		}
		else {
			FB.login();
		}
	});
	
	//Make query to Facebook for JSON data with set fields
	function jsonQuery(){
		new Ajax.Request("https://graph.facebook.com/search?q=QUERY&type=OBJECT_TYPE", 
			{
				method: "GET:,
				onSucesss: ajaxSuccess,
				onFailure: ajaxFailed,
				onException: ajaxFailed
			}
		);
	}
	
	//On successful JSON pull, do THINGS
	function ajaxSucess(ajax){
		var data = JSON.parse(ajax.responseText);
	}

	
})();