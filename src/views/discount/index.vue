<template>
<!-- <YBScroll ref="yscroll"> -->
  <div id="discount">
    <!-- <div></div> -->
    <div class="top-bar">
      <div class="components-input-demo-presuffix">
        <a-input
          placeholder="Basic usage"
        >
          <a-icon />
          <a-icon />
        </a-input>
        <p class="cancel" v-if="flag" @click="handleCancel()">取消</p>
      </div>
      <div class="Coupon">
        <p>
          已搜集
          <span>0</span>张优惠券
          <router-link class="search-ticket" to="ticket" tag="li">搜券指南></router-link>
        </p>
      </div>
    </div>
    <div class="column">
      <b>品牌特卖</b>
      <a href="#">更多品牌></a>
      <ul class="clothes">
        <router-link to="#" tag="li" class="clothes-li">
          <img
            src="http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png"
          />
          <span>运动</span>
        </router-link>
        <router-link to="#" tag="li" class="clothes-li">
          <img
            src="http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png"
          />
          <span>休闲</span>
        </router-link>
        <router-link to="#" tag="li" class="clothes-li">
          <img
            src="http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png"
          />
          <span>户外</span>
        </router-link>
        <router-link to="#" tag="li" class="clothes-li">
          <img
            src="http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png"
          />
          <span>数码</span>
        </router-link>
        <router-link to="#" tag="li" class="clothes-li">
          <img
            src="http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png"
          />
          <span>更多</span>
        </router-link>
      </ul>
      <ul class="pinpai">
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png"
          />
          <p class="tit">日高</p>
          <p class="subtit">定全50抵450</p>
        </router-link>
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png"
          />
          <p class="tit">日高</p>
          <p class="subtit">定全50抵450</p>
        </router-link>
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg"
          />
          <p class="tit">匹克</p>
          <p class="subtit">不止五折</p>
        </router-link>
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png"
          />
          <p class="tit">dickies</p>
          <p class="subtit">满11减10元</p>
        </router-link>
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png"
          />
          <p class="tit">铭瑄</p>
          <p class="subtit">虎扑专享满600减180</p>
        </router-link>
        <router-link to="#" tag="li" class="pinpai-li">
          <img
            class="img-bg"
            src="http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg"
          />
          <img
            class="img-logo"
            src="http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg"
          />
          <p class="tit">索尼</p>
          <p class="subtit">满48减10</p>
        </router-link>
      </ul>
    </div>
    <div id="main">
      <ul>
        <router-link
          v-for="(item,index) in list"
          :key="index"
          tag="li"
          :to="item.path"
        >{{item.name}}</router-link>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
<!-- </YBScroll> -->
</template>

<script>
// import YBScroll from "lib/bscroll";
export default {
  name: "Discount",
  data() {
    return {
      flag: "true",
      list: [
        { name: "精选", path: "/discount/choice" },
        { name: "鞋类", path: "/discount/clothes" },
        { name: "服饰", path: "/discount/digital" },
        { name: "数码", path: "/discount/footwear" },
        { name: "兴趣", path: "/discount/interest" }
      ],
      page: "精选"
    };
  },
  
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
page {
  height: 100%;
  box-sizing: border-box;
}
#discount {

  background: #f0f3f5;
}
.top-bar {
  box-sizing: border-box;
  padding-top: 0.266667rem;
  height: 2.2rem;
  background: #f0f3f5;
}
.components-input-demo-presuffix {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 0.32rem;
  margin: 0rem 0.4rem;
  .cancel {
    display: none;
  }
}
.Coupon {
  box-sizing: border-box;
  margin: 0.32rem 0.4rem;
  font-size: 0.32rem;
  span {
    font-size: 0.373333rem;
    font-weight: bold;
  }
  .search-ticket {
    color: grey;
    float: right;
    list-style: none;
    width: 2rem;
    height: 0.56rem;
    text-align: center;
    border: 1px solid grey;
    border-radius: 0.25rem;
  }
}
.column {
  width: 10rem;
  height: 10rem;
  padding: 0.4rem;
  box-sizing: border-box;
  margin-bottom: 0.266667rem;
  background: #fff;
  b {
    color: #333;
    font-size: 0.373333rem;
    height: 0.413333rem;
    width: 1.493333rem;
  }
  a {
    color: #999;
    width: 1.706667rem;
    height: 0.373333rem;
    font-size: 0.32rem;
    float: right;
  }
  .clothes {
    display: flex;
    justify-content: space-between;
    .clothes-li {
      width: 1.306667rem;
      height: 1.84rem;
      text-align: center;
      font-size: 0.346667rem;
      img {
        width: 1.28rem;
        height: 1.28rem;
      }
    }
  }
  .pinpai {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .pinpai-li {
      width: 2.933333rem;
      height: 2.933333rem;
      overflow: hidden;
      position: relative;
      text-align: center;
      margin: 0.266667rem 0rem 0rem 0rem;
      .img-bg {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
      .img-logo {
        width: 0.933333rem;
        height: 0.933333rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -0.933333rem 0rem 0rem -0.466667rem;
        vertical-align: top;
        border-radius: 0.933333rem;
      }
      .tit {
        font-size: 0.373333rem;
        color: #fff;
        height: 0.4rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: 0.1rem 0rem 0rem -0.4rem;
      }
      .subtit {
        width: 2.266667rem;
        height: 0.4rem;
        line-height: 0.32rem;
        color: #fff;
        background: #ff4338;
        font-size: 0.293333rem;
        border-radius: 0.2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: 0.7rem 0rem 0rem -1.133333rem;
      }
    }
  }
}
#main {
  background: #fff;
  height: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 100%;
      height: 1.173333rem;
      line-height: 1.173333rem;
      font-size: 0.346667rem;
      text-align: center;
      color: #333;
    }
  }
}
#main ul .router-link-active {
  color: #c33;
}

</style>
