## picker

> 单/多选，建议配合`form`、`form-item`使用

### 用法

```html
<template>
  <x-form>
    <x-form-item prop="type" label="单选">
      <x-picker
        v-model="form.type"
        :options="[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
          { label: '选项4', value: 4 },
        ]"
      />
    </x-form-item>
    <x-form-item prop="types" label="多选">
      <x-picker
        v-model="form.types"
        :options="[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
          { label: '选项4', value: 4 },
        ]"
        multiple
      />
    </x-form-item>
  </x-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          type: 1,
          types: [],
        },
      };
    },
  };
</script>
```

### Props

| prop        | 描述       | 类型                      | 默认值  | 必须 |
| ----------- | ---------- | ------------------------- | ------- | ---- |
| value       | 输入框内容 | `string` `number` `array` | -       | 是   |
| placeholder | 占位内容   | `string`                  | `''`    | 否   |
| options     | 选项列表   | `array`                   | -       | 是   |
| multiple    | 是否多选   | `boolean`                 | `false` | 否   |

### Events

| eventName | 描述       | 参数                      |
| --------- | ---------- | ------------------------- |
| input     | 输入       | `string` `number` `array` |
| change    | 值发生改变 | `string` `number` `array` |
