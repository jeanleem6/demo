//列表hover时添加class:hover并移除兄弟元素的class:hover
$(function() {
    $(".tab_nav li:first-child").addClass("hover");
    $(".tab_nav li").each(function(i) {
        $(".tab_nav li").eq(i).mouseover(function() {
            $(this).addClass("hover").siblings("li").removeClass("hover");
            $(".tab_con").eq(i).show().siblings(".tab_con").hide();
        });
    });
});

jQuery(function($) {

    $(".scrollImg").hover(function() {
        var scrollImg = $(this).find("img").height();
        $(this).find("img").stop(false, true).animate({ top: -(scrollImg / 2) }, 200);
    }, function() {
        $(this).find("img").stop(false, true).animate({ top: '0px' }, 200);
    });

    $(".hscrollImg").hover(function() {
        var hscrollImg = $(this).find("img").width();
        $(this).find("img").stop(false, true).animate({ left: -(hscrollImg / 2) }, 300);
    }, function() {
        $(this).find("img").stop(false, true).animate({ left: '0px' }, 300);
    });

});

var supportsPointerEvents = (function() {
    var dummy = document.createElement('_');
    if (!('pointerEvents' in dummy.style)) return false;
    dummy.style.pointerEvents = 'auto';
    dummy.style.pointerEvents = 'x';
    document.body.appendChild(dummy);
    var r = getComputedStyle(dummy).pointerEvents === 'auto';
    document.body.removeChild(dummy);
    return r;
})();

function noPointerEvents(element) {
    $(element).bind('click mouseover', function(evt) {
        this.style.display = 'none';
        var x = evt.pageX,
            y = evt.pageY,
            under = document.elementFromPoint(x, y);
        this.style.display = '';
        evt.stopPropagation();
        evt.preventDefault();
        $(under).trigger(evt.type);
    });
}

// $(function() {

//     // modal 弹窗
//     $('#open_modal').click(function(e) {
//         e.preventDefault();
//         $('.modal').removeClass('out').addClass('in');
//     });
//     $('.modal_close,.modal_overlay').click(function(e) {
//         e.preventDefault();
//         $('.modal').removeClass('in').addClass('out');
//     })
// });

var EventUtil = {
    addHandler: function(el, type, handler) {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false); //使用DOM2级方法添加事件
        } else if (el.attachEvent) { //使用IE方法添加事件
            el.attachEvent("on" + type, handler);
        } else {
            el["on" + type] = handler; //使用DOM0级方法添加事件
        }
    }
};

var handler = {
    message: 'Event handled',
    handleClick: function(e) {
        console.log(this.message);
    }
};
var parent = document.getElementById('parent'),
    child = document.getElementById('child');

EventUtil.addHandler(child, 'click', function(e) {
    handler.handleClick(e);
});

$(function() {
    $('.level1 > a').click(function(e) {
        $(this).addClass('current').
        next().show().
        parent().siblings().children('a').removeClass('current').
        next().hide();
        return false;
    })
})

$('#open_modal').on('click', function(e) {
    e.preventDefault();
    $('#parent').slideToggle();
});
