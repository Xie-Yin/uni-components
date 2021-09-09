## input

> 文本输入框，建议配合`form`、`form-item`使用

### 用法

```html
<template>
  <x-form>
    <x-form-item prop="name">
      <x-input v-model="form.name" placeholder="请输入用户名" />
    </x-form-item>
    <x-form-item prop="phone">
      <x-input v-model="form.phone" placeholder="请输入手机号" prefix="+86" />
    </x-form-item>
    <x-form-item prop="code">
      <x-input v-model="form.code" placeholder="请输入验证码" prefix="6位数字" suffix="验证码" />
    </x-form-item>
    <x-form-item prop="count">
      <x-input v-model="form.count" placeholder="请输入金额" suffix="元"/>
    </x-form-item>
  </x-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        code: "",
        count: "",
      },
    };
  },
};
</script>
```

### Props

| prop           | 描述                             | 类型              | 默认值   | 必须 |
| -------------- | -------------------------------- | ----------------- | -------- | ---- |
| value          | 输入框内容                       | `string` `number` | -        | 是   |
| placeholder    | 输入框占位内容                   | `string`          | `''`     | 否   |
| prefix         | 右侧插入内容                     | `string`          | -        | 否   |
| prefixStyle    | 右侧插入内容样式                 | `string`          | -        | 否   |
| suffix         | 左侧插入内容                     | `string`          | -        | 否   |
| suffixStyle    | 左侧插入内容样式                 | `string`          | -        | 否   |
| type           | 键盘类型                         | `string`          | `'text'` | 否   |
| maxlength      | 内容可输入最大长度               | `number`          | `100`    | 否   |
| confirmType    | 键盘右下角按钮类型               | `string`          | `'done'` | 否   |
| trim           | 是否自动去首位空格               | `boolean`         | `false`  | 否   |
| number         | 是否自动转数字类型               | `boolean`         | `false`  | 否   |
| password       | 是否为密码框                     | `boolean`         | `false`  | 否   |
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
| clickSuffix          | 点击右侧插槽 | Event             |
| clickPrefix          | 点击左侧插槽 | Event             |

### Slots

| slotName | 描述                                   |
| -------- | -------------------------------------- |
| prefix   | 自定义右侧插槽内容，会覆盖`prefix`属性 |
| suffix   | 自定义右侧插槽内容，会覆盖`suffix`属性 |
