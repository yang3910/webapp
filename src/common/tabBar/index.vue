<template>
  <div class="nav">
    <ul>
        <router-link 
            v-for="(item,index) in navs" :key="index" 
            :to="item.path" tag="li"
        >
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    icon:"&#xe663;",
                    text:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe607;",
                    text:"优惠",
                    path:"/discount"
                },
                {
                    icon:"&#xe746;",
                    text:"发现",
                    path:"/find"
                },
                {
                    icon:"&#xe653;",
                    text:"装备",
                    path:"/equip"
                },
                {
                    icon:"&#xe62c;",
                    text:"更多",
                    path:"/more"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}

.nav{
    width: 100%;
    height: 1.5rem;
    position: fixed;
    left:0;
    display: flex;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #ccc;  
    z-index: 999;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li{
            padding-top: .15rem;
            width: 100%;
            list-style:none;
            display: flex;
            flex-direction: column;
            text-align: center;
            i{
                font-size: .6rem;
            }
            span{
                font-size: .4rem;
            }
        }   
    }   
}

.nav ul .router-link-active{
    color: #c33;
}

</style>

