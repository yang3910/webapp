<template>
    <div class="details">
        8888
    </div>
</template>

<script>
import {goods_details} from "api/goods"
export default {
name:"Details",
props:["id"],
async created(){
    let data = await goods_details(this.id)
}
}
</script>

<style>

</style>
