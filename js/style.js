
// index
$(function(){
	var tab1 = $('.head_bot').find('.flex');
	var tab2 = $('.job_boxs').find('.job_box_box');
	tab1.click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var ind = $(this).index();
		tab2.eq(ind).show(0).siblings().hide(0);
	})
})

$(function(){
		$.ajax({
			url: './js/test.json',
			dataType: 'json',
			success: function(data) {
					var src;
				for (var i = 0; i < data.xinxi.length; i++) {
					src = `
					<div class="pro">
						<a href="javascript:;" class="clearfix">
								<h3>`+ data.xinxi[i].job + ` <span class="fr">`+ data.xinxi[i].xinshui +`</span></h3>
								<p>`+ data.xinxi[i].name +`&nbsp;&nbsp;`+ data.xinxi[i].rongzhi +`</p>
								<p class="z-20">`+ data.xinxi[i].dizhi + `&nbsp;|&nbsp;`+ data.xinxi[i].jingyan +`&nbsp;|&nbsp;`+ data.xinxi[i].xueli +`</p>
								<div class="pro_ren">
									<div class="pro_ren_l fl"><img src="img/job-tou.png" alt="" class=""></div>
									<div class="pro_ren_r fl"><span>`+ data.xinxi[i].zhaopinren.name +`</span>&nbsp;|&nbsp;<span>`+ data.xinxi[i].zhaopinren.zhiwei +`</span></div>
								</div>
						</a>
					</div>
					`;
					$('.pro').append(src);
				}
			}
		})
	})



// pro
$(function(){
	var head_bot_box = $('.head_bot_box');
	var head_box_box = $('.head_pro_box .head_box_box');
	var head_box = $('.head_box');
	head_bot_box.click(function(){
		var ind = $(this).index();
		$(this).find('div').addClass('curs').parent().siblings().find('div').removeClass('curs');
		head_box_box.eq(ind).show().siblings().hide();
	})
	head_box.click(function(){
		head_box_box.hide();
	})
})

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

// me
$(function(){
	 $(window).scroll(function(){
        var ind = $(this).scrollTop();
        var head = $('.heads');
        var head_h3 = $('.heads h3');
        var a = 0;
        a += 0.001+ (ind/100);
        if (a>1) {
        	a = 1;
        }
        head.css('background','rgba(83,202,196,'+ a +')');
        head_h3.css('opacity',a);
       
     })

         
})
