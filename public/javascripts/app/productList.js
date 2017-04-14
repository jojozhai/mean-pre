/**
 * Created by zhailiang on 2017/4/13.
 */
$(function () {
    var $searchBar = $('#search_bar'),
        $searchText = $('#search_text'),
        $searchInput = $('#search_input'),
        $searchClear = $('#search_clear'),
        $searchCancel = $('#search_cancel');

    function hideSearchResult() {
        $searchInput.val('');
    }

    function cancelSearch() {
        hideSearchResult();
        $searchBar.removeClass('weui-search-bar_focusing');
        $searchText.show();
    }

    $searchText.on('click', function () {
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });

    $searchInput
        .on('blur', function () {
            if (!this.value.length) cancelSearch();
        })
    ;
    $searchClear.on('click', function () {
        hideSearchResult();
        $searchInput.focus();
    });

    $searchCancel.on('click', function () {
        cancelSearch();
        $searchInput.blur();
    });

    $('.weui-tabbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    });
})

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    autoplay:3000

})