<template>
  <div class="x-input" :class="{ 'is-disabled': disabled }">
    <slot name="prefix">
      <div
        v-if="prefix"
        :style="prefixStyle"
        class="x-input__prefix"
        @click="onClickPrefix"
      >
        {{ prefix }}
      </div>
    </slot>
    <input
      class="x-input__inner"
      placeholder-class="x-input-placeholder"
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
    <slot name="suffix">
      <div
        v-if="suffix"
        :style="suffixStyle"
        class="x-input__suffix"
        @click="onClickSuffix"
      >
        {{ suffix }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'XInput',
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
    prefix: {
      type: String,
      default: '',
    },
    prefixStyle: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    suffixStyle: {
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
    number: Boolean,
    password: Boolean,
    disabled: Boolean,
    focus: Boolean,
    autoFocus: Boolean,
    confirmHold: Boolean,
    adjustPosition: {
      type: Boolean,
      default: true,
    },
    holdKeyboard: Boolean,
  },
  methods: {
    transValue(val) {
      let value = val
      if (this.trim) {
        value = String(value).trim()
      }
      if (this.number) {
        value = +value
      }
      return value
    },
    onInput(e) {
      let value = ''
      if (this.isWeb) {
        value = e.target.value
      } else {
        value = e.detail.value
      }
      this.$emit('input', this.transValue(value))
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
.x-input-placeholder {
  color: var(--x-color-g4);
  font-weight: 400;
}
</style>

<style lang="scss" scoped>
.x-input {
  display: flex;
  box-sizing: border-box;
  background-color: var(--x-color-g1);
  border-radius: 16rpx;
  height: 88rpx;
  padding: 0 24rpx;
  align-items: center;

  &.is-disabled {
    opacity: 0.6;
  }

  &__prefix {
    color: var(--x-color-g9);
    font-size: 28rpx;
    line-height: 40rpx;
    margin-right: 16rpx;
    font-weight: 400;
  }

  &__suffix {
    color: var(--x-color-g9);
    font-weight: 400;
    font-size: 28rpx;
    line-height: 40rpx;
    padding-left: 16rpx;
    height: 40rpx;
    position: relative;

    &::before {
      content: "";
      width: 1px;
      height: 28rpx;
      background-color: var(--x-color-g3);
      position: absolute;
      top: 6rpx;
      left: 0;
    }
  }

  &__inner {
    font-size: 28rpx;
    line-height: 40rpx;
    color: var(--x-color-9);
    box-sizing: border-box;
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: unset;

    &::placeholder {
      color: var(--x-color-g4);
      font-weight: 400;
    }
  }
}
</style>
