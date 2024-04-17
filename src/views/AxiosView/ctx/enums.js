// enums.js
// import config from "./config";
// import service from "./service";

// eslint-disable-next-line no-unused-vars
let vm = null;

export default {
  init(vmInstance) {
    vm = vmInstance;
  },

  accountList() {
    return [
      { label: "label1", value: "name1" },
      { label: "label2", value: "name2" },
    ];
  },
};
