<template>
  <div id="find">
    <Swiper></Swiper>
    <ul class="culomn">
      <router-link to tag="li">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png"
        />
        <span>众测</span>
      </router-link>
      <router-link to tag="li">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png"
        />
        <span>栏目</span>
      </router-link>
      <router-link to tag="li">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png"
        />
        <span>最新</span>
      </router-link>
      <router-link to tag="li">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png"
        />
        <span>最热</span>
      </router-link>
    </ul>
    <div class="talk">
      <h3>热门话题</h3>
      <ul>
        <router-link to tag="li">
          <img
            src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
            alt
          />
          <p>#晒穿搭，AJ11 CONCORD领回家#</p>
        </router-link>
        <router-link to tag="li">
          <img
            src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
            alt
          />
          <p>#晒穿搭，AJ11 CONCORD领回家#</p>
        </router-link>
        <router-link to tag="li">
          <img
            src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
            alt
          />
          <p>#晒穿搭，AJ11 CONCORD领回家#</p>
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
</template>

<script>
import Swiper from "common/swiper";
export default {
  name: "Find",
  components: {
    Swiper
  },
  data() {
    return {
      list: [
        { name: "今日推荐", path: "/find/tuiJian" },
        { name: "篮球", path: "/find/lanQiu" },
        { name: "视频", path: "/find/shiPin" },
        { name: "最新资讯", path: "/find/zuiXin" },
        { name: "潮流风向", path: "/find/chaoLiu" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#find {
  height: 100%;
  background: #f0f3f5;
  font-family: Helvetica, sans-serif;
}
.culomn {
  display: flex;
  width: 100%;
  height: 1.88rem;
  box-sizing: border-box;
  padding: 0.266667rem 0rem 0rem;
  background: #fff;
  li {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.32rem;
    color: #666;
    img {
      width: 0.973333rem;
      height: 0.826667rem;
    }
  }
}
.talk {
  margin-top: 0.266667rem;
  background: #fff;
  height: 3.36rem;
  box-sizing: border-box;
  h3 {
    padding: 0.266667rem;
  }
  ul {
    height: 1.653333rem;
    padding: 0rem;
    display: flex;
    justify-content: space-around;
    li {
      width: 3.2rem;
      text-align: center;
      overflow: hidden;
      position: relative;
      img {
        width: 3.426667rem;
        height: 3.426667rem;
      }
      p {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: rgba($color: #000, $alpha: 0.2);
        position: absolute;
        top: 0rem;
        font-size: 0.346667rem;
        color: #fff;
        padding: 0rem 0.266667rem;
      }
    }
  }
}
#main {
  height: 100%;
  background: #fff;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 100%;
      height: 1.066667rem;
      line-height: 1.066667rem;
      font-size: 0.346667rem;
      text-align: center;
      color: #333;
    }
  }
}
#main ul .router-link-active {
  color: #c23;
  border-bottom: 2px solid #c23;
}
</style>
