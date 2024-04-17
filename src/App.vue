<template>
  <div id="app1">
    <nav>
      <router-link v-for="item in menus" :to="item.path" :key="item.path">
        {{ item.name }}
        <a-divider type="vertical" />
      </router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import router from "./router";
export default {
  name: "App",
  data() {
    return {
      menus: router.options.routes,
    };
  },
};
</script>

<style lang="less">
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
