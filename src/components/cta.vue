<template>
    <div v-if="mode == 'square'" class="element-cta">
        <h2>{{item.title}}</h2>
        <button :href="item.link">{{item.button}}</button>
    </div>
    <div v-else class="element-cta opacity">
        <h2>{{item.title}}</h2>
        <button :href="item.link">{{item.button}}</button>
    </div>
</template>

<script>
export default {
    name: 'banner-component',
	props: {
        mode : {type: String, required: true},
        item : {type: Object, required: true} 

	},
}
</script>

<style >

.element-cta{
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.opacity{
    background-color: rgba(255,255,255 0.5);
}
.opacity{
    background-color: rgba(255,255,255,0.8);
}
.opacity h2 {
    color: #2b2b2b;
}
.opacity button{
    color: #2b2b2b;
    border: 1px solid #2b2b2b;
}
</style>