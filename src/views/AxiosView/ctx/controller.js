// controller.js

let vm = null;

export default {
  init(vmInstance) {
    vm = vmInstance;
  },

  getMessage() {
    // 在这里使用组件的实例
    console.log(vm.$data.message); // 假设组件的实例有一个名为 message 的属性
  },

  setMessage(newMessage) {
    let res = vm.ctx.service.updateMessage();
    vm.$data.message =
      newMessage + " " + res.data + " " + vm.ctx.config.TIME_OUT;
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
