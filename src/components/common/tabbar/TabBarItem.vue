<template>
    <div class="tab-bar-item" @click="toView">
        <div>
            <slot v-if="isActive" name="item-icon"></slot>
            <slot v-else name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
   
    props:{
        path:String,
        activeColor: {
            type:String,
            default: 'red'
        }
    },
    computed:{
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        toView() {
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
     .tab-bar-item {
        flex:1;
        height:49px;
        text-align:center;
    }
</style>