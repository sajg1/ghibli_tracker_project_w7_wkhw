<template lang="html">
  <div class="film-list">
    <film-item v-for="(film, index) in films" :film="film" :key="index" :watchedFilms="watchedFilms"></film-item>
  </div>
</template>

<script>
import FilmItem from '@/components/FilmItem'
export default {
  name: "film-list",
  props:["films", "watchedFilms"],
  components: {
    "film-item": FilmItem
  }
}
</script>

<style lang="css" scoped>

  .film-list {
    margin-top: 20px;
    width: 30%;
    height: 600px;
    overflow-y: scroll;
    list-style-type: none;
  }
</style>
