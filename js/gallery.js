$(document).ready(function () {
// init Masonry
var $grid = $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 5,
    columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
});
});
