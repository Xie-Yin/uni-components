<template>
  <div class="icon-demo">
    <div class="icon-demo__item" v-for="icon in icons" :key="icon[0]">
      <x-icon :name="icon[0]" color="primary" />
      <div class="name">{{ icon[0] }}</div>
    </div>
  </div>
</template>

<script>
import icons from "../icons";

export default {
  data() {
    return {
      icons: Object.entries(icons),
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  flex-wrap: wrap;
  padding: 30px 0;

  &__item {
    padding: 20px 0;
    border: 1px solid var(--color-g1);
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    box-sizing: border-box;
    height: 4em;
    margin-bottom: 20px;
    border-radius: 18px;

    .name {
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
