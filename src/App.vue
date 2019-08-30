<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
    import MainTabBar from 'components/context/mainTabBar/mainTabBar.vue'
    export default {
        name: 'app',
        components: {
            MainTabBar
        }
    }
</script>

<style>
    @import "assets/css/base.css";
    
</style>
