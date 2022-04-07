<template>
  <div id="app">
    <Header />
    <!-- 路由出口  -->
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
