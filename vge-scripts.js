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

    // FlexSlider safe refresh
    function refreshFlexSlider() {
        var $gallery = $('.woocommerce-product-gallery');

        if ($gallery.length) {
            var flexslider = $gallery.data('flexslider');

            if (flexslider && typeof flexslider.resize === 'function') {
                flexslider.resize();
            }
        }
    }

    // Refresh FlexSlider when WooCommerce gallery zoom is ready or on load
    $('body').on('woocommerce_gallery_init_zoom', refreshFlexSlider);
    $(window).on('load', refreshFlexSlider);
});
