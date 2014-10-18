(function(){
	//Load  Facebook API
	window.fbAsyncInit = function() {
		FB.init({appId : '793098777421131', xfbml : true, version : 'v2.1'});
				
		FB.getLoginStatus(function(response){
			FB.ui({method: 'share', href: 'http://students.washington.edu/dsa4//personify.html'}, function(response){});
			if(response.status === 'connected'){
				FB.api('me/friends', function (response) {
					if (response && !response.error) {
						console.log(response);
						var dataDiv = document.getElementById('data');
						var data = document.createElement('p');
						data.innerHTML = response['data'].id;
						dataDiv.appendChild(data);
					}else{
						FB.login();
					}
				});
			}
		})
	};
	
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
})();
