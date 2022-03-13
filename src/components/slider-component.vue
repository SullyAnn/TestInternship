<template>

  <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="element in itemNoCTA" :key="element.index">I'm Slide 1
         <a class="element" :href="element.link">
            <img class="element-image" alt="couch from Butopea website" :src="element.pictureUrl" >
        </a>
    </swiper-slide>
  </swiper>
</template>

<script>
//import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'slider-component',
    components: {
        swiper: () => import("swiper"),
        swiperSlide: () => import("swiper"),
    },
	props: {
        itemNoCTA : {type: Array, required: true} 
	},

    data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  }, 

}
</script>
