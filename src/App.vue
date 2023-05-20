<template>
  <div id="app">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <router-view key="$route.path" />
    <the-footer></the-footer>
    
  </div>
  
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import TheFooter from "@/components/layout/TheFooter";
import SideBar from "@/components/layout/SideBar";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
