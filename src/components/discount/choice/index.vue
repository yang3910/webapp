<template>
<div class="context">
      <div class="youhui-list">
  <!-- <YBScroll> -->
      <GoodsList :goodslist="goodsList"></GoodsList>
  <!-- </YBScroll> -->
    </div>
</div>



</template>

<script>
import { discount_choice_api } from "api/discount";
import GoodsList from "common/goodsList";
export default {
  name: "Choice",
  async created() {
    let data = await discount_choice_api();
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].goodsid = i;
    }
    console.log(data.data);
    this.goodsList = data.data;
  },
  data() {
    return {
      goodsList: []
    };
  },
  components: {
    GoodsList,
  }
};
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
.context{
  height: 100%;
}
.youhui-list {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 0rem 0rem 0rem 0.2rem; 
}
</style>

