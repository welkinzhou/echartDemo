import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 不同浏览器一些默认的html标签的展示行为是不一致的，normalize.css 使样式在所有浏览器上保持一致
import 'normalize.css'
import '@/style/index.scss'
// ======= echarts ===========
import * as echarts from 'echarts/core'
import { BarChart, LineChart, LinesChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  VisualMapComponent,
  LegendComponent,
  LineChart,
  LinesChart,
  DataZoomComponent
])
// ==================

import { Button } from 'vant'

const app = createApp(App)

app.component(Button.name, Button)

app.use(store).use(router).mount('#app')
// 全局注册echart属性
app.config.globalProperties.$echarts = echarts
