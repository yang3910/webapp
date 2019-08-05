<template>
  <div class="youhui-list">
      <GoodsList :list="list"></GoodsList>
  </div>
</template>

<script>
import { discount_choice_api } from "api/discount";
import GoodsList from 'common/goodsList';
export default {
  name: "Choice",
  async created() {
    let data = await discount_choice_api();
    console.log(data);
    this.list=data.data;

  },
  data(){
      return {
          list:[],
      }
  },
  components:{
    GoodsList,
  }
  
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
.youhui-list {
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 0rem 0rem 0.2rem;
  overflow: auto;
}
</style>

