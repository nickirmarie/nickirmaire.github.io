// As a User
// When I click on the button
// I want the header to bounce

// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button
				


				// $("#shrink").click(shrinkEarth);

				// function shrinkEarth(){
				//   $("img").animate({
				//     width: 50,
				//   },500)
				// }


// As a User
// When I click the button
// I want to see the globe move to the right of the screen

				// $("#animate-me").click(moveEarth);

				// function moveEarth(){
				//   $("img").animate({
				//     right: 400,
				//   },500)
				// }


// var right = $("#animate-me").click(moveEarth)
// if(right=400){
// 	$("img").animate({
//     left: 400,
// 	}


// As a User
// When I click the button again
// I want the globe to return

$("#animate-me").click(function(){
	$("h1").addClass("animated bounce infinite");
	

	var right= $("img").css("right")

	if(right == "0px"){
		$("img").animate({
		right: 273,
	})
		//move back
	} else{
		$("img").animate({
		right: 0,
	})
	}
})

$("#shrink").click(function(){
	$("img").animate({
		width: 10,
	})
})
// $("#shrink").click(function(){
// 	$("img").addClass("shrunk")
// })
// had to make the fuction shrunk in the css