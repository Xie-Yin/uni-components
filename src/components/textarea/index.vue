<template>
  <div class="x-textarea" :class="{ 'is-disabled': disabled }">
    <textarea
      class="x-textarea__inner"
      placeholder-class="x-textarea-placeholder"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :password="password"
      :disabled="disabled"
      :maxlength="maxlength"
      :auto-focus="autoFocus"
      :focus="focus"
      :confirm-type="confirmType"
      :confirm-hold="confirmHold"
      :adjust-position="adjustPosition"
      :hold-keyboard="holdKeyboard"
      @input="onInput"
      @confirm="onConfirm"
      @focus="onFocus"
      @blur="onBlur"
      @keyboardheightchange="onKeyboardheightchange"
    />
    <div class="x-textarea__count" @click="onClickPrefix">
      {{ countText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'XTextarea',
  inject: ['formItem'],
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    maxlength: {
      type: Number,
      default: 100,
    },
    confirmType: {
      type: String,
      default: 'done',
    },
    trim: Boolean,
    password: Boolean,
    disabled: Boolean,
    focus: Boolean,
    autoFocus: Boolean,
    confirmHold: Boolean,
    adjustPosition: Boolean,
    holdKeyboard: Boolean,
  },
  computed: {
    countText() {
      const { value, maxlength } = this
      return `${Math.min(value.length, maxlength) || 0}/${maxlength}`
    },
  },
  methods: {
    onInput(e) {
      let { value } = e.detail
      if (this.trim) {
        value = String(value).trim()
      }
      this.$emit('input', value)
      if (this.formItem) {
        this.formItem.validateField('input')
      }
    },
    onConfirm(e) {
      this.$emit('confirm', e)
    },
    onFocus(e) {
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.$emit('blur', e)
      if (this.formItem) {
        this.formItem.validateField('blur')
      }
    },
    onKeyboardheightchange(e) {
      this.$emit('keyboardheightchange', e)
    },
    onClickSuffix(e) {
      if (!this.disabled) {
        this.$emit('clickSuffix', e)
      }
    },
    onClickPrefix(e) {
      if (!this.disabled) {
        this.$emit('clickPrefix', e)
      }
    },
  },
}
</script>

<style lang="scss">
.x-textarea-placeholder {
  color: var(--color-g4);
}
</style>

<style lang="scss" scoped>
.x-textarea {
  display: flex;
  box-sizing: border-box;
  background-color: var(--color-g1);
  border-radius: 16rpx;
  padding: 24rpx 24rpx 48rpx;
  align-items: center;
  position: relative;

  &.is-disabled {
    opacity: 0.6;
  }

  &__inner {
    font-size: 28rpx;
    line-height: 40rpx;
    color: var(--color-9);
    box-sizing: border-box;
    flex-grow: 1;
    height: 200rpx;
  }

  &__count {
    position: absolute;
    right: 24rpx;
    bottom: 24rpx;
    color: var(--color-g4);
    font-size: 24rpx;
  }
}
</style>
