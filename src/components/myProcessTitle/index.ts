import {App} from 'vue'
import myProcessTitle from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myProcessTitle',myProcessTitle)
    }
}