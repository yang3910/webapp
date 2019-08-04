<template>
  <div id="home">
    
    
  </div>
</template>

<script>
import {goods_api} from "../../api/goods"
export default {
  name: "Home",
  async created() {
    let data = await goods_api();
    console.log(data)
  },
};
</script>

<style lang="scss" scoped>

</style>
