<template>
  <div class="youhui-list">
    <GoodsList :goodslist="goodsList"></GoodsList>
  </div>
</template>

<script>
import { discount_interest_api } from "api/discount";
import GoodsList from "common/goodsList";
export default {
  name: "Choice",
  async created() {
    let data = await discount_interest_api();
    console.log(data);
    this.goodsList = data.data;
  },
  data() {
    return {
      goodsList: []
    };
  },
  components: {
    GoodsList
  }
};
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

