<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1"
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "swiper",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    //鼠标滑过pagination控制swiper切换
    for (var i = 0; i < mySwiper.pagination.bullets.length; i++) {
      mySwiper.pagination.bullets[i].onmouseover = function() {
        this.click();
      };
      //如果你在swiper初始化后才决定使用clickable，可以这样设置
      mySwiper.params.pagination.clickable = true;
      //此外还需要重新初始化pagination
      mySwiper.pagination.destroy();
      mySwiper.pagination.init();
      mySwiper.pagination.bullets
        .eq(0)
        .addClass("swiper-pagination-bullet-active");
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 10rem;
  height: 3.573333rem;
  position: relative;
  img {
    width: 10rem;
    height: 3.573333rem;
    vertical-align: top;
  }
  .swiper-pagination{
     position: absolute;
     bottom: 0rem;
     text-align: right;
  }
}
</style>