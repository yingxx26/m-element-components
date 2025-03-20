import {App} from 'vue'
import myNavMenuBodyItem from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myNavMenuBodyItem',myNavMenuBodyItem)
    }
}