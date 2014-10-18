(function(){
	//Load  Facebook API
	window.fbAsyncInit = function() {
		FB.init({appId : '793098777421131', xfbml : true, version : 'v2.1'});
				//http://students.washington.edu/dsa4/personafy.html
		FB.getLoginStatus(function(response){
			FB.ui({method: 'share', href: 'http://students.washington.edu/dsa4/personafy.html'}, function(response){});
			if(response.status === 'connected'){
				FB.api('me?fields=likes, location', function (response) {
					if (response && !response.error) {
						console.log(response['likes']);
						var likes = response['programming', 'requirements analysis', 'boating', 'coming home after a long day at work', 'cooking']
						return likes;
						//var dataDiv = document.getElementById('data');
						//var data = document.createElement('p');
						//data.innerHTML = response['location'].name;
						//dataDiv.appendChild(data);
						//$.post('http://localhost/personaform/personaStorage.php', {data: response});
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
