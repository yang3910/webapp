<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"YBscroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            pullUpLoad:true,
        })
    },
    methods:{
        handlepullingUp(){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        height:100%;
    }
</style>

