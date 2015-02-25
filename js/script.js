$(function() {
    "use strict";

    var $results = $('#results');

    $.each([2,3,4,5,6,7,8], function(index, filterName) {
        var img = new Image();
        img.setAttribute('data-filter', filterName);
        img.onload = function() {
            img.onload = null;
            $(img).filterMe();
        };
        $results.append(img);
        img.width = 300;
        img.src = 'sample/repas.jpg';
    });

});