var total = 0;

var out =document.querySelector("#out")
// +10

$("#a10").click(addTen)

function addTen() {
	total = total + 10;
	out.innerHTML = total;
}

// +20

$("#a20").click(addTwenty)

function addTwenty() {
	total = total + 20;
	out.innerHTML = total;
}

// +30

$("#a30").click(addThirty)

function addThirty() {
	total = total + 30;
	out.innerHTML = total;
}

// -10
$("#n10").click(subtractTen)

function subtractTen() {
	total = total - 10;
	out.innerHTML = total;
}


// -20
$("#n20").click(subtractTwenty)

function subtractTwenty() {
	total = total - 20;
	out.innerHTML = total;
}

// -30
$("#n30").click(subtractThirty)

function subtractThirty() {
	total = total - 30;
	out.innerHTML = total;
}

// red
$("#red").click(turnRed)

function turnRed() {
	out.style.background = "red";
}

// blue
$("#blue").click(turnBlue)

function turnBlue() {
	out.style.background = "blue";
}

// reset
$("#out").click(reset)

function reset() {
	total = 0;

	out.innerHTML = total;
	out.style.background = "white";
}
