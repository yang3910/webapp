<template>
    <div class="search">
        <Pop/>
   <div class="search_movie_body">
        <v-touch class="back" tag="div" @tap="backHandler">&lt;</v-touch>
         <div class="search_movie_input">
          <input type="text"  v-model="searchVaule" @keyup.enter="czxq"/>
         </div>
         <v-touch tag="h4" @tap="handleMore">...</v-touch>
    </div>
    <div class="sort_boby">
        <div class="sort_name">
        <v-touch 
        v-for="(item,index) in sortList "
        :key="index"
        @tap="handleClick(index)"
        tag="div"
        id="every_name"
       :class="onIndex==index?'on':'off'"
        >{{item}}
        </v-touch>
        </div>
        <component :is=page></component>
    </div>
    </div>
</template>
<script>
import All from "components/search-result/all"
import Goods from "components/search-result/goods"
import Sw from "components/search-result/sw"
import Yh from "components/search-result/yh"
import {goods_search_detail} from "api/goods"
import {mapState,mapMutations} from "vuex"
export default {
    name:"Search",
    components:{
         All,
         Goods,
         Sw,
         Yh,
    },
   created(){
   this.searchVaule=this.val
   },
   computed:{
   ...mapState({
       val:state=>state.val
   })
   },
    methods:{
        ...mapMutations({
           handleMore:"handleMore"
       }),
        backHandler(){
            this.$router.back()
        },
        handleClick(index){
            this.onIndex=index;
              switch(index){
                case 0:
                   this.page = 'all';
                   break;
                case 1:
                   this.page = 'goods';
                   break;
                case 2:
                   this.page = 'sw';
                   break;
                case 3:
                   this.page = 'yh';
                   break;
           }

        },
        czxq(){
            
        }
    },
    data(){
        return{
            timer:null,
            page:"all",
            searchVaule:"",
            onIndex:0,
            sortList:["全部","商品","优惠","晒物"]
        }
    },
    // watch:{
    //         async searchVaule(newVal,oldVal){
    //         let data= await goods_search_detail(newVal);
    //         console.log(data)
    //     }
    // }
 }
</script>
<style>
.search_movie_body{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 1.3rem;
    align-items: center
}
.back{
    font-size: 1rem;
    color: #666
}
.search_movie_input{
    width: 70%;
    margin: .3rem
}
input{
    width: 100%
}
h4{
    font-size: 1rem;
    color: #666;
    padding-right: .2rem;
    margin-top: -.1rem
}
.sort_name{
height: 1.2rem;
width: 100%;
background: #fff;
border: 1px solid #e6e6e6;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: #999;
}
#every_name{
    width: 33%;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-right: 1px solid #e6e6e6;
    margin-right: .3rem
}
 .on{
  
border-bottom: 1px solid #ff4338;
color: #ff4338
}

</style>
