## icon

**小程序不支持 svg-sprite**，为了兼容选择使用字体图标

### 用法

```html
<x-icon name="i-arrow-right" />
```

### Props

| prop    | 描述                                                               | 类型     | 默认值       | 必须 |
| ------- | ------------------------------------------------------------------ | -------- | ------------ | ---- |
| name    | icon 名称或网络图片地址                                            | `string` | -            | 是   |
| color   | 图标颜色，支持 `primary`、`success`、`error`、`waring`、`info`预设 | `string` | -            | 否   |
| size    | 选项列表                                                           | `array`  | -            | 否   |
| imgMode | 图片显示模式                                                       | `string` | `aspectFill` | 否   |

### Events

| eventName | 描述     | 参数    |
| --------- | -------- | ------- |
| click     | 点击事件 | `Event` |
