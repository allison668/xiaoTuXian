import { onBeforeRouteUpdate } from "vue-router";
import { getCotegoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export function useCategory() {
  const categoryDate = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCotegoryAPI(id);
    categoryDate.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryDate,
  };
}
