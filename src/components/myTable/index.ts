import {App} from 'vue'
import myTable from './src/index.vue'
export default {
    install(app: App){
      app.component('m-myTable',myTable)
    }
}