import $ from 'jquery';

export default {
    scrollToDiv(divElem){
        $('html, body').animate({
            scrollTop: $(divElem).offset().top
        }, 1000);
    }
};