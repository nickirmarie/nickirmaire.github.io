// As a User
// When I see the nav bar on desktop
// There is no burger (only Home/About/Contact/Blog)

// As a User
// When I see the nav bar on mobile
// I see a burger

// As a User
// When I click the burger
// I see the nav appear below the header

// As a User
// When I click the burger again
// I see the nav hide

$("#burger").click(toggleNav);

function toggleNav(){
 $("#mobile-nav-items").slideToggle();

	}

	$(window).resize(hideNav);
	function hideNav(){
		console.log(width)

		var width = $(window).width();
		if (width >1024){
			$("#mobile-nav-items").hide();
		}
		//when the width is greater than 1024px
		// hid the mobile nav
	}

	//slide toggle changes display inline - set css (that isn't being over riddin)