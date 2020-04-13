$(document).ready(function () {

    $(".tab_item").not(":first").hide();
    $(".portfolio__tabs .tab").click(function () {
        $(".portfolio__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.tab_item.mountain').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
          },
    });

    $('.tab_item.costal').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
          },
    });

    $('.tab_item.sea').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
          },
    });

    $('.tab_item.other').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
          },
    });

    new WOW({
        offset: '100',
    }).init();

});