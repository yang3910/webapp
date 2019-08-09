<template>
  <div id="sports">
    <Pop/>
    <Header title="篮球专区">
      <template v-slot>
        <v-touch @tap="handleTo()" tag="p">&lt;</v-touch>
      </template>
    </Header>

    <div class="sec">
    <div class="sports_body">
      <ul v-for="(item,index) in basketballList" :key="index">
        <router-link to="/shop/list" tag="li">
          <span>
            <img :src="item.img" />
          </span>
          <p>{{item.nm}}</p>
        </router-link>
      </ul>
    </div>
    <div class="message">
         <div class="swiper-container" ref="container">
           <div class="left"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="http://www.shihuo.cn/column/198.html#qk=hosttest">球鞋百科知多少</a>
                  <a href="http://www.shihuo.cn/article/detail/6664.html#qk=hosttest">乔丹北斗科技芯</a>
                </div>
                <div class="swiper-slide">
                <a href="http://www.shihuo.cn/article/detail/6863.html#qk=hosttest">编织横行时代</a>
                <a href="http://www.shihuo.cn/article/detail/6675.html#qk=hosttest">签名鞋Logo说</a>
                </div>
                <div class="swiper-slide">
                  <a href="http://www.shihuo.cn/article/detail/6752.html#qk=hosttest">为什么买AJ</a>
                  <a href="http://www.shihuo.cn/article/detail/6753.html#qk=hosttest">AJ潮流效应</a>
                </div>
            </div>
         </div>
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
     <div class="hot">
       <div class="top">
        <h3>欲望清单</h3>
        <span>查看更多 ></span>
       </div>
        <div class="hot-list">
        <ul v-for="(item,index) in list" :key="index">
        <router-link to="/mine"  tag="li" class="activity">
             <img :src="item.img" />
            <span>{{item.name}}</span>
            <i>{{item.info}}</i>
        </router-link>
      </ul>
        </div>
  
     </div>
     <div class="sports_list">
       <v-touch v-for="(item,index) in sportsList" :key="index"
        :class="onIndex==index?'on':'off'"
        @tap="handleClick(index)">{{item}}
         </v-touch>
     </div>
         <SortList :mval=onIndex></SortList>
  </div>
  </div>
</template>
<script>
import { sports_api_basketball } from "../../api/goods";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import SortList from "common/sortList"
export default {
  name: "Sports",
  components:{
       SortList
  },
  async created() {
    let data = await sports_api_basketball();
    console.log(data.data);
    //   this.sportsList = data.data
     var mySwiper = new Swiper(this.$refs.container, {
          loop: true, // 循环模式选项
           direction: 'vertical',//垂直切换选项
           autoplay: {
           disableOnInteraction: false
          }
    })
  },
  methods:{
     handleClick(index){
        this.onIndex=index;
        // console.log(this.onIndex)
      },
      handleTo(){
         this.$router.back();
      },
      
  },
  data() {
    return {
       onIndex:0,
       banner: [],
       sportsList:["全部","单品推荐","搭人清单","用户晒物"],
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
         
         ],
         list:[
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
          info:"查看更多"
        },
         ],
      basketballList: [
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiuxie2.png",
          nm: "篮球鞋"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png",
          nm: "篮球上装"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/qiuku2.png",
          nm: "篮球下装"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiuhuju1.png",
          nm: "篮球配件"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiu2.png",
          nm: "篮球"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png",
          nm: "Jordan"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png",
          nm: "adidas"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png",
          nm: "Nike"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/ua.png",
          nm: "UA"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png",
          nm: "全部"
        }
      ]
    };
  },

    
       

};
</script>
<style scoped>
#sports{
  margin: 0;
  display: flex;
  flex-direction: column;
   height: 16rem;
}
.sec{
  height:100%; overflow: auto;
}
.sports_body{
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.sports_body ul {
    height: 2.3rem;
    background: #fff;
    margin: 0
}
.sports_body ul li{
  width: 2rem;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sports_body ul li p{
font-size: .4rem
}
 
.sports_body ul li img{
width: 80%;
height: 80%;
}
 .swiper-wrapper{
  height: 1rem;
  line-height: 1rem;
 width:7rem
}
.swiper-slide{
  background: #fff;
   width: 7rem
} 
.swiper-slide a{
  color: #666;
  padding: .3rem;
font-size: .4rem
}
.swiper-slide a:nth-child(1){
  border-right: 1px solid #f3f3f3;
}
.left{
  width: 3rem;
  background:#fff;  

}
.swiper-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
 .hot-activity{
 display: flex;
 margin-top: .3rem;
  flex-direction: column;
background: #fff;
 margin-left: .001rem
}
.hot-activity img{
  width: 86%;
  height: 68%
}
.hot-activity h3{
  padding: .1rem;
    margin: 0;
    padding-bottom: .3rem
}
.hot-activity ul .activity{
  display: flex;
  height:3.1rem;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: .1rem
}
.hot-activity ul .activity span{
    color: #333;
  font-size: .375rem;
   padding-top: .1rem;
   
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
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
.top span{
  padding-right: .2rem
}
.hot-list{
width: 20rem;
 display: flex;
 width: 100%;
 flex-direction: row;
 white-space: nowrap;
 overflow: auto;
}
.hot{
   margin-top: .3rem;
   background: #fff;
   margin-left: .001rem;
    width: 10rem;
}
.hot img{
  width: 86%;
  height: 68%
}
.hot h3{
  padding: .1rem;
  margin: 0;
  padding-bottom: .3rem
}
.hot ul .activity{
  display: flex;
  height:3.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: .1rem
}
.hot ul .activity span{
  color: #333;
  font-size: .375rem;
  padding-top: .1rem;
   
}
.hot ul .activity i{
   color: #666;
    font-size: .3rem;
    padding-top: .1rem
}
.hot ul{
    width: 3.3rem;
    background:#fff;
    margin: 0;
    height:3.2rem;
}
.sports_list{
  height: 1rem;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: .3rem;
  align-items: center;
  font-size: .4rem
}
.on{
  color: #FF4338;
  border-bottom: 1px solid #FF4338;
  padding-bottom: .1rem
}
.off{
  color: #333
}
</style>

