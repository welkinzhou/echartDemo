import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 不同浏览器一些默认的html标签的展示行为是不一致的，normalize.css 使样式在所有浏览器上保持一致
import 'normalize.css'
import '@/style/index.scss'

import { Button } from 'vant'

const app = createApp(App)

app.component(Button.name, Button)

app.use(store).use(router).mount('#app')
