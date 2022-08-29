import "./modal"
import "./header-scroll"

$(document).ready(function(){
    $('.block__title').click(function(event) {
       $(this).toggleClass('active').next().slideToggle(300);
    });
});

import './swiper-slider';



