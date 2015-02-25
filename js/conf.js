$(function() {
    "use strict";

    $.filterMe.defaults.folder = 'acvFiles/';

    $.each([2,3,4,5,6,7,8], function(index, filterName) {
        $.filterMe.filters[filterName] = { desaturate: false, curves: filterName, vignette: false };
    });

});