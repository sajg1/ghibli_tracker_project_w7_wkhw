<template lang="html">
  <div>
  <h1>Films</h1>
  <film-list :films="films"></film-list>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList';
export default {
  props: ['films'],
  components: {
    "film-list": FilmList
  },
}
</script>

<style lang="css" scoped>
</style>
