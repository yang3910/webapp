<template>
  <div>
    <div class="components-input-demo-presuffix">
      <a-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
        <a-icon />
        <a-icon />
      </a-input>
      <p v-if="flag" @click="handleCancel()">取消</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Search",
  data() {
    return {
      userName: "",
      flag: "true"
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },

    handleCancel() {
      if (this.flag) {
        console.log(111);
        this.flag = !this.flag;
      } else {
        this.flag = !this.flag;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
page{
    height: 100%;
    box-sizing: border-box;
}
.components-input-demo-presuffix:hover {
  color: #999;
  margin-right: 60px;
  .cancel {
    box-sizing: border-box;
    position: absolute;
    display: inline-block;
    color: #000;
    font-size: 16px;
    padding: 5px 0 0 10px;
  }
}

.components-input-demo-presuffix:active {
  color: #666;
  margin-right: 60px;
}

</style>

