/*   
Theme Name: Stellartronic
Theme URL: http://dcjwest.github.io/
Description: Hand-crafted portfolio website
Author: David van der Westhuizen
Copyright (c) 2018 David van der Westhuizen
*/

$(function(){

	// Initialise slideshow variables
	var slides = $('#slideshow>li');
	var currentImgIndex = 0;
	var imgCache = [];

	// Use IIFE to preload and cache images
	(function slidesPreloader(){
		console.log('preloader fired!', currentImgIndex);
		if (currentImgIndex < slides.length){
			// Load images
			imgCache[currentImgIndex] = new Image();
			imgCache[currentImgIndex].src = slides.eq(currentImgIndex).find('img').attr('src');
			imgCache[currentImgIndex].onload = function(){
				currentImgIndex++;
				slidesPreloader();
			}
		}
		else {
			// Initial run to display slideshow properly
			currentImgIndex = 0;
			for (var i = 0; i < slides.length; i++){
				console.log('looping slides!', currentImgIndex);
				slides.eq(currentImgIndex).fadeIn(100).fadeOut(100);
				currentImgIndex < slides.length - 1? currentImgIndex++ : currentImgIndex = 0;

			}
			// Play slideshow
			runSlideShow();
		}
	}());

	function runSlideShow(){
		console.log('slideshow fired!', currentImgIndex);
		slides.eq(currentImgIndex).fadeIn(400).delay(3000).fadeOut(400, function(){
			currentImgIndex < slides.length - 1? currentImgIndex++ : currentImgIndex = 0;
			runSlideShow();
		})
	}

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
});