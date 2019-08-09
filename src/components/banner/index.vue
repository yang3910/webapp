<template>
  <div class="banner">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <div class="download-info-product product">
            <div class="img">
              <img
                :src=item.img
              />
            </div>
            <div class="download-info-product product-info">
              <p>{{item.name}}</p>
              <p>
               {{item.price}}
                <span>{{item.count}}</span>
                <span>{{item.pricetol}}</span>
              </p>
            </div>
            <div class="open">{{item.open}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Banner",
  created() {
    let arr = [
      {
        img:"http://shihuo.hupucdn.com/def/20190226/4bb2934568bcf762e2c3b6505654663d1551170900.jpg",
        name:"看看 很慌",
        price:"￥222",
        count:"3折",
        pricetol:"￥444",
        open:"打开"
      },
       {
        img:"http://shihuo.hupucdn.com/def/20190226/4bb2934568bcf762e2c3b6505654663d1551170900.jpg",
        name:"哈哈哈 音速6",
        price:"￥269",
        count:"4.2折",
        pricetol:"￥639",
        open:"打开"
      },
       {
        img:"http://shihuo.hupucdn.com/def/20190226/4bb2934568bcf762e2c3b6505654663d1551170900.jpg",
        name:"就拒绝",
        price:"￥888",
        count:"4.2折",
        pricetol:"￥639",
        open:"打开"
      }
     
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
            disableOnInteraction: false
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.swiper-wrapper {
  height: 1.2rem;
  width: 100%;
  top: 0;
  left: 0;
}
.swiper-slide {
  background: #fff;
  width: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-slide a:nth-child(1) {
  border-right: 1px solid #f3f3f3;
}
.left {
  width: 3rem;
  background: #fff;
}
.swiper-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.img{
  width: 1rem;
  height: 1rem;
  background: #fff;
  margin-top: .1rem;
  margin-left: -.3rem
}
.product{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: rgba(0,0,0,0.9);
  height: 1.2rem;
}
.product-info{
  margin-left: -3rem;
  height: 1.2rem;
  margin-left: .4rem
}
.product-info p{
  color: #fff;
  font-size: .4rem;
  margin: 0;
  padding: 0 .1rem 0
}
.product-info p span:nth-child(1){
  width: .7rem;
  height: .5rem;
  background: #ff4338;
  padding: 0 .1rem 0
}
.open{
  width: 1rem;
  height: .8rem;
  background: #ff4338;
  color: #fff;
  font-size: .4rem;
  line-height: .8rem;
  text-align: center;
  margin-top: .2rem
}
</style>

