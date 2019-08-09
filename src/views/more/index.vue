<template>
  <div id="more">
    <div class="container">
      <div class="banner_block">
        <div class="left">
          <img
            src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png"
            alt
          />
        </div>
        <div class="login">
          <a href="#">登录</a>
          <a href="#">注册</a>
          <p class="jb">金币 0</p>
        </div>
      </div>
      <div class="menu_list">
        <div class="tit">
          <span>我的识货</span>
        </div>
        <ul>
          <li>
            <a href="#">
              <img
                src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png"
                alt
              />
              <p>我的收藏</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt />
              <p>我的晒物</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt />
              <p>我的礼品</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="menu_list">
        <div class="tit">
          <span>识货必备</span>
        </div>
        <ul>
          <li>
            <a href="#">
              <img
                src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png"
                alt
              />
              <p>推荐店铺</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt />
              <p>黑科技选鞋</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "More"
};
</script>

<style lang="scss" scoped>
html {
  font-size: 10vw;
}
element.style {
  font-size: 75px;
}
#more {
  opacity: 1;
  font-size: 24px;
  margin: 0 auto;
  padding: 0;
  color: #444;
  font: 12px/1.5 Helvetica, sans-serif;
  background: #f7f7f7;
  box-sizing: border-box;
}
.container {
  padding-bottom: 4rem;
  padding-top: 0;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  position: relative;
  margin: 0;
}
.banner_block {
  width: 100%;
  height: 4rem;
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png)
    top no-repeat;
  background-size: 100% auto;
  font-family: Helvetica, sans-serif;
}
.banner_block .left {
  width: 1.33333rem;
  height: 1.33333rem;
  margin-top: 1.86667rem;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 0.66667rem;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  float: left;
}
.banner_block .left img {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
}
.banner_block .login {
  font-size: 0.373rem;
  padding-left: 0.5rem;
  width: 75%;
  float: left;
  margin-top: 2rem;
  color: #fff;
}
.banner_block .login a {
  font-size: 0.4rem;
  color: #fff;
  margin-right: 0.26667rem;
  text-decoration: none;
}
.banner_block .jb {
  font-size: 0.32rem;
  margin-top: 0.13333rem;
}
.menu_list {
  padding: 0.2rem;
  background: #fff;
  margin-bottom: 0.26667rem;
}
.menu_list .tit {
  font-size: 0.373rem;
  color: #333;
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png)
    left center repeat-x;
  background-size: 0.06667rem;
}
.menu_list .tit span {
  background: #fff;
  padding: 0 0.133rem;
}
.menu_list ul {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu_list ul li {
  font-size: 0.32rem;
  width: 25%;
  text-align: center;
  color: #333;
  margin: 0.26667rem 0;
  position: relative;
  padding: 0;
}
.menu_list ul li a {
  display: block;
  color: #444;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.menu_list ul li a img {
  width: 1.2rem;
  border: 0;
  outline: 0;
}
</style>
