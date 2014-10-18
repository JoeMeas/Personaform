window.onload = function() {
/*	$.ajax({
  url: 'http://api.randomuser.me/',
  dataType: 'json',
  success: function(data){
    console.log(data);

 }})*/

  // when submit is pressed
  var button = $("#submit");
  button.on("click", getDem );

  var save = $("#save");
  button.on("click", savePersona);

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
  function savePersona() {
  	// rip html
  	// write to save page
  	// put image in user generated profiles
  	
  }

  function getUser(gender) {
  		gender = gender || "female";
  		$.ajax({
  		url: 'http://api.randomuser.me/' + "?gender=" + gender,
 		dataType: 'json',
  		success: function(data){
   		console.log(data);
   		console.log()

   		$("#persona_pic").prop("src", data.results[0].user.picture.medium);
   		$("#big_name").html(data.results[0].user.name.first + " " +  data.results[0].user.name.last);
   		$("#name").html(data.results[0].user.name.first + " " +  data.results[0].user.name.last);
   		var age = new Date(parseInt(data.results[0].user.dob));
   		$("#age").html(2014 - age.getFullYear());
   		$("#gender").html(gender);
   		/*var occupation =*/ 
   		

  }})
  	}
  // insert photo into placeholder
};