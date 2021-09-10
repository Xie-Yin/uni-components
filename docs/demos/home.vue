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
        name: '',
        phone: '',
        type: 1,
      },
    }
  },
  mounted() {
    this.$refs.form.setRule({
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
      type: [
        {
          required: true,
          type: 'number',
          message: '请选择账号类型',
          trigger: 'blur',
        },
      ],
    })
  },
  methods: {
    onSubmit() {
      this.$refs.form
        .validate()
        .then(() => {})
        .catch(e => {
          console.log(e)
        })
    },
  },
}
</script>
