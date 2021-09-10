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
    }
  },
}
</script>
