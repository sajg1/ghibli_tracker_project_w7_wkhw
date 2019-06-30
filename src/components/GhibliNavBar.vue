<template lang="html">
  <div class="nav">
    <nav>
    <router-link :to="{ name: 'home'}">Home</router-link>
    <router-link :to="{ name: 'films'}">Films</router-link>
    <router-link :to="{ name: 'watched'}">Already Watched</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ghibli-navbar"
}
</script>

<style lang="css" scoped>

  .nav {
    text-align: left;
    background-color: #e38787;
    margin:0;
    padding:10px;


  }

  a {
    padding: 20px;
    width: 100%;
    color: #f3e8d9;
    font-weight: bold;
    padding-top: 40px;
    text-decoration: none;
  }
</style>
