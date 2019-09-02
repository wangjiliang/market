<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type:Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default : false
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType, //默认0，不派发scroll;1:滑动一定距离才触发scroll;2:实时监听scroll不包括回弹;3:包括回弹
            pullUpLoad: this.pullUpLoad,  //设置上拉加载更多
            click: true
        })
        //监听滚动的位置
        this.scroll.on("scroll", position => {
           this.$emit('scroll', position)
        })
        //监听上拉事件
        this.scroll.on("pullingUp", () => {
            this.$emit("pullingUp")
        })
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        }
    }
}
</script>