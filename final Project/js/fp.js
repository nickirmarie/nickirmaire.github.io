//text to appear 
//accordian 

$(".row").click(toggle);

function toggle (event){
	var wrapper = $(event.currentTarget).find(".wrapper");

	if(wrapper.is(":visible")) {
		wrapper.slideUp("slow");
	}else{
		wrapper.show();
	}
