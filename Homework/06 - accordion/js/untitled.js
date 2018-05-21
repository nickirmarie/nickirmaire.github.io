// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$("#first").click(firstPicture);
$("#second").click(changeImage);
$("#third").click(thirdPicture);
$("#fourth").click(fourthPicture);

function changeImage(event){
	var newSrc = $(event.currentTarget).attr("src");

$("#bigimage").attr("src",newSrc);
}


function secondPicture(){
$("#bigimage").attr("src","img/2.jpg");
}


function thirdPicture(){
$("#bigimage").attr("src","img/3.jpg");
}

function fourthPicture(){
$("#bigimage").attr("src","img/4.jpg");
}
