<template>
  <Navbar/>
  <router-view/>
</template>
<script>
import Navbar from "./components/Navbar.vue"
export default {
  name:"App",
  components: {
    Navbar
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100%;
  font-family: sans-serif;
  position: relative;
}
</style>
