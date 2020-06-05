jQuery(document).ready(function () {
    jQuery('.main_container').css("display", "none");
    jQuery('#close_portfolio').css("display", "none");
    jQuery('#close_portfolio').on("click", function () {
        jQuery('#open_portoflio').css("display", "block");
        jQuery('.main_container').css("display", "none");
        jQuery(".hamburger_container").css("display", "none");
        jQuery('#close_portfolio').css("display", "none");
    });
    jQuery("#open_portoflio").on("click", function () {
        jQuery(".hamburger_container").addClass('hamburger_container_show');
        jQuery('h1').css('opacity', '1');
        jQuery(".hamburger_container").css("display", "block");
        jQuery('#hamburger').css('opacity', '1');
        jQuery('.main_container').addClass('main_container_show');
        jQuery('.main_container').css("display", "block");
        jQuery('#hero').css("width", "100%");
        jQuery('#open_portoflio').css("display", "none");
        jQuery('#close_portfolio').css("display", "block");
        jQuery('#hamburger').on("click", function () {
            jQuery('#hamburger_up').toggleClass('hamburger_up_rotate');
            jQuery('#hamburger_center').toggleClass('hamburger_center_rotate');
            jQuery('#hamburger_down').toggleClass('hamburger_down_rotate');
            jQuery('.hamburger_container_show').toggleClass("skew_hamb_container");
        });
        jQuery('#hamburger').on("click", function () {
            jQuery('.hamburger_container').toggleClass('hamburger_container_toggle');
            if (jQuery('.hamburger_container').hasClass('hamburger_container_toggle')) {
                jQuery('.hamburger_list').css({
                    "opacity": "1",
                    "transition-delay": " 5s ease"
                });
                jQuery('.skew-bg-down').css(
                    "top", "647px"
                );
                particlesJS.load('particles-js', 'particlesjs-config.json', function () {
                    console.log('particles.js config loaded');
                });
                jQuery('.main_container ').css("display", "none");
                jQuery('#particles-js').css("display", "block");
            } else {
                jQuery('.hamburger_list').css("opacity", "0");
                jQuery('.main_container ').css("display", "block");
                jQuery('#particles-js').css("display", "none");
                jQuery('.skew-bg-down').css(
                    "top", "588px"
                );
            }
        });
        jQuery('.row:nth-child(1) div:nth-child(1) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(1) div:nth-child(2) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(1) div:nth-child(3) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(2) div:nth-child(1) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(2) div:nth-child(2) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(2) div:nth-child(3) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(3) div:nth-child(1) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(3) div:nth-child(2) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(3) div:nth-child(3) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(4) div:nth-child(1) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(4) div:nth-child(2) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(4) div:nth-child(3) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(5) div:nth-child(1) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(5) div:nth-child(2) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
        jQuery('.row:nth-child(5) div:nth-child(3) .cell').on('click', function () {
            window.setTimeout(function () {
                window.open("#", "_blank")
            }, 1100);
        });
    });
});
jQuery("#mask_loader").hide();
jQuery('.cell_mask').on("click", function () {
    jQuery("#mask_loader").show();
    setTimeout(function () {
        jQuery("#mask_loader").hide();
    }, 1500);
});