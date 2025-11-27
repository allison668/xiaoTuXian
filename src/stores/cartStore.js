import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    const addCart = (goods) => {
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    };
    const delCart = (skuId) => {
      const idx = cartList.value.findIndex((item) => item.skuId === skuId);
      cartList.value.splice(idx, 1);
      // cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
    };

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    const allCart = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));

    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));
    return {
      cartList,
      addCart,
      delCart,
      allCart,
      allPrice,
      singleCheck,
    };
  },
  {
    persist: true,
  }
);
