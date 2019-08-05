<template>
    <div class="commend">
       <div class="listviews">
       <ul v-for="(item,index) in homeList" :key="index">
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
import { goods_api } from "../../api/goods";
export default {
    name:"Commend",
    async created(){
  let data = await goods_api();
      this.homeList = data.data
 
    },
    data(){
        return{
              homeList:[],
        }
    }
}
</script>
<style>
.commend{
    height: 100%;
    overflow: auto;
}
.listviews{
   padding-bottom: 1rem;
    padding-left: .2rem;
    padding-right: .2rem;
    overflow-x:hidden;
  background: #fff
}
 .listviews  .goods_item_pic img{
   width: 100%;
  height: 100%;
}
 .listviews  .goods_item_pic{
     width: 30%;
     position: relative
 }
 .listviews  .goods_item_info{
     width: 66%;
     position: relative;
     height: 3rem;
     margin-left: .26667rem;
     display: flex;
     flex-direction: column;
     padding-top: .3rem
 }
  .listviews  .goods_item_info h2{
      font-size: .6rem
  }
    .listviews  .goods_item_info i{
        color: #Ff4338;
        padding-left: .1rem
    }
 .listviews  .goods_item_info span{
      font-size: .4rem
  }
.listviews ul{
    display: flex;
    flex-direction: row;
    padding: .26667rem;
    border-bottom: 1px solid #e6e6e6;
    display: flex
}

</style>