<template>
    <div class="running">
            <div class="listviews">
       <ul v-for="(item,index) in runningList" :key="index">
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
    </div>
</template>
<script>
import { goods_api_running } from "../../api/goods";
export default {
    name:"Running",
     async created(){
 let data=await goods_api_running()
    console.log(data.data);
      this.runningList = data.data
    },
    data(){
        return{
              runningList:[],
        }
    }
}
</script>
<style>

</style>