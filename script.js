/*   
Theme Name: Stellartronic
Theme URL: http://dcjwest.github.io/
Description: Hand-crafted portfolio website
Author: David van der Westhuizen
Copyright (c) 2018 David van der Westhuizen
*/

$(function(){
	// Initialise variables
	const app = $('#app');
	const loader = $('#loader');
	const slides = $('#slideshow>li');
	let currentImgIndex = 0;
	let imgCache = [];

	loader.removeClass('hidden');
	app.css("display", "none");
	window.scrollTo(0, 0);

	// Hide loader screen after animation completes and show website
	setTimeout(() => {
		loader.addClass("hidden");
		app.css("display", "block");
	}, 4000);

	// IIFE to preload and cache slider images
	(function slidesPreloader(){
		if (currentImgIndex < slides.length){
			// Load images
			imgCache[currentImgIndex] = new Image();
			imgCache[currentImgIndex].src = slides.eq(currentImgIndex).find('img').attr('src');
			imgCache[currentImgIndex].onload = function(){
				currentImgIndex++;
				slidesPreloader(); // Recursively call preloader until all images are cached
			}
		}
		else {
			// Initial run to display slideshow properly
			currentImgIndex = 0;

			for (let i = 0; i < slides.length; i++){
				slides.eq(currentImgIndex).fadeIn(100).fadeOut(100);
				currentImgIndex < slides.length - 1? currentImgIndex++ : currentImgIndex = 0;
			}
			runSlideShow();
		}
	}());

	function runSlideShow(){
		slides.eq(currentImgIndex).fadeIn(400).delay(3000).fadeOut(400, function(){
			currentImgIndex < slides.length - 1? currentImgIndex++ : currentImgIndex = 0;
			runSlideShow(); // Loop slideshow
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