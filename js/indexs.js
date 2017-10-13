
// indexs
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
					$('.body').append(src);
				}
				
			}
		})
	})
