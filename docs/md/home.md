## 安装

`uni-components` 是一个 uni-app 生态下的组件库

### 快速开始

```bash
yarn add @xyfebaby/uni-components
```

在 page.json 中添加配置

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^x-(.*)": "@xyfebaby/uni-components/src/components/$1/index.vue"
    }
  }
}
```

引入样式

```js
import '@xyfebaby/uni-components/src/styles/index.scss'
```
