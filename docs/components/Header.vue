<template>
  <div class="header">
    <div class="header__content app-container">
      <div class="logo">Uni Components</div>
      <div class="nav">
        <x-icon name="i-github-circle-fill" />
        <a style="margin-left: 4px;" href="https://github.com/Xie-Yin/uni-components" target="__blank">Github</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--x-color-g1);

  &__content {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 16px;
      font-weight: bold;
      color: var(--x-color-g8);
    }

    .nav {
      a {
        font-size: 14px;
        font-weight: bold;
        color: var(--x-color-g8);
      }
    }
  }
}
</style>
