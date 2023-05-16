$(document).ready(function () {
    var con1 = true;
    var con2 = true;
    var con3 = true;
    var con4 = true;
    var con5 = true;

    var menu = $('#header_in>.nav>ul>li');
    var contents = $('#contens>article');

    menu.click(function (event) {
        event.preventDefault();
        var i = $(this).index();

        var section = contents.eq(i);
        var target = section.offset().top;

        $('html, body').stop().animate({ scrollTop: target });

    })

    $(window).scroll(function () {
        var sct = $(window).scrollTop();

        contents.each(function () {
            var tg = $(this);
            var i = tg.index();

            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        })

    })


})