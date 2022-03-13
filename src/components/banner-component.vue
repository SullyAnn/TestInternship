<template>
<div class="content">
    <section v-if="mode=='square' " class="elements">
        <div class="element" v-for="element in item" :key="element.index" >

            <!-- Square mode -->
            <ImageComponent :mode ='mode' :item="element" v-if="element.type =='image'" />
            <Cta :mode="mode" :item="element" v-else />

            <!-- I did not succeed in implementing the slider part.
            I wish you will enjoyed reading the rest of my code =)
            <SliderComponent :itemNoCTA="results" v-if="carousel &&$isMobile()" />-->

      </div>
    </section>

    <section v-else class=" rectangle elements ">
         <div class="element" v-for="element in item" :key="element.index" >
            <!-- Rectangle mode -->
            <ImageComponent :mode ='mode' :item="element" v-if="element.type =='image'" />
            <Cta :mode="mode" :item="element" v-else />

        </div>

    </section>
</div>   
</template>

<script>
import Cta from './cta.vue'
import ImageComponent from './imageComponent.vue'
//import SliderComponent from './slider-component.vue'


export default {
    name: 'banner-component',
    components: {
        Cta, 
        ImageComponent, 
        //SliderComponent
    },
	props: {
        mode : {type: String, required: true}, 
        carousel : {type: Boolean, required: false},
        item : {type: Array, required: true,}
	},
    computed: {
        screenWidth : function(){
        return window.innerWidth
        },

    },
    /*
    methods: {
        itemNoCta: function(){

            let newTab = [{
                type : "slider",
                imgs : this.item.filter((element) => element === "img")
                }]

                let cta_index = -1
                for (let i = 0; i < this.item.length; i++) {
                    if (this.item[i] === "cta") {
                        cta_index = i
                        break;
                    }
                }

                if (cta_index === 0) { newTab.unshift(this.item[cta_index]) }
                else if (cta_index > 0) { newTab.push(this.item[cta_index]) }
                
        return this.results = newTab;
        }
    },
    beforeMount(){
        this.itemNoCta
        console.log(this.results)
    },

    data(){
        return {
            results: []
        }
    }*/

}
</script>

<style>
body{
    background-color: #2b2b2b;
}
a{
    text-decoration: none;
}
h2{
    font-family: 'Barlow Condensed';
    font-size: 48px;
    color: #2b2b2b;
}
button{
    background-color: unset;
    color: #2b2b2b;
    padding: 25px;
    padding: 16px 32px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
     border: 1px solid #2b2b2b;
}
.content{
    display: flex;
    flex-direction: column;
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
}



.rectangle {
    justify-content: space-between;
    width: 1500px;
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
        display: flex;
    }
    .element-cta{
        padding-block: 20px;
    }

    .opacity{
        background-color: rgba(255,255,255,1);
    }
    .rectangle{
        width: auto;
    }
}

</style>