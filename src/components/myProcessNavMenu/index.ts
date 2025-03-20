import {App} from 'vue'
import myProcessNavMenu from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myProcessNavMenu',myProcessNavMenu)
    }
}