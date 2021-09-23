## textarea

> 文本输入框，建议配合`form`、`form-item`使用

### 用法

```html
<template>
  <x-form>
    <x-form-item prop="content">
      <x-textarea v-model="form.content" placeholder="请输入内容" />
    </x-form-item>
  </x-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        content: '',
      },
    }
  },
}
</script>
```

### Props

| prop           | 描述                             | 类型              | 默认值   | 必须 |
| -------------- | -------------------------------- | ----------------- | -------- | ---- |
| value          | 输入框内容                       | `string` `number` | -        | 是   |
| placeholder    | 输入框占位内容                   | `string`          | `''`     | 否   |
| type           | 键盘类型                         | `string`          | `'text'` | 否   |
| maxlength      | 内容可输入最大长度               | `number`          | `100`    | 否   |
| confirmType    | 键盘右下角按钮类型               | `string`          | `'done'` | 否   |
| trim           | 是否自动去首位空格               | `boolean`         | `false`  | 否   |
| disabled       | 是否禁用                         | `boolean`         | `false`  | 否   |
| focus          | 是否聚焦                         | `boolean`         | `false`  | 否   |
| autoFocus      | 自动获取焦点                     | `boolean`         | `false`  | 否   |
| confirmHold    | 点击确定按钮后不收起键盘         | `boolean`         | `false`  | 否   |
| adjustPosition | 键盘弹起时，是否自动上推页面     | `boolean`         | `false`  | 否   |
| holdKeyboard   | 聚焦时，点击页面的时候不收起键盘 | `boolean`         | `false`  | 否   |

### Events

| eventName            | 描述         | 参数              |
| -------------------- | ------------ | ----------------- |
| input                | 输入         | `string` `number` |
| confirm              | 点击键盘确认 | Event             |
| focus                | 获得焦点     | Event             |
| blur                 | 失去焦点     | Event             |
| keyboardheightchange | 键盘高度变化 | Event             |
