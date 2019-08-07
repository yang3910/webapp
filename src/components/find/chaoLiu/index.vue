<template>
  <div class="find-list">
    <talkList :talklist="talkList"></talkList>
  </div>
</template>

<script>
import TalkList from "common/talkList";
import {find_chaoliu_api} from 'api/find';
export default {
  name: "ChaoLiu",
  data() {
    return {
      talkList: []
    };
  },
  async created() {
    let data = await find_chaoliu_api();
    this.talkList = data.data;
    // console.log(this.talkList);
  },
  components: {
    TalkList
  }
};
</script>

<style lang="scss" scoped>
</style>