// controller.js
import config from "./config";
// import service from "./service";

let vm = null;

export default {
  init(vmInstance) {
    vm = vmInstance;
  },

  getMessage() {
    // 在这里使用 other.vue 组件的实例
    console.log(vm.message); // 假设 other.vue 组件的实例有一个名为 message 的属性
  },

  setMessage(newMessage) {
    let res = vm.ctx.service.updateMessage();
    vm.$data.message = newMessage + " " + res.data + " " + config.TIME_OUT;
  },

  async getCat() {
    vm.$data.imageUrl = "";

    let params = {
      limit: vm.$data.limit,
    };
    let res = await vm.ctx.service.getCat(params);
    vm.$data.imageUrl = res[0].url;
  },

  async getDog() {
    vm.$data.imageUrl = "";

    let res = await vm.ctx.service.getDog();
    vm.$data.imageUrl = res.message;
  },
};
