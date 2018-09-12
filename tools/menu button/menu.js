//************************JQuery************************

// $(function(){
// 	var $toggleButton = $('.toggle-button');
// 	$toggleButton.on('click', function(){
// 		$(this).toggleClass('button-open');
// 	});
// });

//************************JQuery************************

//**********************Vanilla JS**********************
var menuBtn = document.getElementById('menu-btn')
var toggle = document.getElementById('toggle-menu');
var toggleState = false;

menuBtn.addEventListener('click', openMenu);

function openMenu(){
	if (!toggleState){
		toggle.className += ' button-open';
		toggleState = true;
	}
	else {
		toggle.className -= ' button-open';
		toggleState = false;
	}
}
//**********************Vanilla JS**********************