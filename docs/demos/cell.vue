<template>
  <x-form>
    <x-form-item prop="*">
      <x-cell placeholder="单元格可以用来扩展很多组件" />
    </x-form-item>
    <x-form-item prop="*">
      <x-cell :value="['溢出效果', '溢出效果+1']" overflow />
    </x-form-item>
    <x-form-item prop="*">
      <x-cell placeholder="占位文字" overflow prefix="prefix" />
    </x-form-item>
  </x-form>
</template>
