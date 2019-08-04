<template>
  <div id="home">
     <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index"> <img :src="item" />
  </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import {goods_api} from "../../api/goods";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Home",
  async created() {
    let data = await goods_api();
    console.log(data);
  
      let arr = [
        "https://static.maizuo.com/v5/upload/11191300f74c0cfde6560c32ec64bdf9.jpg?x-oss-process=image/quality,Q_70",
        "https://static.maizuo.com/v5/upload/127d12641c751ad1ecb82801435f5db4.jpg?x-oss-process=image/quality,Q_70",
        "https://static.maizuo.com/v5/upload/683067671e17cce7b5647693d5733ea3.jpg?x-oss-process=image/quality,Q_70"
      ];
      this.banner = arr;
    },
  data() {
    return {
      banner: []
    };
  },


  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: true
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }, 
};
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    overflow: hidden;
    height: 300px;
}  
</style>
