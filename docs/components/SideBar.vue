<template>
  <div class="side-bar">
    <router-link
      v-for="route in mdRoutes"
      :key="route.path"
      class="side-bar__link"
      :to="{ name: route.name }"
    >{{ route.meta.title }}</router-link>
  </div>
</template>

<script>
import { mdRoutes } from '../router'

export default {
  data() {
    return {
      mdRoutes,
    }
  },
}
</script>

<style lang="scss" scoped>
.side-bar {
  &__link {
    display: block;
    line-height: 22px;
    padding: 6px 10px;
    border-radius: 8px;
    color: var(--x-color-g8);
    font-size: 16px;

    & + & {
      margin-top: 10px;
    }

    &.router-link-exact-active {
      color: mix(red, #fff, 60);
      background-color: var(--x-color-g1);
      font-weight: bold;
    }

    &:hover {
      background-color: var(--x-color-g1);
    }
  }
}
</style>
