<template lang="html">
  <div class="nav">
    <nav>
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

  a {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
}
</style>
