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