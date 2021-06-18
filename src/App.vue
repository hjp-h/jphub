<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from './pages/Login/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
@import "assets/css/base.css";
#app{
  height: 750px;
  width: 100%;
}
</style>
