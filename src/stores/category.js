import { ref } from "vue";
import { defineStore } from "pinia";
import { getCotegoryAPI } from "@/apis/layout";
export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getCotegory = async () => {
    const res = await getCotegoryAPI();
    categoryList.value = res.result;
  };
  return {
    categoryList,
    getCotegory,
  };
});
