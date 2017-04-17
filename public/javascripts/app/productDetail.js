/**
 * Created by zhailiang on 2017/4/13.
 */

$(function () {

    $('.specification .weui-btn').on('click', function () {
        $('.specification .weui-btn').each(function () {
            $(this).removeClass('weui-btn_primary').addClass('weui-btn_plain-primary');
        });
        $(this).removeClass('weui-btn_plain-primary').addClass('weui-btn_primary');

    });

    $('.weui-navbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    });

    $('#productInfoTab').on('click', function () {
        $('#productInfo').show();
        $('#serviceInfo').hide();
    });

    $('#serviceInfoTab').on('click', function () {
        $('#serviceInfo').show();
        $('#productInfo').hide();
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 3000

    }).specification
})

