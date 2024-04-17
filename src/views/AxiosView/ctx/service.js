// service.js

// import config from "./config";

// eslint-disable-next-line no-unused-vars
let vm = null;

export default {
  init(vmInstance) {
    vm = vmInstance;
  },

  updateMessage() {
    return {
      code: 200,
      data: "form service",
      message: "success",
    };
  },

  getCat(data) {
    return vm.$api.cat.getCat(data);
  },

  getDog() {
    return vm.$api.dog.getDog();
  },
};
