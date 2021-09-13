## cell

> 基础单元格

### 用法

```html
<template>
  <x-form>
    <x-form-item prop="*">
      <x-cell placeholder="单元格可以用来扩展很多组件" />
    </x-form-item>
    <x-form-item prop="*">
      <x-cell :value="['溢出效果', '溢出效果+1']" overflow />
    </x-form-item>
  </x-form>
</template>
```

### Props

| prop        | 描述             | 类型                   | 默认值  | 必须 |
| ----------- | ---------------- | ---------------------- | ------- | ---- |
| value       | 内容             | `Array[string,number]` | -       | 否   |
| overflow    | 开启溢出效果     | `boolean`              | `false` | 否   |
| placeholder | 输入框占位内容   | `string`               | `''`    | 否   |
| prefix      | 右侧插入内容     | `string`               | -       | 否   |
| prefixStyle | 右侧插入内容样式 | `string`               | -       | 否   |
| suffix      | 左侧插入内容     | `string`               | -       | 否   |
| suffixStyle | 左侧插入内容样式 | `string`               | -       | 否   |

### Events

| eventName | 描述     | 参数    |
| --------- | -------- | ------- |
| click     | 点击行为 | `Event` |

### Slots

| slotName | 描述                                   |
| -------- | -------------------------------------- |
| prefix   | 自定义右侧插槽内容，会覆盖`prefix`属性 |
| suffix   | 自定义右侧插槽内容，会覆盖`suffix`属性 |
