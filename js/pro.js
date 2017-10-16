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

//数据显示
	$.ajax({
			url: './js/test.json',
			dataType: 'json',
			success: function(data) {
				var src;
				for (var i = 0; i < data.gongshi.length; i++) {
					src = `
					<div class="pro">
						<a href="javascript:;" class="clearfix">
							<div class="pro_left">
								<img src="img/ico-pro.png" alt="pro-logo">
							</div>
							<div class="pro_right">
								<h3>`+ data.xinxi[i].name +`</h3>
								<p>`+ data.xinxi[i].dizhi +`</p>
								<p>`+ data.xinxi[i].hangye +`&nbsp;|&nbsp;`+ data.xinxi[i].rongzhi +`&nbsp;|&nbsp;`+ data.xinxi[i].guimo +`</p>

							</div>
						</a>
						<a href="javascript:;" class="pro_a">
							热招：<span class="color1">`+ data.xinxi[i].zhaopinjob.job1 +`</span>等`+ data.xinxi[i].zhaopinjob.length +`个职位<span class="tr">&gt;</span>
						</a>
					</div>
					`;
					$('.body').append(src);
				}
				
			}
		})


})