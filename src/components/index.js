import ImageView from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    // 1.注册全局组件
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", Sku);
  },
};
