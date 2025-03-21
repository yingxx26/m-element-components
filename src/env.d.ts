/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  const API_PREFIXE = {
    // 开发环境（新增参数后记得添加服务器代理地址）
    dev: {
      PLATFORM: '/platform/',
      WORKFLOW: '/workflow/',
      ORGANIZATION: '/organization/',
      PORTAL: '/portal/',
      DEVCENTER:'/devcenter/',
      LCTEST: '/lctest/',
      FWZL: '/fwzlapi/',
      GIS:'/gis/',
    },
    // 生产环境
    production: {
      PLATFORM: '/jsmart/',
      WORKFLOW: '/jsmart/',
      ORGANIZATION: '/jsmart/',
      PORTAL: '/jsmart/',
      DEVCENTER:'/jsmart/devcenter/',
      LCTEST: '/lctest/',
      FWZL: '/fwzlapi/',
      GIS:'/gis/',
    },
    // 测试环境
    test: {
      PLATFORM: '/jsmart/',
      WORKFLOW: '/jsmart/',
      ORGANIZATION: '/jsmart/',
      PORTAL: '/jsmart/',
      DEVCENTER:'/jsmart/devcenter/',
      LCTEST: '/lctest/',
      FWZL: '/fwzlapi/',
      GIS:'/gis/',
    }
  }

  export default component
}
