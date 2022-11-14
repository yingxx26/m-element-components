/*
 * @Author: zyf
 * @LastEditors: zyf
 * @Date: 2022-11-10 17:32:37
 * @LastEditTime: 2022-11-11 14:27:52
 * @description: 
 */
const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 打包入口文件夹
const entryDir = path.resolve(__dirname,'../packages')
// 出口文件夹
const outDir = path.resolve(__dirname, '../lib')

// vite的基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量打包构建
// const buildAll = async () => { 
//   await build({
//     ...baseConfig,
//     build: {
//       rollupOptions,
//       lib: {
//         entry: path.resolve(entryDir, 'index.ts'),
//         name: 'm-element-components',
//         fileName: 'm-element-components',
//         formats:['es','umd']
//       },
//       outDir
//     }
//   })
// }

//全量构建
const buildAll = async () => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'm-element-components',
        fileName: 'm-element-components',
        formats:['es','umd']
      },
      outDir: outDir
    }
  }))
}

const buildSingle = async (name) => {
  await build(defineConfig({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  }))
}

// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name}",
    "version": "0.0.0",
    "main": "index.umd.js",
    "module": "index.es.js",
    "style": "style.css"
  }`
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  )
}

// 打包成库
const buildLib = async () => { 
  await buildAll()

  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  // 循环一个一个组件构建
  for (const name of components) {
    // 构建单组件
    await buildSingle(name)

    // 生成组件的 package.json 文件
    createPackageJson(name)
  }
}

buildLib()