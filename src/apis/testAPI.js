import http from "@/utils/http"

export function getCotegory() {
  return http( {
    // method: 'get',
    url: 'home/category/head'
  }

  )
}
