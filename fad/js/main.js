$(document).ready(function () {

    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });

});