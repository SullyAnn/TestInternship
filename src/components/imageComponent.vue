<template>
    <a v-if="mode == 'square'" class="element" :href="item.link">
        <img class="element-image" alt="couch from Butopea website" :src="item.pictureUrl" >
    </a>
    <a v-else class="element-rectangle" :href="item.link">
        <img class="element-image" alt="couch from Butopea website" :src="item.pictureUrl" >
    </a>
</template>

<script>
export default {
    name: 'image-component',
	props: {
        mode : {type: String, required: true},
        item : {type: Object, required: true} 

	},
}
</script>

<style>
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
.element-rectangle{
    width: 1500px;
    height: 500px;
}
</style>