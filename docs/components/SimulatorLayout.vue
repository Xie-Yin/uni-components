<template>
  <div class="simulator-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    const setRem = () => {
      const sw = Math.min(document.documentElement.clientWidth, 550)
      document.documentElement.style.fontSize = `${(37.5 * sw) / 375}px`
    }

    setRem()

    window.onresize = setRem
  },
}
</script>

<style lang="scss" scoped>
.simulator-layout {
  cursor: pointer;
}
</style>
