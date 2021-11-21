// init Swiper:
import Swiper, {Navigation, Pagination} from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

new Swiper(".swiper",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // type: 'fraction',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + '/' + total;
        }
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
});