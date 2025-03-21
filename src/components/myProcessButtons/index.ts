import {App} from 'vue'
import myProcessButtons from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myProcessButtons',myProcessButtons)
    }
}