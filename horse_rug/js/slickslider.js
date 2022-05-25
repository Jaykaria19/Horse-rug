
$('.items').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow',
    responsive: [
        {
            breakpoint: 980,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '05px',
                slidesToShow: 1,
            }
        },

    ]
});
