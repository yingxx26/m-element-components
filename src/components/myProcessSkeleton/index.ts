import {App} from 'vue'
import myProcessSkeleton from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myProcessSkeleton',myProcessSkeleton)
    }
}