//列表hover时添加class:hover并移除兄弟元素的class:hover
$(function(){
    $(".tab_nav li:first-child").addClass("hover");
    $(".tab_nav li").each(function(i){
        $(".tab_nav li").eq(i).mouseover(function(){
            $(this).addClass("hover").siblings("li").removeClass("hover");
            $(".tab_con").eq(i).show().siblings(".tab_con").hide();
        });
    });
});

jQuery(function($){

	$(".scrollImg").hover(function(){
		var scrollImg =$(this).find("img").height();
		$(this).find("img").stop(false, true).animate({top:-(scrollImg/2)}, 200);
	},function(){
		$(this).find("img").stop(false, true).animate({top:'0px'}, 200);
	});

	$(".hscrollImg").hover(function(){
		var hscrollImg =$(this).find("img").width();
		$(this).find("img").stop(false, true).animate({left:-(hscrollImg/2)}, 300);
	},function(){
		$(this).find("img").stop(false, true).animate({left:'0px'}, 300);
	});

});

// image Scale
$(function(){
	$(".level dd").hover(function(){
		$(this).find(".photo img").addClass("hover");
	},
	function(){
		$(this).find(".photo img").removeClass("hover");
	});
});

//Scale
$(function(){
	$("#circle .li").hover(function(){
		$(this).find(".d").addClass("hover");
	},
	function(){
		$(this).find(".d").removeClass("hover");
	});
});
