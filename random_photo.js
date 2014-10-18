window.onload = function() {
	$.ajax({
  url: 'http://api.randomuser.me/',
  dataType: 'json',
  success: function(data){
    console.log(data);

 }})

  // when submit is pressed
  var button = $("#submit");
  button.on("click", getDem );

  function getDem() {
  	console.log("hello");
  	//get gender
  	var gender = "female";
  	if ($("#m").prop("checked")) {
  		gender = "male"
  	}
  	getUser(gender) ;
  	//get age range
  	var agemin = $("#agemin").val();
  	var agemax = $("#agemax").val();
  }
  // try until age within range

  function getUser(gender) {
  		gender = gender || "female";
  		$.ajax({
  		url: 'http://api.randomuser.me/' + "?gender=" + gender,
 		dataType: 'json',
  		success: function(data){
   		console.log(data);
   		console.log()

   		$("#persona_pic").prop("src", data.results[0].user.picture.medium);
   		$("")
   		var age = 
   		var occupation = 
   		

  }})
  	}
  // insert photo into placeholder
};