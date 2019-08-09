
<template>
    <div  class="pop" v-if="$store.state.flag">
        <div class="tc">
            <v-touch tag="div" @tap="dianji" class="top1">首页</v-touch>
            <v-touch tag="div" @tap="mine" class="top2">我的</v-touch>
        </div>
    </div>
</template>

<script>
import {mapState } from "vuex"
export default {
name:"Pop",
methods:{
    dianji(){
        this.$router.push("/home/commend")
    },
    mine(){
        this.$router.push("/mine")
    }
},
}
</script>
<style>
.tc{
    width: 3.8rem;
    position: absolute;
    height: 3rem;
    background: rgba(0,0,0,0.2);
   border-radius: .3rem;
    right: .4rem;
    top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 999;
}
.tc .top2{
     width: 3.8rem;
   
    color: #fff;
    font-size: .5rem;  
    text-align: center;
}
.top1{
    width: 3.8rem;
  
    text-align: center;
    color: #fff;
    font-size: .5rem;  
  
    
}
</style>
