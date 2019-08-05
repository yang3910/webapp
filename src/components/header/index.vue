<template>
    <div class="header">
        <slot></slot>
        <h2>{{title}}</h2>
        <h4>...</h4>
    </div>
</template>

<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"篮球专区"
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
        display: flex;
        color:#333;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top:0;
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