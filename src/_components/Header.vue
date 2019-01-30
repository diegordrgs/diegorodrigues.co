<template>
  <nav class="menu container">
    <div class="left-menu">
      <router-link class="item" v-bind:class="$route.path == '/' ? 'active' : ''" :to="{path: '/'}">
        <img src="@/assets/logo.svg">
      </router-link>
    </div>
    <div class="right-menu">
      <div class="link-menu">
        <router-link class="item text" v-bind:class="$route.path == '/work' ? 'active' : ''" :to="{path: '/work'}">
          <span>Work</span>
        </router-link>
        <router-link class="item text" v-bind:class="$route.path == '/about' ? 'active' : ''" :to="{path: '/about'}">
          <span>About</span>
        </router-link>
        <a class="item text" href="https://drive.google.com/open?id=1jFu0XB2jr40fNMk1wsDiJEhW8vhlTlyS" target="_blank">
          <span>Resume</span>
        </a>
      </div>
      <div class="icon-menu">
        <img src="@/assets/1-medium.svg">
        <img src="@/assets/2-linkedin.svg">
        <img src="@/assets/3-dribbble.svg">
        <img src="@/assets/4-instagram.svg">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  .item.text.active span {
    cursor: pointer;
    padding-bottom: 0.5em;
    border-bottom: 1px solid;
  }
  .item {
    padding: 1em;
    color: black;
  }
  .item.text span:hover {
    cursor: pointer;
    padding-bottom: 0.5em;
    border-bottom: 1px solid;
  }
  .left-menu {
    img {
      width: 100%;
    }
  }
  .right-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    .link-menu {
      width: 25%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon-menu {
      display: flex;
      width: 25%;
      justify-content: space-between;
      img {
        width: 20%;
        cursor: pointer;
      }

    }
  }
}
</style>
