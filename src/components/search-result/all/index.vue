<template>
  <div class="all">
    <ly-BScroll ref="lyscroll">
      <div class="all_con">
      <div class="listviews">
        <v-touch
          tag="ul"
          v-for="(item,index) in arrs"
          :key="index"
        >
          <div class="goods_item_pic">
            <img :src="item.img" />
          </div>
          <div class="goods_item_info">
            <p class="title">
              <span>{{item.title}}</span>
            </p>
            <!-- <h2>{{item.intro}}</h2> -->
            <p>
              <span>
                {{item.auditName}}
                <i>￥{{item.price}}</i>
              </span>
            </p>
          </div>
        </v-touch>
      </div>
      <div class="listviews">
        <v-touch
          tag="ul"
          v-for="(item,index) in arr1"
          :key="index"
        >
          <div class="goods_item_pic">
            <img :src="item.img" />
          </div>
          <div class="goods_item_info">
            <p class="title">
              <span>{{item.title}}</span>
            </p>
            <!-- <h2>{{item.intro}}</h2> -->
            <p>
              <span>
                {{item.auditName}}
                <i>￥{{item.price}}</i>
              </span>
            </p>
          </div>
        </v-touch>
      </div>
      <div class="listvw">
        <v-touch
          tag="ul"
          v-for="(item,index) in arr2"
          :key="index"
        >
        <div class="con">
          <div class="goods_item" v-for="(child,idx) in item.img_attr" :key="idx" >
            <img :src="child" />
          </div>
        </div>
          <div class="goods">
            <p class="title">
              <span>{{item.title}}</span>
            </p>
          </div>
            <span class="intro">
                {{item.intro}}
              </span>
        </v-touch>
      </div>
      <div class="listviews">
        <v-touch
          tag="ul"
          v-for="(item,index) in arr3"
          :key="index" 
        >
          <div class="goods_item_pic">
            <img :src="item.pic" />
          </div>
          <div class="goods_item_info">
            <p class="title">
              <span>{{item.childCategory}}</span>
            </p>
            <h2>{{item.intro}}</h2>
            <p>
              <span>
                {{item.rootCategory}}<br>
              </span>
            </p>
          </div>
        </v-touch>
      </div>
      <div class="listview">
        <v-touch
          tag="ul"
          v-for="(item,index) in arr4"
          :key="index"
        >
          <div class="goods_item_pic">
            <img :src="item.pic" />
          </div>
        </v-touch>
      </div>
      </div>
    </ly-BScroll>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  goods_search_detail,
  goods_search_detail1,
  goods_search_detail2,
  goods_search_detail3,
  goods_search_detail4,
  goods_search_detail5
} from "api/goods";
export default {
  name: "All",
  computed: {
    ...mapState({
      vals: state => state.val
    })
  },
  data() {
    return {
      val: "",
      arrs: [],
      arr1:[],
      arr2:[],
      arr3:[],
      arr4:[]
    };
  },
  created() {
    this.val = this.vals;
  },
  watch: {
    async val(newVal, oldVal) {
      let data = await goods_search_detail(newVal);
      let data1 = await goods_search_detail1(newVal);
      let data2 = await goods_search_detail2(newVal);
      let data3 = await goods_search_detail3(newVal);
      let data4 = await goods_search_detail4(newVal);
      this.arrs = data.data.list;
      this.arr2=data2.data.list
      this.arr3 = data3.data.list;
       this.arr4 = data4.data.list;
    }
  }
};
</script>
<style scoped>
.all{
  height: 14rem;
}
.all_con{
height: 100%;
  overflow: auto;
}

.listviews {
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
 
}
.con{
  display: flex;
  flex-direction: row;
  justify-content: space-around
}
.listview{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: .2rem 0;
}
.listview img{
  width: 100%
}
.goods_item{
 
  height: 2rem;
  width: 100%;
}
.goods{
  margin-top: .4rem;
  height:1rem ;
}

.listvw ul{
  display: flex;
  flex-direction: column;
  justify-content: space-around
}

.goods_item img{
width: 100%
}
.listviews .goods_item_pic img {
  width: 100%;
  height: 100%;
}
.listviews .goods_item_pic {
  width: 30%;
  position: relative;
}
.listviews .goods_item_info {
  width: 66%;
  position: relative;
  height: 3rem;
  margin-left: 0.26667rem;
  display: flex;
  flex-direction: column;
  padding-top: 0.2rem;
}
.listviews .goods_item_info h2 {
  font-size: 0.4rem;
  color: #000
}
.listviews .goods_item_info i {
  color: #ff4338;
  padding-left: 0.1rem;
}
.listviews .goods_item_info b {
  color: #666;
  padding-left: 0.1rem;
}
.listviews .goods_item_info span {
  font-size: 0.4rem;
}
.title {
  height: 0.6rem;
  overflow: hidden;
}

.listviews ul {
  display: flex;
  flex-direction: row;
  padding: 0.26667rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
}
</style>