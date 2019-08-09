<template>
  <div id="home">
  <Sousuo v-if="ss" ></Sousuo>
  <div class="sec"  v-if="flag" >
        <div class="gg">
          <Banner></Banner>
        </div>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="search">
      <form>
        <span>111</span>
        <v-touch
        tag="input"
        @tap="handleSearch()"
        placeholder="搜索商品、品牌" 
        class="search_input"></v-touch>
        <i>&#xe71b;</i>
      </form>
    </div>
  
    <div class="sort">
      <ul v-for="(item,index) in sorts" :key="index">
        <router-link :to="item.path"  tag="li" class="sortsort">
          <div class="sort_left">
            <span>{{item.name}}</span>
            <i>{{item.info}}</i>
          </div>
          <div class="sort_right">
            <img :src="item.img" />
          </div>
        </router-link>
      </ul>
    </div>
    <div class="center-top">
      <ul class="block" v-for="(item,index) in blocks" :key="index">
        <router-link
        tag="li"
        :to="item.path"
        class="block-li"
        >
        <h2>{{item.name}}</h2>
        <p>{{item.info}}</p>
        <img :src="item.img">
        </router-link>
      </ul>
    </div>
    <div class="hot-activity">
        <h3>热门活动</h3>
        <div class="ac">
        <ul v-for="(item,index) in activitys" :key="index">
        <router-link to="/mine"  tag="li" class="activity">
             <img :src="item.img" />
            <span>{{item.name}}</span>
            <i>{{item.info}}</i>
        </router-link>
       
      </ul>
        </div>
    </div>
    <div class="nav">
      <div class="nav_top">
          <ul>
            <router-link to="/home/commend" tag="li">推荐</router-link>
            <router-link to="/home/basketball" tag="li">篮球</router-link>
            <router-link to="/home/running" tag="li">跑步</router-link>
            <router-link to="/home/fitness" tag="li">健身</router-link>
            <router-link to="/home/trend" tag="li">潮流</router-link>
          </ul>
      </div>
      <div class="nav_bottom">
          <a>
            <router-link class="fl" to="/home/commend">全部</router-link>
            <router-link  class="fl" to="/home/basketball" >单品推荐</router-link>
            <router-link  class="fl" to="/home/basketball" >原创精选</router-link>
            <router-link  class="fl" to="/home/basketball" >用户晒物</router-link>
          </a>
      </div>
    </div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    </div>
  </div>
</template>
<script>
import Sousuo from "views/sousuo"
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Home",
  components:{
Sousuo
  },
  methods:{
handleSearch(){
    this.flag=false;
    this.ss=true;
}
  },
