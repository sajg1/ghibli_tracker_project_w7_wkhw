<template lang="html">
  <div class="film-list">
    <film-item v-for="(film, index) in films" :film="film" :key="index"></film-item>

  </div>
</template>

<script>
import FilmItem from '@/components/FilmItem'
export default {
  name: "film-list",
  props:["films"],
  components: {
    "film-item": FilmItem
  }
}
</script>

<style lang="css" scoped>

  .film-list {
    margin-top: 60px;
    width: 30%;
    height: 400px;
    overflow-y: scroll;
    list-style-type: none;
  }
</style>
