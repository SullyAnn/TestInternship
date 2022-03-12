<template>
  <div>
    <BannerComponent mode='square' :carousel="false" :item ="items" />
    <BannerComponent mode='square' :carousel="true" :item ="items2" />
    <BannerComponent mode='rectangle' :carousel="true" :item ="items3" />
  </div>
</template>

<script>
import BannerComponent from './components/banner-component.vue'


export default {
  name: 'App',
  components: {
    BannerComponent,
  },

  data() {
    return {  
      items: [
        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
        type : 'cta',
        title : 'CTA TITLE',
        button : 'CTA button',
        link: "https://butopea.com/",
        },

        {
        type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendbezsz_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-szovetkanape-agynemutartoval-bezs-sheffield",
          aspectRatio : "square"
        },             
      ],

      items2: [
        {
        type : 'cta',
        title : 'CTA TITLE',
        button : 'CTA button',
        link: "https://butopea.com/",
        },

        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
        type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendbezsz_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-szovetkanape-agynemutartoval-bezs-sheffield",
          aspectRatio : "square"
        },
                
      ],

      items3: [
        {
          type : 'image',
          pictureUrl: "https://butopea.com/img/1024/1024/resize/catalog/Product_pictures/DEMS/dems-kendszu_1.jpg", 
          link: "https://butopea.com/l-alaku-kinyithato-kanape-agynemutartoval-szurke-sheffield",
          aspectRatio : "square"
        },

        {
        type : 'cta',
        title : 'CTA TITLE',
        button : 'CTA button',
        link: "https://butopea.com/",
        },             
      ],
    }   
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, Barlow Condensed, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
