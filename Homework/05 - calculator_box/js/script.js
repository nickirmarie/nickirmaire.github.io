var out = document.querySelector("#out");

function redBox(){
	out.style.background="red";
}
document.querySelector("#red").onclick= redBox;


function blueBox(){
	out.style.background = 'blue'; 
}
document.querySelector("#blue").onclick= blueBox;


function plusTen (){
 	out.innerHTML = (parseInt(out.innerHTML) + 10);
}
document.querySelector("#a10").onclick= plusTen;

function plusTwenty (){
	out.innerHTML = (parseInt(out.innerHTML) + 20);
}
document.querySelector("#a20").onclick= plusTwenty;


function plusThirty (){
	out.innerHTML = (parseInt(out.innerHTML) + 30);
}
document.querySelector("#a30").onclick= plusThirty;


function minusTen (){
 	out.innerHTML = (parseInt(out.innerHTML) - 10);
}
document.querySelector("#n10").onclick= minusTen;

function minusTwenty (){
	out.innerHTML = (parseInt(out.innerHTML) - 20);
}
document.querySelector("#n20").onclick= minusTwenty;


function minusThirty (){
	out.innerHTML = (parseInt(out.innerHTML) - 30);
}
document.querySelector("#n30").onclick= minusThirty;

function resetBox (){
	out.innerHTML = ("0");
	out.style.background = "white";
}
out.onclick= resetBox

// Clicking on a "plus" box adds to the total in the center
// Clicking on a "minus" box subtracts from the total
// Clicking the red box makes the background of the center box to red
// Clicking the blue box makes the background of the center box to blue
// Clicking the center box will make its background white and reset the value inside to zero