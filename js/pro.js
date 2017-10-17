// pro
$(function(){
	var head_bot_box = $('.head_bot_box');
	var head_box_box = $('.head_pro_box .head_box_box');
	var head_box = $('.head_box');
	var head_box_top_a = $('.head_box_top a');
	var head_box_bot_cz = $('.head_box_bot_cz');
	var head_box_bot_qd = $('.head_box_bot_qd');
	//选项卡
	head_bot_box.click(function(){
		var ind = $(this).index();
		$(this).find('div').addClass('curs').parent().siblings().find('div').removeClass('curs');
		head_box_box.eq(ind).show().siblings().hide();
	})
	//点击别处隐藏
	head_box.click(function(){
		head_box_box.hide();
	});

	//多选反选
	head_box_top_a.click(function(e){
		$(this).toggleClass('cur');
		// $(this).eq(1).removeClass('cur');
		var ind = $('.head_box_top a.cur').length;
		head_box_bot_qd.html("确定" +"&nbsp;&nbsp;&nbsp;"+ "( "+ ind +" )" )
		e.stopPropagation();//阻止时间冒泡
	});
	//重置
	head_box_bot_cz.click(function(e){

		head_box_top_a.eq(1).addClass('cur').siblings().removeClass('cur');

		e.stopPropagation();//阻止时间冒泡

	});
	//确认
	head_box_bot_qd.click(function(e){

		console.log("确认");

		e.stopPropagation();//阻止时间冒泡

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
								<h3>`+ data.gongshi[i].name +`</h3>
								<p>`+ data.gongshi[i].dizhi +`</p>
								<p>`+ data.gongshi[i].hangye +`&nbsp;|&nbsp;`+ data.gongshi[i].rongzhi +`&nbsp;|&nbsp;`+ data.gongshi[i].guimo +`</p>

							</div>
						</a>
						<a href="javascript:;" class="pro_a">
							热招：<span class="color1">`+ data.gongshi[i].zhaopinjob.job1 +`</span>等`+ Object.getOwnPropertyNames(data.gongshi[i].zhaopinjob).length +`个职位<span class="tr">&gt;</span>
						</a>
					</div>
					`;
					$('.body').append(src);
				}
				
			}
		});
	
	//选项卡封装，参数1：点击按钮，参数2：对应盒子显示
	function tab(a,b) {
		var btn = a ;
		var box = b ;
		btn.click(function(){

			var ind = $(this).index();

			$(this).addClass('cur').siblings().removeClass('cur');

			box.eq(ind).show().siblings().hide();

			e.stopPropagation();//阻止时间冒泡
		})
		
	}
})