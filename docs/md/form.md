## form

> 用于复杂字段填写收集，具备字段校验功能

### 用法

```html
<template>
  <div class="form-demo">
    <x-form ref="form" :model="form">
      <x-form-item label="用户名" prop="name">
        <x-input v-model="form.name" placeholder="请输入用户名" />
      </x-form-item>
      <x-form-item label="手机号" prop="phone">
        <x-input v-model="form.phone" placeholder="请输入手机号" />
      </x-form-item>
      <x-form-item label="账号类型" prop="type">
        <x-picker
          v-model="form.type"
          :options="[
            {
              label: '微信',
              value: 1,
            },
            {
              label: '钉钉',
              value: 2,
            },
            {
              label: 'Github',
              value: 3,
            },
          ]"
        />
      </x-form-item>
      <div class="x-button __primary" @click="onSubmit">提交</div>
    </x-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: "",
          phone: "",
          type: 1,
        },
      };
    },
    mounted() {
      this.$refs.form.setRule({
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        type: [
          {
            required: true,
            type: "number",
            message: "请选择账号类型",
            trigger: "blur",
          },
        ],
      });
    },
    methods: {
      onSubmit() {
        this.$refs.form
          .validate()
          .then(() => {})
          .catch((e) => {
            console.log(e);
          });
      },
    },
  };
</script>
```

### 如何自定义表单项

被`form-item`包裹的组件，会被注入（`provide`选项）formItem 实例，根据不同事件触发`formItem.validateField`，实现自动校验

```js
export default {
  inject: ['formItem'],
  methods: {
    onChange() {
      this.formItem.validateField('change')
    }
  }
}
```

### Form Props

| prop          | 描述                                        | 类型     | 默认值 | 必须 |
| ------------- | ------------------------------------------- | -------- | ------ | ---- |
| model         | 表单数据对象                                | `object` | -      | 是   |
| initialValues | 表单数据默认值（使用`resetFields`方法必须） | `object` | -      | 否   |

### Form Methods

**为什么使用`setRule`方法设置 rules 而不是直接 props 传入？**

> uni-app 使用 JSON 序列化数据，会导致 rules 配置中不能被序列化的值被过滤（`RegExp`、`Function`）

| methodsName   | 描述                                  | 参数     |
| ------------- | ------------------------------------- | -------- |
| setRule       | 设置校验规则                          | `object` |
| validate      | 校验表单（返回值是一个`Promise`类型） | -        |
| clearValidate | 清空校验                              | -        |
| resetFields   | 重置表单并清空校验                    | -        |

### FormItem Props

| prop  | 描述                         | 类型     | 默认值 | 必须 |
| ----- | ---------------------------- | -------- | ------ | ---- |
| prop  | 表单属性名（支持`a.b.prop`） | `string` | -      | 是   |
| label | 表单标题                     | `string` | -      | 否   |
| error | 表单项错误信息               | `string` | -      | 否   |
| tips  | 表单项提示                   | `string` | -      | 否   |
