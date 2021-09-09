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
