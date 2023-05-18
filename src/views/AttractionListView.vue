<template>
  <div id="app">
    <attraction-search-form></attraction-search-form>
    <attraction-list></attraction-list>
  </div>
</template>

<script>
import AttractionList from "../components/attraction/AttractionList.vue";
import AttractionSearchForm from "../components/attraction/AttractionSearch.vue";
export default {
  components: { AttractionList, AttractionSearchForm },
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
