<template>
    <div class="header">
        <slot></slot>
        <h2>{{title}}</h2>
         <v-touch tag="h4" @tap="handleMore">...</v-touch>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"篮球专区"
        }
    },
    methods:{
       ...mapMutations({
           handleMore:"handleMore"
       })
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        display: flex;
        color:#333;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        background: #f3f3f3;
        top:0;
        z-index: 99;
        border-bottom: 1px solid #999
    }
    .header h2{
            font-weight: 900;
    }
     .header>p{
        position: absolute;
        left:.3rem;
        top: -.2rem;
        font-size:1.6rem;
        color: #999;
    }
    .header>h4{
        position: absolute;
        right:.3rem;
        top: -.5rem;
        font-size:1.6rem;
        color: #999;
    }
</style>