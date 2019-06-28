<template lang="html">
  <div>
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
</style>
