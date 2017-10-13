// news
$(function(){
	var head_box_a = $('.head_box a');
	var body_new_box = $('.body_new_box');
	body_new_box.eq(1).hide();
	head_box_a.click(function(){
		var ind = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		body_new_box.eq(ind).show().siblings().hide();
	})
})