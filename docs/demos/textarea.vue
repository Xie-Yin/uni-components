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
