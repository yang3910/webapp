<template>
  <div id="app">
   <TabBar></TabBar>
   <router-view></router-view> 
  </div>
</template>

<script>
import TabBar from 'common/tabBar';
export default {
  name:"App",
  components:{
    TabBar,
  }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0}
html,body{height:100%;}
html{font-size: 16vw;}
body{font-size: 16px;}
</style>
