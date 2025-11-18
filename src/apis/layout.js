import http from "@/utils/http";

export function getCotegoryAPI() {
  return http({
    url: "home/category/head",
  });
}
