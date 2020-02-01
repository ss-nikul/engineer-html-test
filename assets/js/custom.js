$(document).ready(function () {
    var divs = $('.section');
    var dir = 'up';
    var div = 0;
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        div = -1;
        divs.each(function (i) {
            if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (dir == 'up' && div > 0) {
            div--;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
        }
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 1000);
        return false;
    });
    $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });

    $("#sliding-link").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(aid).offset().top
        }, 'slow');
    });

});