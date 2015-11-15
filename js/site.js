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
		window.open($(this).attr('href'));
		evt.preventDefault();
	});

	if (!isTouchDevice) {
		$('section.expandable').eq(0).click();
	}
});