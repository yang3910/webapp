<template>
  <ul>
    <router-link v-for="(item,index) in goodslist" :key="index" tag="li" :to="item.href">
      <img :src="item.img" />
      <div class="detail-box">
        <p>{{item.title}}</p>
        <span>{{item.subtitle}}</span>
        <div>
          <b>{{item.business}}</b>
          <i>{{item.date}}</i>
        </div>
      </div>
    </router-link>
  </ul>

  <!-- <p>{{val}}</p> -->
</template>

<script>
export default {
  name: "goodsList",
  props: {
    goodslist: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
ul {
  width: 9.8rem;
  li {
    width: 100%;
    height: 3.413333rem;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem 0.2rem 0rem;
    border-bottom: 1px solid gray;
    position: relative;
    img {
      width: 2.88rem;
      height: 2.88rem;
      vertical-align: top;
      float: left;
      margin-right: 0.266667rem;
    }
    .detail-box {
      height: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: .346667rem;
      p {
        width: 6.48rem;
        color: #333;
        font-size: 0.4rem;
        font-family: Helvetica, sans-serif;
        display: inline-block;
      }
      span {
        width: 6.333333rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        font-size: 0.4rem;
        color: #ff4338;
      }
      b {
        font-weight: normal;
        height: 0.48rem;
        color: #999;
        font-size: 0.32rem;
        float: left;
      }
      i {
        width: 1.64rem;
        height: 0.48rem;
        font-size: 0.32rem;
        color: #999;
        float: right;
        font-style: normal;
      }
    }
  }
}
</style>

