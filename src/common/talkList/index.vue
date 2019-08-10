<template>
    <div>
        <ul>
          <router-link v-for="(item,index) in  talklist" :key="index" tag="li" :to="item.data.href">
              <img class="head" :src="item.data.avatar" alt="">
              <p class="name">{{item.data.author_name}}</p>
              <p class="time">{{item.data.date}}</p>
              <p class="tit">{{item.data.title}}</p>
              <img class="lazy" :src="item.data.img" alt="">
              <span class="like">{{item.data.praise}}人点赞</span>
              <span class="say">{{item.data.reply_count}}条评论</span>
          </router-link>
      </ul>
    </div>
</template>

<script>
export default {
    name:"talkList",
    props:{
        talklist:{
            type:Array,
            required:true,
        }
    }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;padding: 0;
  font-family: Helvetica, sans-serif;
}
ul{
  box-sizing: border-box;
  padding-left: .266667rem;
  li{
    box-sizing: border-box;
    width: 9.733333rem;
   
    padding: .266667rem .266667rem .266667rem 0rem;
    position: relative;
    border-bottom: .013333rem solid gray;
    .head{
      width: .906667rem;
      height: .906667rem;
      border-radius: 50%;
      vertical-align: middle;
      position: absolute;
      top: .266667rem;
      left: 0;
    }
    .name{
      font-size: .493333rem;
      color: #444;
      width: 8.293333rem;
      height:.733333rem;
      line-height: .733333rem;
      margin-left: 1.2rem;
    }
    .time{
      font-size: .466667rem;
      color: #999;
      width: 8.293333rem;
      height: .693333rem;
      line-height: .693333rem;
      margin-left: 1.2rem;
    }
    .tit{
      font-size: .4rem;
      color: #444;
      width: 8.293333rem;

      margin-left: 1.2rem;
    }
    .lazy{
      height: 3.706667rem;
      width: 8.293333rem;
      vertical-align: middle;
      margin: .266667rem 0rem .266667rem 1.2rem;
    }
    .like{
      font-size: .4rem;
      color: #a4a4a4;
      margin-left: 1.2rem;
    }
    .say{
      font-size: .4rem;
      color: #a4a4a4;
      margin-left: .4rem;
    }
  }
}

</style>