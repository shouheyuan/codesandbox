<template>
  <div>
    <p>{{ message }}</p>
    <select name="" id="">
      <option value="">--Please choose an option--</option>
      <option
        v-for="item in ctx.enums.accountList()"
        :key="item.label"
        :value="item.value"
      >
        {{ item.value }}
      </option>
    </select>

    <div>
      <button @click="ctx.controller.getCat">getCat</button>
      <button @click="ctx.controller.getDog">getDog</button>
    </div>

    <div style="width: 200px; height: 200px; margin: auto">
      <div style="width: 100%; height: 100%; background: #ccc" v-if="!imageUrl">
        loading
      </div>
      <img v-else :src="imageUrl" alt="" style="width: 100%; height: 100%" />
    </div>
  </div>
</template>

<script>
import ctx from "./ctx/ctx";

export default {
  data() {
    return {
      ctx: null,

      message: "Hello, World!",
      limit: 1,
      imageUrl: "",
    };
  },
  created() {
    // 在初始化时将 other.vue 的实例传递给 ctx
    this.ctx = Object.freeze(ctx.init(this));
    // ctx.controller.getMessage();
    // ctx.controller.setMessage("Hello, Vue!");
    // ctx.controller.getMessage();
    // console.log(this.ctx.enums.accountList());
  },
};
</script>

<style lang="less" scoped></style>
