
$(document).ready(function () {
    $(".icon").click(function () {
        $(".new-menu-box").animate({
            width: "toggle"
        }, 200, "linear");
    });
});


$(document).ready(function () {
    $(".close").click(function () {
        $(".new-menu-box").animate({
            width: "toggle"
        }, 200, "linear");
    });
});


////////////
// $(document).ready(function () {
//     $(".icon").click(function () {
//         $(".icon").fadeToggle(300);
//     });
// });

// $(document).ready(function () {
//     $(".close").click(function () {
//         $(".close").fadeToggle(300);
//         $(".icon").fadeToggle(300);
//     });
// });


// ///////////
$(document).ready(function () {
    $(".new-category-dropdown").click(function () {
        $(".new-sub-category").slideToggle(200);
        $(".c-u-aero").fadeToggle(100);
        $(".c-d-aero").fadeToggle(100);
    });
});

$(document).ready(function () {
    $(".new-register-dropdown").click(function () {
        $(".new-sub-register").slideToggle(200);
        $(".r-u-aero").fadeToggle(100);
        $(".r-d-aero").fadeToggle(100);
    });
});


$(document).ready(function () {
    $(".new-login-dropdown").click(function () {
        $(".new-sub-login").slideToggle(200);
        $(".l-u-aero").fadeToggle(100);
        $(".l-d-aero").fadeToggle(100);
    });
});


// /////////
$(document).ready(function () {

    $("body").click(function () {
        if ($('.new-menu-box').css('display') == 'block') {
            $(".new-menu-box").animate({
                width: "toggle"
            }, 200, "linear");
        }
    });

    $(".new-menu-box").click(function (event) {
        event.stopPropagation();
    });

    $(".toggle-box").click(function (event) {
        event.stopPropagation();
    });

});




