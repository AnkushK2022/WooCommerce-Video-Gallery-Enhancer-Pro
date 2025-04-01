jQuery(document).ready(function($) {
    // Initialize only if Magnific Popup exists
    if (typeof $.fn.magnificPopup === 'function') {
        $('.vge-video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false
        });
    }

    // FlexSlider refresh with fallback
    function refreshFlexSlider() {
        var $gallery = $('.woocommerce-product-gallery');
        if ($gallery.length) {
            var flexslider = $gallery.data('flexslider');
            if (flexslider) {
                flexslider.resize();
                flexslider._setControlNav();
                flexslider._directionNav();
            }
        }
    }

    // Wait for images to load
    $('body').on('woocommerce_gallery_init_zoom', refreshFlexSlider);
    $(window).on('load', refreshFlexSlider);
});