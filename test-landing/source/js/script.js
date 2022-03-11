for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
$(document).ready(function(){
    $('.phone_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });
});
