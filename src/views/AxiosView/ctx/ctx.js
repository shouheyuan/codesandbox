// ctx.js
import config from "./config";
import controller from "./controller";
import enums from "./enums";
import service from "./service";

// eslint-disable-next-line no-unused-vars
// let vm = null;

const ctx = {
  init(vmInstance) {
    // vm = vmInstance;
    controller.init(vmInstance);
    service.init(vmInstance);
    enums.init(vmInstance);

    return this;
  },

  controller,
  service,
  config,
  enums,
};

export default ctx;
