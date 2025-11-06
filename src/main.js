import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { getCotegory } from '@/apis/testAPI'
getCotegory().then(res=> {
  console.log('获取到的数据', res)

})
// .catch(err => {
//   console.error('请求出错', err);

// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
