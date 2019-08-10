<template>
  <div>
    <div class="main" >
      <div class="top">
        <span @click="handleBack()">&lt;返回</span>
      </div>
      <div class="div-img" :style="{background:Xinx.goodsImg}"></div>
      <div class="title">
        <span class="money">￥{{Xinx.goodsPrice}}</span>
        <span class="name">{{Xinx.goodsName}}</span>
      </div>
      <div class="jieshao">{{Xinx.introduce}}</div>
      <div class="info">
        <p class="lx">电话:{{Xinx.tel}}</p>
        <p class="dz">地址:{{Xinx.address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
    name:"Detail",
  data() {
    return {
      Xinx: {},
      name:"yang",
      background:""
    };
  },
  created() {
    // console.log(this.goodsid, this.name);
    axios
      .get("/youhui/goodsList", {
        params: {
          goodsid: this.goodsid
        }
      })
      .then(data => {
        console.log(data);
        this.Xinx = data.data;
        
      });
  },
  props: ["goodsid"],
  methods:{
    handleBack(){
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.top{
  height: 1.44rem;
  background:#fa215f;
  span{
    padding-left: .4rem;
    font-size: .533333rem;
    line-height: 1.44rem;
    color:#fff;
    font-weight: bold;
  }
}
.main{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    // padding: 0rem .4rem;
    .div-img{
        width: 10rem;
        height: 10rem;
    }
    .title{
        height: 1.44rem;
        background: #fa215f;
        .money{
            color: #fff;
            font-size: .4rem;
            line-height: 1.44rem;
            padding-left: .4rem;
        }
        .name{
            color: #000;
            font-size: .48rem;
            margin-left: .533333rem;
            line-height: 1.44rem;
        }
    }
    .jieshao{
        padding: .266667rem;;
        color: #051b2b;
        font-size: .373333rem;
        line-height: .373333rem；
    }
    .info{
        .lx{
            color: #000;
            font-size: .4rem;
            padding-right: .4rem;
            text-align: right;
        }
        .dz{
            color: #000;
            font-size: .4rem;
            padding-right: .4rem;
            text-align: right;
        }
    }
}
</style>
