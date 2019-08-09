<template>
    <div class="trend">
        <ly-BScroll>
      <div class="listviews">
       <ul v-for="(item,index) in trendList" :key="index">
          <div class="goods_item_pic">
          <img
            :src="item.data.img"
          />
        </div>
        <div class="goods_item_info">
          <p>
            <span class="title">{{item.data.title}}</span>
          </p>
           <!-- <h2>{{item.data.intro}}</h2> -->
          <p>
            <span>{{item.data.merchant}}<i>{{item.data.price}}</i></span>
          </p>
        </div>
    </ul>
    </div>
        </ly-BScroll>
    </div>
</template>
<script>
import {goods_api_trend} from "../../api/goods"
export default {
    name:"Trend",
      async created(){
 let data=await goods_api_trend()
    console.log(data.data);
      this.trendList = data.data
    },
    data(){
        return{
              trendList:[],
        }
    }
}
</script>
<style>
.trend{
 height: 100%;
    overflow: auto;
}

</style>
