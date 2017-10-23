$(function () {
 	var box_b_btn = $('.box_b_btn');
 	var body_box_bb = $('.body_box_bb');
 	var head_img1 = $('.head_img1');

	head_img1.click(function(event) {
		history.go(-1);
	});

 	box_b_btn.click(function(){
		body_box_bb.toggleClass('box_b_box');
 	});
})