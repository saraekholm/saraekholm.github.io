$(function(){

	var isTouchDevice = 'ontouchstart' in document.documentElement;

	$('section.expandable').on('click', function(evt) {

		var arrow = $(this).children('.arrow');
		// Close if the section is exapanded and the arrow was clicked
		if ($(this).hasClass('expanded') && $(evt.target).hasClass('arrow')) {
			$(this).removeClass('expanded');
			arrow.text('Read more');
		} else if (!$(this).hasClass('expanded')) {
			// Otherwise expand
			$(this).addClass('expanded');
			arrow.text('Close');
		}
	});

	$('.link-list a').on('click', function(evt) {
		var href = $(this).attr('href');
		if (href.indexOf('http') != -1 || href.indexOf('./') != -1) {
			window.open(href);
			evt.preventDefault();
		}
	});

	$('#about-link').on('click', function(evt) {
		evt.preventDefault();
		$('body').scrollTop($('footer').offset().top);
	});

	var email = 'es.dnalsirepyh@mlohke.aras'.split("").reverse().join("");
	$('.email-link').attr('href', 'mailto:' + email);
	$('.email-placeholder').text(email);

	if (!isTouchDevice) {
		$('section.expandable').eq(0).click();
	}
});