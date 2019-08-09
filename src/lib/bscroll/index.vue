
<template>
    <div class="wrapper" ref="wrapper">
<slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
name:"ly-BScroll",
mounted(){
   this.scroll= new BScroll(this.$refs.wrapper,{
        tap:true,
        // pullDownRefresh:true,
        pullUpLoad:true,
    });
},
  methods:{
      //下拉刷新
        // handlepullingDown(callback){
        //     this.scroll.on("pullingDown",()=>{
        //         callback();
        //     })
        // },
        // handlefinishPullDown(){
        //     this.scroll.finishPullDown();
        //     this.scroll.refresh();
        // },
        handlepullingUp(callback){
           
            this.scroll.on("pullingUp",()=>{
                callback();
            })
        },
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }


}
</script>

<style>
.wrapper{
    height: 100%;
}
</style>
