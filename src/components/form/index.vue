<template>
  <div class="x-form">
    <slot />
  </div>
</template>

<script>
import { isNull, isPromise } from '../../utils/type'
import { Log, globalMap, gid } from '../../utils/tool'
import { EventKey } from '../../event'

export default {
  name: 'XForm',
  provide() {
    return { form: this, formId: this.uuid }
  },
  props: {
    model: {
      type: [Object, Array],
      default: () => ({}),
    },
    initialValues: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      uuid: gid(),
    }
  },
  created() {
    globalMap.set(this.uuid, { vm: this, rules: {} })
  },
  beforeDestroy() {
    globalMap.delete(this.uuid)
  },
  methods: {
    async validate() {
      const promiseList = []
      const formErrors = {}
      const onValidateField = result => {
        if (isPromise(result)) {
          promiseList.push(result)
        } else {
          promiseList.push(Promise.resolve(result))
        }
      }
      this.$on(EventKey.formItemValidateField, onValidateField)
      this.$emit(EventKey.formValidate)

      for (let i = 0; i < promiseList.length; i++) {
        const { errors, field } = await promiseList[i]
        if (errors.length) {
          formErrors[field] = errors
        } else {
          delete formErrors[field]
        }
      }
      this.$off(EventKey.formItemValidateField, onValidateField)
      if (Object.values(formErrors).length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ errors: formErrors })
      }
      return Promise.resolve()
    },
    resetFields() {
      if (isNull(this.initialValues)) {
        Log.warn('Form.resetFields must provide "initialValues" prop')
        return
      }
      this.$emit('update:model', { ...this.initialValues })
      this.clearValidate()
    },
    clearValidate() {
      this.$emit(EventKey.formClearValidate)
    },
    setRule(rules) {
      // 这里使用setRule避免了部分无法被json序列化的值被覆盖
      // https://github.com/dcloudio/uni-app/issues/524
      globalMap.get(this.uuid).rules = rules
      this.$emit(EventKey.formSetRules)
    },
  },
}
</script>

<style lang="scss" scoped>
.x-form {
  padding: 32rpx 40rpx 0;
}
</style>
