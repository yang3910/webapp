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
        click:true,
        // pullDownRefresh:true,
        pullUpLoad:true,
    });
},
  methods:{
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

<style lang="scss" scoped>
    .wrapper{
        height:100%;
    }
</style>

