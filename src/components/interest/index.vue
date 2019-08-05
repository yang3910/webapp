<template>
  <div class="youhui-list">
    <ul>
      <router-link 
        v-for="(item,index) in interestList" :key="index"
        tag="li" 
        :to="item.href" >
        <img
          :src="item.img"
        />
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
  </div>
</template>

<script>
import { discount_interest_api } from "api/discount";
export default {
  name: "Choice",
  async created() {
    let data = await discount_interest_api();
    console.log(data);
    this.interestList=data.data;

  },
  data(){
      return {
          interestList:[],
      }
  }
  
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.youhui-list {
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 0rem 0rem 0.2rem;
  overflow: auto;
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
        p {
          width: 6.333333rem;
          height: 0.56rem;
          color: #333;
          font-size: 0.4rem;
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
}
</style>

