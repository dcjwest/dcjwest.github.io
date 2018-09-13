/*   
Theme Name: Stellartronic
Theme URL: http://www.dcjwest.com/
Description: Hand-crafted portfolio website
Author: David van der Westhuizen
Copyright (c) 2018 David van der Westhuizen
*/

/* jQuery Script File v1.0 - Initial Release */

$(function(){
	window.onload = function(){
	    // $('body').fadeIn(2000).addClass('loaded');
	    $('body').animate({opacity: 1}, 2000);
	}

	var menuBtn = $('#menu-btn');
	var menuLinks = $('#mobile-nav a');
	var toggle = $('#toggle-menu');
	var menuOpen = false;
	var proPic = $('#slider');
	var picArr = ['images/slider/david-mj.jpg', 'images/slider/david-dance.jpg', 'images/slider/david-bboy.jpg', 'images/slider/david-mtn.jpg', 'images/slider/david-dog.jpg'];
	var currentPicIndex = 1;
	var prevScrollPos = window.pageYOffset;

//Force scroll position to top of page after refresh
	window.onbeforeunload = function(){
		window.scrollTo(0, 0);
		$('#navBar').slideDown(200);
	}

// Header and Navigation

	menuBtn.on('click', toggleMenu);

// Show Header while scrolling up; Hide Header while scrolling down
	window.onscroll = function(){
		var currentScrollPos = window.pageYOffset;

		if(prevScrollPos > currentScrollPos){
			$('#navBar').slideDown(200);
		}
		else {
			$('#navBar').slideUp(200);
		}
		prevScrollPos = currentScrollPos;
	}

//Animate Menu Button and Dropdown List
	for(var i = 0; i < menuLinks.length; i++){
		menuLinks[i].addEventListener('click', toggleMenu);
	}

	function animateMenuBtn(){
		toggle.toggleClass('button-open');
	}

	function toggleMenu(){
		animateMenuBtn();

		if(!menuOpen){
			$('#mobile-nav').slideDown();
			menuOpen = true;
		}
		else{
			$('#mobile-nav').slideUp();
			// $('#navBar').slideUp();
			menuOpen = false;
		}
	}

//Copy email address to clipboard after clicking email icon
	$('.emailBtn').on('click', copyToClipboard);

	function copyToClipboard(){
		$('#myEmail').select();
		document.execCommand("copy");
		alert('Yay! My email address has been copied to your clipboard :D');
	}

//Change slideshow pic every 3 seconds
	function togglePic(){
		if (currentPicIndex < picArr.length){
			proPic.attr('src', picArr[currentPicIndex]);
			currentPicIndex++;
		}
		else{
			currentPicIndex = 0;
			proPic.attr('src', picArr[currentPicIndex]);
			currentPicIndex++;
		}
	}
	setInterval(togglePic, 3000);

//Highlight project on hover and fade others
	for (var i = 1; i <= 3; i++){
		$('#project'+i).on('mouseenter', projectFocus);
		$('#project'+i).on('mouseleave', projectAll);
	}

	function projectFocus(){
		for (var j = 1; j <= 3; j++){
			if (this.id === 'project'+j){
				continue;
			}
			$('#project'+j).animate({opacity: 0.5}, 200);
		}
	}
	function projectAll(){
		for (var j = 1; j <= 3; j++){
			$('#project'+j).stop().animate({opacity: 1}, 10);
		}
	}
});