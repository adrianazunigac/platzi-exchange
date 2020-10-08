import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import numeral from 'numeral'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import router from '@/router'
// import { dollarFilter } from '@/filters'

const app = createApp(App)
app.use(router)
app.use(VueSpinners)
app.use(Chartick.use(Chart))
app.mount('#app')

app.config.globalProperties.$filters = {
  dollar(value) {
    if (!value) {
      return '$ 0'
    }
    return numeral(value).format('($ 0.00a)')
  },
  percentFilter(value) {
    if (!value) {
      return '$ 0'
    }

    return `${Number(value).toFixed(2)}%`
  }
}
