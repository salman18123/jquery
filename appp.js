$(document).ready(function(){
	
	$("#main").hide();
	$("#submain").hide();
	$("#data").hide();
	function getFacebookInfo(){

	var myFacebookToken="EAACEdEose0cBAB5BTr90t0JFUuHReesyEtjqjWAg3bk0ptQlsyfyzA5RTVDJf003qDqTyQFgKk9YTi5DzYwYgzlULgEpeZAhNW7S2ZCo4fQ65m5MZAZAVZCW5hmhXn6Nh1inyVIU1QHdkfWQxZCZBwxb4l7KIKB1GxoOV1DmkRBZCD9AVROgQiFJFq5dFxRYosQZD";
	$.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
		success : function(response){

			console.log(response);
			console.log(typeof(response));
			$("#myName").text(response.first_name);
			$("#myGender").text(response.gender);
			$("#myHomeTown").text(response.hometown.name);
			$("#school").text(response.education[1].school.name);
			$("#secSchool").text(response.education[5].school.name);
			$("#University").text(response.education[2].school.name);
			$("#main").show();
			$("#data").show();
		}



	}

	);
}




	$("#1").on('click',getFacebookInfo);
	$("#data").click(function(){

		$("#main").hide();
		$("#data").hide();
	})
	

})