<template>
    <div>
        <nav-bar class="nav-bar">
           <div slot="center">分类</div>
       </nav-bar>
       <Scroll class="wrapper" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scrollEvent" @pullingUp="loadMore" >
       <ul class="content">
           <li>分类列表1</li>
           <li>分类列表2</li>
           <li>分类列表3</li>
           <li>分类列表4</li>
           <li>分类列表5</li>
           <li>分类列表6</li>
           <li>分类列表7</li>
           <li>分类列表8</li>
           <li>分类列表9</li>
           <li>分类列表10</li>
           <li>分类列表11</li>
           <li>分类列表12</li>
           <li>分类列表13</li>
           <li>分类列表14</li>
           <li>分类列表15</li>
           <li>分类列表16</li>
           <li>分类列表17</li>
           <li>分类列表18</li>
           <li>分类列表19</li>
           <li>分类列表20</li>
           <li>分类列表21</li>
           <li>分类列表22</li>
           <li>分类列表23</li>
           <li>分类列表24</li>
           <li>分类列表25</li>
           <li>分类列表26</li>
           <li>分类列表27</li>
           <li>分类列表28</li>
           <li>分类列表29</li>
           <li>分类列表30</li>
           <li>分类列表31</li>
           <li>分类列表32</li>
           <li>分类列表33</li>
           <li>分类列表34</li>
           <li>分类列表35</li>
           <li>分类列表36</li>
           <li>分类列表37</li>
           <li>分类列表38</li>
           <li>分类列表39</li>
           <li>分类列表40</li>
           <li>分类列表41</li>
           <li>分类列表42</li>
           <li>分类列表43</li>
           <li>分类列表44</li>
           <li>分类列表45</li>
           <li>分类列表46</li>
           <li>分类列表47</li>
           <li>分类列表48</li>
           <li>分类列表49</li>
           <li>分类列表50</li>
           
       </ul>
       </Scroll>
       <back-top @click.native= "scrollTop" v-show="showTop" />
    </div>
</template>

<script>
    import NavBar from 'components/common/navBar/NavBar'
    import Scroll from 'components/common/scroll/BScroll'
    import BackTop from 'components/context/backTop/BackTop'
import { constants } from 'crypto';

    export default {
        components: {
            NavBar,
            Scroll,
            BackTop
        },
        data () {
            return {
                showTop: false
            }
        },
       
        methods: {
            scrollEvent(position) {
                this.showTop = -position.y > 1000
            },
            scrollTop() {
                this.$refs.scroll.scrollTo(0, 0)
            },
            loadMore(){
                console.log("上拉加载更多...")
                this.$refs.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        height: calc(100vh - 93px);
        overflow: hidden;
    }
     .nav-bar {
        background:blue;
        color:#fff;
    }
    ul{
        padding:50px 10px;
    }
    li{
        height:60px;
        line-height: 60px;
    }
</style>