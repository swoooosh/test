$(document).ready(function(){
	$('.header_burger').click(function(event) {
		$('.header_burger,.menu_header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});