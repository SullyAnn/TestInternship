<template>
<div>
    <section v-if="mode=='square' " class="elements">
        <div class="element" v-for="element in item" :key="element.index" >

            <!-- Square mode -->
            <a  class="element" v-if="element.type=='image'" :href="element.link">
                <img v-if="carousel=false" class="element-image" alt="couch from Butopea website" :src="element.pictureUrl" >
                <swiper v-else-if="carousel=true && item.length>3" :slides-per-view="element.length-1"
                :space-between="50"
                @swiper="onSwiper"
                @slideChange="onSlideChange">

                    <swiper-slide>
                        <img class="element-image" alt="couch from Butopea website" :src="element.pictureUrl" >
                    </swiper-slide>
                </swiper>
            </a>

            <a v-else-if =" element.type == 'cta'"  class="element-cta" :href="element.link"> 
                <h2>{{element.title}}</h2>
                <button :href="element.link">{{element.button}}</button>
            </a>

      </div>
    </section>

    <section v-else class=" rectangle elements ">
         <div class="element" v-for="element in item" :key="element.index" >
            <!-- Rectangle mode -->
            <a  class="element-rectangle" v-if="element.type=='image'" :href="element.link">
                <img class="element-image " alt="couch from Butopea website" :src="element.pictureUrl" >
            </a>

             <a v-else-if ="element.type == 'cta'" class="opacity element-cta " :href="element.link"> 
                <h2>{{element.title}}</h2>
                <button :href="element.link">{{element.button}}</button>
            </a>
      </div>
    </section>
</div>   
</template>

<script>
import { Swiper, SwiperSlide } from '../node_modules/swiper/vue';

export default {
  name: 'banner-component',
	props: {
        mode : {type: String, required: true}, 
        carousel : {type: Boolean, required: false},
        item : {type: Array, required: true,}
	},
    methods: {
       onResizeScreen(){
           const elements = document.querySelectorAll('.element-cta')
            elements.forEach(function(element){
                element.parentElement.classList.add('resizing-elements')
                console.log('ok?')
                })
        },

    },
    
    beforeMount(){
        window.onload = this.onResizeScreen
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
 const swiper = new Swiper();
</script>

<style>
a{
    text-decoration: none;
}
h2{
    font-family: 'Barlow Condensed';
    font-size: 48px;
    color: white;
}
button{
    background-color: unset;
    border: 1px solid white;
    color: white;
    padding: 25px;
    padding: 16px 32px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
}
.elements{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-block: 50px;
    padding-inline: 180px;
    width: fit-content;

}
.element{
    width: 500px;
    height: 500px;
    display: flex;
    border: 1px solid #42f5c2;
}
.element-image{
    object-fit: cover;
    width: inherit;
    height: inherit;
    object-position: center;
}
.element-cta{
    width: 100%;
    height: 100%;
    background-color: #42f5c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.opacity{
    background-color: rgba(255,255,255 0.5);
}
.element-rectangle{
    width: 1500px;
    height: 500px;
}
.opacity{
    background-color: rgba(255,255,255,0.8);
}
.opacity h2 {
    color: #42f5c2;
}
.opacity button{
    color: #42f5c2;
    border: 1px solid #42f5c2;
}
.rectangle {
    justify-content: space-between;
    width: auto;
}

/*********************** media queries **********************/ 

@media screen and (max-width:415px)  {
    html{
        display: flex;
        justify-content: center;
    }
    body{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
    h2{
        font-size: 32px;
    }
    button{
        font-size: 16px;
        padding: 8px 24px
    }
    .elements{
        padding-inline: 0;
    }
    .element {
        width: 100%;
        height: 100%;
    }
    .element-rectangle {
        width: 100%;
        height: 100%;
    }
    .resizing-elements{
        height: 150px;
    }
}

</style>