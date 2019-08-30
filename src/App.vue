<template>
  <div id="app">
    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="assets/img/111.png" alt="" />
            <img slot="item-icon-active" src="assets/img/111.png" alt="" />
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="item-icon" src="#" alt="" />
            <img slot="item-icon-active" src="assets/img/111.png" alt="" />
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img slot="item-icon" src="#" alt="" />
            <img slot="item-icon-active" src="assets/img/111.png" alt="" />
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="#" alt="" />
            <img slot="item-icon-active" src="assets/img/111.png" alt="" />
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
    import TabBar from "components/common/tabbar/Tabbar.vue"
    import TabBarItem from "components/common/tabbar/TabBarItem.vue"
    export default {
        name: 'app',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>
    @import "assets/css/base.css";
    
</style>
