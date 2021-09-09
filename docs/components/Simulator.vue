<template>
  <div class="simulator">
    <iframe class="simulator__iframe" :src="iframSrc"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframSrc: "/#/demo/form",
    };
  },
  watch: {
    '$route': {
      immediate: true,
      handler(val) {
        this.iframSrc = '/#/demo' + val.fullPath
        console.log('/#/demo' + val.fullPath)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.simulator {
  width: 320px;
  height: 568px;
  position: fixed;
  top: 70px;
  background-color: var(--color-g1);
  padding: 30px 8px 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  &__iframe {
    background-color: #fff;
    border-radius: 16px;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
  }
}
</style>
