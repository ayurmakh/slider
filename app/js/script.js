buttons = $('.slider_button');
slides = $('.slide');

$('.slider_button').click(function() {
	changeSlide(this);	
});

function changeSlide(button) {	
	focusIndex = 0;
	for (var i = 0; i < buttons.length; i++) {
		$(buttons[i]).removeClass('slider_button_active');
		$(slides[i]).removeClass('show');
		if (button == buttons[i])
			focusIndex = i + 1;
	}
	$(button).addClass('slider_button_active');
	$('#slide' + focusIndex).addClass('show');	
}

setInterval(function() {

	current_id = $('.slider_button_active').attr('id');
	current_id_num = current_id[current_id.length - 1];
	if (current_id_num == 3)
		current_id_num = 1;
	else
		current_id_num++;
	button = $('#slider_button' + current_id_num);
	slide = $('#slide' + current_id_num);

	for (var i = 0; i < buttons.length; i++) {
		$(buttons[i]).removeClass('slider_button_active');
		$(slides[i]).removeClass('show');
	}

	button.addClass('slider_button_active');
	slide.addClass('show');

}, 10000);