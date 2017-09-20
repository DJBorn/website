jQuery(document).ready(function() {
    beginCSSAnimation('#bio', 'fadeIn');
    beginCSSAnimation('#skills', 'fadeIn');
});

function beginCSSAnimation(element, addClass) {
    jQuery(element).viewportChecker({
        classToAdd: addClass
    })
}

function open_long_desc() {
    beginCSSAnimation('#bio_button', 'fadeOut');
    beginCSSAnimation('#long_bio_desc', 'reveal');
}