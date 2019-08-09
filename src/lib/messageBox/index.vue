<template>
    <div class="messageBox">
        <div class="box">
            <div>首页</div>
            <div>我的</div>
        </div>
    </div>
</template>
<script>
export default {
name:"MessageBox",
}
</script>

<style>
.messageBox{
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 4rem;
    height: 3rem;
    background: rgba(0,0, 0,0.3);
    display: flex;
    justify-content: space-between;
    flex-direction: column

}
</style>