created() {
    let arr = [
      "http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1",
      "http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1",
      "http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1",
      "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1",
      "http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1",
      "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1"
    ];
    this.banner = arr;
  },
  data() {
    return {
      page:"",
      flag:true,
       ss:false,
      banner: [],
      sorts: [
        {
          name: "篮球",
          info: "纯白系列秒杀",
          path:"/sports",
          img:
            "http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          name: "跑步",
          info: "女王节秒杀",
          path:"/running",
          img:
            "http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          name: "健身",
          info: "布瑞特装备秒杀",
          path:"/sports",
          img:
            "http://shihuo.hupucdn.com/def/20170915/f876eb7f43db68bf6618332e8e8d16391505460754.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          name: "足球",
          info: "其实是在吹总裁",
          path:"/sports",
          img:
            "http://shihuo.hupucdn.com/def/20170919/3be93b46f0580a025e26ecc4a444e4b81505807923.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          name: "潮流",
          info: "78元短袖秒杀",
           path:"/sports",
          img:
            "http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          name: "数码",
          info: "好声+品质",
           path:"/sports",
          img:
            "http://shihuo.hupucdn.com/trade/reposition/2018-01-07/f8adecdd315683a6f3c39aa23c1ea0db.png?imageView2/0/w/160/h/160/interlace/1"
        }
      ],
      blocks:[
        {
          path:"/discount",
          name:"今日优惠",
          info:"EQT 5折好价",
          img:"http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
        },
         {
          path:"/discount",
          name:"限时团购",
          info:"春节不打烊",
          img:"http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"
        },
         {
          path:"/discount",
          name:"免费抽奖",
          info:"识货抽奖 天天免费",
          img:"http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1"
        }
      ],
      activitys:[
        {
          name:"skullcandy骷髅头...",
          info:"券后低至89元起",
          img:"http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg"
        },
          {
          name:"独家折扣专场",
          info:"买到就是赚到",
          img:"http://shihuo.hupucdn.com/appZone/201812/0411/965ca32793c9a42a11c0de32465d9a64.jpg"
        },
          {
          name:"实战性价比之选",
          info:"球星支线",
          img:"http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg"
        },
          {
          name:"5折上新，95分专...",
          info:"低价折扣超值精选",
          img:"http://shihuo.hupucdn.com/appZone/201904/1215/74d68d16fe92f589562be729a89ee9a3.jpg"
        },
          {
          name:"跑步评测室",
          info:"最酷炫的跑步装备评测",
          img:"http://shihuo.hupucdn.com/appZone/201803/2617/e6ae975eca6480b86354e92fa866a8e1.jpg"
        },
          {
          name:"热门资讯",
          info:"最新最热门的数码资讯",
          img:"http://shihuo.hupucdn.com/appZone/201805/1414/c5f797407c24e87cb7648abc937e9955.jpg"
        },
      ]
    };
  },

  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  height: 50rem;
}
.gg{
  z-index: 10;
  height: 1rem;
  position: absolute;;
  top: 0;
  left: 0;
    width: 100%;
}
.swiper-container {
  height: 6.075rem;
}
.swiper-container img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.swiper-pagination {
  text-align: right;
  padding-right: 0.65rem;
  bottom: 0.02rem;
}
.search {
  position: absolute;
  z-index: 10;
  top: 1.6rem;
  left: 0.3125rem;
}
.search .search_input {
  width: 7.5rem;
  height: 0.75rem;
  line-height: 0.625rem;
  border-radius: 0 0.2rem 0.2rem 0;
  border: none;
  float: left;
  background: #fff
}
.search span {
  height: 0.75rem;
  width: 0.5rem;
  background: #fff;
  display: inline-block;
  border-radius: 0.2rem 0 0 0.2rem;
  float: left;
}
.sec{
  flex: 1; overflow: auto;
  position: relative;
}
 .sec .sort{
   flex-direction: row;
   margin-top: .3rem;
   display: flex;
   flex-wrap: wrap
 }
 .sec .sort ul{
width: 5rem;
height: 1.75rem;
display: flex;
flex-direction: row;
margin: 0
}
.sec .sortsort{
display: flex;
width:100%;
height:100%;
background: #fff;
flex-direction: row;
border:1px solid #CCC
}
.sec .sortsort:nth-child(2n-1){
  border-right: none
}
.sec .sortsort:nth-child(1){
border-top: none
}
.sec .sortsort:nth-child(2){
border-top: none
}
.sec .sortsort:nth-child(5){
border-bottom: none
}
.sec .sortsort:nth-child(6){
border-bottom: none
}
.sec .sortsort .sort_left{
  display: flex;
flex-direction: column;
width: 5.5rem;
}
.sec .sortsort .sort_left span{
  color: #333;
  font-size: .4375rem;
  margin-top: .2rem;
  margin-left: .2rem}
  .sec .sortsort .sort_left i{
    color: #666;
    font-size: .3rem;
     margin-left: .2rem
  }
.sec .sortsort img{
  width: 60%;
  height: 60%
}
.sec .sortsort .sort_right{
display: flex;
align-items: center;
}
.center-top{
  display: flex;
  flex-direction: row;
}
.center-top .block{
 height: 3.75rem;
 width: 4rem;
 margin: .2rem 0 .2rem .2rem;
 background: #fff;
}
.center-top .block:nth-child(3){
  margin-right: .2rem
}
.center-top .block .block-li{
  width: 100%;
   align-items: center;
   display: flex;
   flex-direction: column;
  list-style: none;
  justify-content: center
}
.center-top .block img{
    width: 60%;
  height: 40%
}
.center-top .block h2{
   color: #333;
  font-size: .4375rem;

}
.center-top .block p{
  color: #666;
    font-size: .3rem;
}
.sec .hot-activity{
 display: flex;
  flex-direction: column;;
background: #fff;
 margin-left: .001rem
}
.hot-activity img{
  width: 60%;
  height: 40%
}
.hot-activity h3{
  padding: .1rem;
   margin: 0;
}
.hot-activity ul .activity{

  display: flex;
  height:3.2rem;
flex-direction: column;
justify-content: center;
align-items: center;
}
.hot-activity ul .activity span{
    color: #333;
  font-size: .375rem;
   padding-top: .1rem
}
.hot-activity ul .activity i{
   color: #666;
    font-size: .3rem;
    padding-top: .1rem
}
.hot-activity ul{
    width: 3.3rem;
    background:#fff;
    margin: 0;
    height:3.2rem;
}
.ac{
   flex-direction: row;
   display: flex;
  flex-wrap: wrap;
}
.listviews{
  margin-top: .3rem;
  height: 10.25rem;
  background: red;
  display: flex;
}
.listviews img{
  width: 60%;
   height: 60%;
}
.nav{
  height: 1.8rem;
  background: #fff
 }
.nav_top ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: .1rem
}
.nav_top ul .router-link-active{
  border-bottom: 2px solid #FF4338;
  color:#FF4338
}
.nav_top ul li{
  color: #333;
  list-style: none;
}
.nav_bottom a {
  display: flex;
  margin: 0;
  justify-content: space-around;
  align-items: center
}
.nav_bottom a .fl{
  width: 2.005rem;
  height: .6rem;
  background: #999;
  color: #333;
}
.nav_bottom a .router-link-active{
  background: #FF4338
}
</style>
