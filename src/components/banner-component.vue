<template>
    <section class="elements">
        <div class="element" v-for="element in item" :key="element.index" >

            <!-- Square mode -->
            <a  class="element" v-if="squareChecking && element.type=='image'" :href="element.link">
                <img class="element-image" alt="couch from Butopea website" :src="element.pictureUrl" >
            </a>

            <a v-else-if =" squareChecking && element.type == 'cta'" tesfunction class="element-cta" :href="element.link"> 
                <h2>{{element.title}}</h2>
                <button>{{element.button}}</button>
            </a>

            <!-- Rectangle mode -->
            <a  class="element" v-if="rectangleChecking && element.type=='image'" :href="element.link">
                <img class="element-image" alt="couch from Butopea website" :src="element.pictureUrl" >
            </a>
             <a v-else-if =" rectangleChecking && element.type == 'cta'" tesfunction class="element-cta" :href="element.link"> 
                <h2>{{element.title}}</h2>
                <button>{{element.button}}</button>
            </a>
    

      </div>
    </section>
    
</template>

<script>
export default {
  name: 'banner-component',
	props: {
        mode : {type: String, required: true}, 
        carousel : {type: Boolean, required: false},
        item : {type: Array, required: true,}
	},
    computed: {
        squareChecking(){
            return this.mode=='square';
        },
        rectangleChecking(){
            return this.mode =='rectangle'
        }
    }
}
</script>

<style>

.elements{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-block: 50px;
}
.element{
    width: 500px;
    height: 500px;
    display: flex;
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
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


</style>