<template>
    <div class="sortlist">
      <div class="list">
        
              <ly-BScroll ref="lyscroll">
       <div class="listviews">
       <v-touch 
          tag="ul" 
       >
          <div class="goods_item_pic">
          <img
          
          />
        </div>
        <div class="goods_item_info">
          <p>
            <span class="title">999</span>
          </p>
           <!-- <h2>{{item.data.intro}}</h2> -->
          <p>
            <span>777<i>000</i></span>
          </p>
        </div>
       </v-touch>
    </div>
      </ly-BScroll>
      </div>
    </div>
</template>
<script>
import { sports_api_basketball,goods_api_running} from "../../api/goods";
export default {
    data(){
        return{
            value:'',
        }
    },
    props:{
        mval:{
            type:Number,
            required:true,
        }
    },
 updated(){
  this.value=this.mval;
  console.log(this.value);
  console.log(this.mval)
}
}
</script>
<style scoped>
.sortlist{
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

