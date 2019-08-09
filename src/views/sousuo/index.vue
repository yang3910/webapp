<template>
   <div class="searchList">
      <div class="top">
         <span></span>
         <input
          @keyup.enter="up"
          placeholder="搜索商品、品牌"
          @change="changeHandle($event)"
          v-model="value"
         />
      <v-touch class="cancel" tag="div" @tap="cancel">取消</v-touch>
      </div>
      <div class="find" v-if="flagg">
            <ul v-for="(item,index) in arr" :key="index">
               <v-touch @tap="dotHandler" tag="li" >
                  {{item}}
               </v-touch>
            </ul>
      </div>
      <div class="content-container" v-if="flag">
         <div class="hot_title">热门搜索</div>
          <div class="hot_goods_list" >
            <v-touch
            tag="div"
            class="hot_goods_name"
            v-for="(item,index) in hotList" 
            :key="index"
            @tap="handleDot()"
            >{{item.name}}</v-touch>
          </div>
<!-- 历史 -->
      <div class="hot_title">历史搜索</div>
        <div class="goods_list">
          <div class="goods_list_item">
            <v-touch class="goods_list_name" v-for="(item,index) in list" :key="index" tag="div" >
               <keep-alive>
              <v-touch
                @tap="dddd"
                class="goods_list_name_item"
                tag="div"
               >{{item}}</v-touch>
               </keep-alive>
               <v-touch @tap="cancels(index)" class="aa">x</v-touch>
            </v-touch>
          </div>
           
        </div>
        <div class="btn">清空历史记录</div>
      </div>
   </div>
</template>
<script>
import {hotSearch} from "../../api/goods"
import { goods_search} from "api/goods";
import {mapMutations,mapState} from "vuex"
export default {
   name:"sousuo" ,
data(){
return{
   flag:true,
   flagg:false,
   hotList:[],
   value:"",
   arr:[]
    }
},

computed:{
...mapState({
   list:state=>state.list,
})
},
methods:{
   up(){
      sessionStorage.setItem("list",JSON.stringify(this.list))
      console.log(this.value)
      this.value="";
      this.flagg=false;
      console.log(this.value)
      this.$router.push("/search");
   },

   dotHandler(){
      this.$router.back()
   },
   cancels(index){
      this.list.splice(index,1)
   },
   cancelAll(){
      this.list.length=0
   },
   cancel(){
        this.$router.go("/home")
   },
   handleDot(){
      this.$router.push("/youhui")
   },
   ...mapMutations({
      changeHandle:"changeHandle"
   }),
   dddd(){
      this.$router.push("/search");
   }
},
async created(){
   let data= await hotSearch()
   this.hotList=data.data;
},
watch:{
       value(newVal, oldVal){
            //防抖
            clearTimeout(this.timer)
            this.timer=setTimeout(async ()=>{
               let data = await goods_search(newVal);
                this.arr=data.data;
                this.flagg=true;
                this.flag=false;
                console.log(data)
            },500)
        }
  }
}
</script>
<style>
.top{
   width: 100%;
   height: 1.4rem;
   display: flex;
   align-items: center
}
.top input{
   height: 1rem;
   width: 70%;
   background: #f3f3f3;
   outline: none;
   border:1px solid #626d04;
   margin-left: .8rem;
   padding-left: .2rem
}
.hot_goods_list{
   margin-left: .2rem
}
.hot_goods_name{
  padding: .1rem;
  margin: .1rem;
   background: #fff;
   border: 1px solid #999; 
}
.cancel{
   height: 1rem;
   justify-content: center;
   align-items: center;
   display: flex;
   width:2rem
}
.content-container{
   background: #fff;
   height: 17rem;
   margin-top: .1rem;
   padding-top:.1rem
}
.hot_goods_list{
   height: 2.4rem;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   margin-top: .2rem;
   padding-top:.1rem
}
.hot_title{
   padding: .1rem 0 .1rem 0;
   margin-left: .2rem
}
.btn{
   width: 3.6rem;
   height: 1.2rem;
   line-height: 1.2rem;
   margin: auto;
   margin-top: .2rem;
   color:#ff3448;
   text-align: center;
   border: 1px solid #f3f3f3
}
.goods_list_name{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 0.1rem .4rem;
   border-bottom: 1px solid #f3f3f3;
}
.goods_list_name .aa{
   color: #999;
   width: 2rem;
   z-index: 333;
   text-align: center;
}
.find{
   height: 100%;
   background: #fff
}
.find li{
border-bottom: 1px solid #999;
margin-left: .3rem;
padding: .1rem 0;
}
.goods_list_name_item{
   
   width:7rem;
}
</style>
