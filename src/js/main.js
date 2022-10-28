$("select").styler();

$(document).on("click", ".header-burger", function () {
    $(".header-mobile").addClass('open');
});

$(document).on("click", ".heder-mobile-close", function () {
    $(".header-mobile").removeClass('open');
});

// $(document).on("click", ".main-filter-select", function () {
//     $(".header-mobile").addClass('qwe');
// });