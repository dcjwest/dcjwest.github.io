/*   
Theme Name: Stellartronic
Theme URL: http://dcjwest.github.io/
Description: Hand-crafted portfolio website
Author: David van der Westhuizen
Copyright (c) 2018 David van der Westhuizen
*/

$(function(){

	// Initialise slideshow variables
	var proPic = $('#slider');
	var picArr = [
		'images/slider/david-mj.jpg',
		'images/slider/david-dance.jpg',
		'images/slider/david-bboy.jpg',
		'images/slider/david-ladybug.jpg',
		'images/slider/david-mtn.jpg',
		'images/slider/david-dog.jpg'
		];
	var currentPicIndex = 0;

	// Change slideshow pic every 4 seconds
	function togglePic(){
		currentPicIndex++;
		proPic.fadeOut(400);
		if (currentPicIndex == picArr.length){currentPicIndex = 0;}
		
		setTimeout(function(){
			proPic.attr('src', picArr[currentPicIndex]);
		}, 400);
		proPic.fadeIn(400);
	}

	setTimeout(setInterval(togglePic, 4000), 5000);

	// Tooltip pop-up events
	$('#emailBtn').on('click', updateToolTip);
	$('#email').on('mouseleave', resetToolTip);

	// Show / Hide tooltip functions
	function updateToolTip(event){
		copyToClipboard();
		$('.tooltip').css({'background-color':'#A5FF7F', 'color': '#000'}).html('Yay! My email address has been copied to your clipboard &#10004;');
		$('.tooltip').addClass('clicked');
		event.preventDefault();
	}

	function resetToolTip(event){
		$('.tooltip').css({'background-color':'#000', 'color': '#fff'}).html('Click to copy my email address to your clipboard! &#9786;');
		$('.tooltip').removeClass('clicked');
		event.preventDefault();
	}

	//Copy email address to clipboard after clicking email icon
	function copyToClipboard(){
		$('#myEmail').select();
		document.execCommand("copy");
	}

	// Move scroll position to top of page after refresh
	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}
});