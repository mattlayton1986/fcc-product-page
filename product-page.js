var header = $('header');
var openMenu = $('.fa-chevron-circle-down');
var closeMenu = $('.fa-times-circle');
var navMenu = $('nav#nav-bar');
var subscribe = $('#subscribe');

// Click handler for opening menu
// (mobile only)
openMenu.on('click', function(e) {
	$(this).hide();
	closeMenu.show();
	header.removeClass('collapse').addClass('expand');
	subscribe.css({
		'transition': 'padding-top .25s',
		'padding-top': '155px'
	});
	navMenu.removeClass('hidden').addClass('visible');
});

// Click handler for closing menu
// (mobile only)
closeMenu.on('click', function(e) {
	$(this).hide();
	openMenu.show();
	header.removeClass('expand').addClass('collapse');
	subscribe.css({
		'transition': 'padding-top .25s',
		'padding-top': '80px'
	});
	navMenu.removeClass('visible').addClass('hidden');
});