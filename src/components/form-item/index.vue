<template>
  <div class="x-form-item">
    <div v-if="label" class="x-form-item__label">
      <div class="x-form-item__label-text x-s-text-overflow">
        {{ label }}
        <div v-if="isRequired" class="x-form-item__label-text-r">
          *
        </div>
      </div>
    </div>
    <div class="x-form-item__content">
      <slot />
    </div>
    <slot name="tips">
      <div v-if="tips" class="x-form-item__tips">
        {{ tips }}
      </div>
    </slot>
    <div v-if="mergeError" class="x-form-item__error">
      {{ mergeError || '' }}
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import { getPropByPath, globalMap } from '../../utils/tool'
import { EventKey } from '../../event'

const filterRulesByTrigger = (rules, trigger) => {
  if (Array.isArray(rules)) {
    return rules.filter(o => o.trigger === trigger)
  }
  return rules.trigger === trigger ? [rules] : []
}

export default {
  name: 'XFormItem',
  inject: ['formId'],
  provide() {
    return { formItem: this }
  },
  props: {
    prop: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    tips: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      validateError: '',
      mergeRules: [],
    }
  },
  computed: {
    mergeError() {
      return this.error || this.validateError
    },
    isRequired() {
      const rules = this.mergeRules
      let isRequired = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    },
  },
  created() {
    this.form = globalMap.get(this.formId).vm
    this.form.$on(EventKey.formValidate, this.validateField)
    this.form.$on(EventKey.formClearValidate, this.clearfieldValidate)
    this.form.$on(EventKey.formSetRules, this.getRules)
    this.getRules()
  },
  beforeDestroy() {
    this.form.$off(EventKey.formValidate, this.validateField)
    this.form.$off(EventKey.formClearValidate, this.clearfieldValidate)
    this.form.$off(EventKey.formSetRules, this.getRules)
  },
  methods: {
    getFieldValue() {
      const { model } = this.form || {}
      if (!model || !this.prop) {
        return
      }

      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      // eslint-disable-next-line consistent-return
      return getPropByPath(model, path, true).v
    },
    validateField(trigger) {
      const callback = r => this.form.$emit(EventKey.formItemValidateField, r)
      let rules = this.mergeRules
      if (['blur', 'change', 'input'].includes(trigger)) {
        rules = filterRulesByTrigger(rules, trigger)
      }
      if (trigger && !rules.length) {
        return
      }
      if (!rules.length) {
        // eslint-disable-next-line node/no-callback-literal
        callback({ field: this.prop, errors: [] })
      } else {
        const schema = new AsyncValidator({ [this.prop]: rules })
        const fields = {}
        fields[this.prop] = this.getFieldValue()
        const result = schema
          .validate(fields, { suppressWarning: true, firstFields: false, first: true })
          .then(() => {
            this.validateError = ''
            return { field: this.prop, errors: [] }
          })
          .catch(({ errors }) => {
            this.validateError = errors[0].message
            return { field: this.prop, errors }
          })
        callback(result)
      }
    },
    clearfieldValidate() {
      this.validateError = ''
    },
    getRules() {
      let formRules = globalMap.get(this.formId).rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []
      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : []
      this.mergeRules = [].concat(selfRules || formRules || []).concat(requiredRule)
    },
  },
}
</script>

<style lang="scss" scoped>
.x-form-item {
  padding-bottom: 64rpx;
  position: relative;

  &__label {
    height: 44rpx;
    display: flex;
    margin-bottom: 32rpx;

    &-text {
      color: var(--color-g9);
      font-size: 32rpx;
      line-height: 44rpx;
      padding-right: 20rpx;
      position: relative;
      box-sizing: border-box;

      &-r {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 16rpx;
        font-size: 28rpx;
        color: var(--color-main);
      }
    }
  }

  &__content {
    color: var(--color-g9);
  }

  &__tips {
    font-size: 22rpx;
    line-height: 30rpx;
    padding-top: 16rpx;
    color: var(--color-g4);
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translate(0, -20rpx);
    }

    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  &__error {
    font-size: 22rpx;
    line-height: 30rpx;
    padding-top: 16rpx;
    color: var(--color-main);
    position: absolute;
    width: 100%;
    bottom: 18rpx;
    left: 0;
    animation: fade 300ms ease;
  }
}
</style>
