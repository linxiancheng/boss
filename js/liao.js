$(function () {
	var head_img1 = $('.head_img1');

	head_img1.click(function(event) {
		history.go(-1);
	});
	
	$('#test').bind('focus', function () {
		$('.body_box').css({
			// "position" : "relative",
		});
	})
	$('#test').bind('blur', function () {
		$('.body_box').css({
			// "position" : "fixed",
		});
	})
})