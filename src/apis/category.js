import request from "@/utils/http";

export function getCotegoryAPI(id) {
  return request({
    url: "category",
    params: {
      id,
    },
  });
}
