$(function () {
	var head_img1 = $('.head_img1');

	head_img1.click(function(event) {
		history.go(-1);
	});
	$('#test').bind('focus', function () {
		$('.footer').css({
			"position" : "relative",
		});
	})
	$('#test').bind('blur', function () {
		$('.footer').css({
			"position" : "fixed",
		});
	})
})