<template>
  <div class="layout">
    <div class="layout__header">
      <Header />
    </div>
    <div class="layout__main">
      <div class="app-container">
        <div class="layout__side-bar">
          <SideBar />
        </div>
        <div class="layout__content">
          <router-view />
        </div>
        <div class="layout__simulator">
          <Simulator />
        </div>
      </div>
    </div>
    <!-- <div class="layout__footer">
      <Footer />
    </div> -->
  </div>
</template>

<script>
import Header from './Header.vue'
// import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import Simulator from './Simulator.vue'

export default {
  components: {
    Header,
    SideBar,
    // Footer,
    Simulator,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.layout {
  &__header {
  }

  &__main {
    .app-container {
      display: flex;
    }
  }

  &__side-bar {
    min-width: 180px;
    padding: 30px 10px 30px 0;
  }

  &__content {
    padding: 30px 10px;
    flex-grow: 1;
    max-width: 704px;
    box-sizing: border-box;
  }

  &__simulator {
    width: 336px;
    margin-left: 30px;
  }

  &__footer {
  }
}
</style>
