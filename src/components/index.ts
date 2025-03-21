/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-01 18:23:18
 * @LastEditTime: 2022-11-10 11:09:38
 * @description: 
 */
import {App} from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'
import myTable from "./myTable";
import myForm from "./myForm";
import myModalForm from "./myModalForm";
import myProcessSkeleton from "./myProcessSkeleton";
import myProcessTitle from "./myProcessTitle";
import myProcessNavMenu from "./myProcessNavMenu";
import myNavMenuBodyItem from "./myNavMenuBodyItem";
import myProcessButtons from "./myProcessButtons";
const components = [
    chooseArea,
    chooseIcon,
    trend,
    notification,
    list,
    menu,
    progress,
    chooseTime,
    chooseDate,
    chooseCity,
    form,
    modalForm,
    table,
    calendar,
    myTable,
    myForm,
    myModalForm,
    myProcessSkeleton,
    myProcessTitle,
    myProcessNavMenu,
    myNavMenuBodyItem,
    myProcessButtons
]

export default {
    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}