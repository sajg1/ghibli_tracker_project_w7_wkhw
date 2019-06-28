<template lang="html">
  <div>
    <div class="watched-header">
      <h1>Watched</h1>
    </div>
    <div class="watched-view">
      <film-list :films="watchedFilms"></film-list>
    </div>
  </div>
</template>

<script>

import FilmList from '@/components/FilmList'
export default {
  name: "watched-films",
  components: {
    "film-list": FilmList
  },
  props: ['watchedFilms']
}
</script>

<style lang="css" scoped>
h1 {
  color: white;
  background-color: #319CAC;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.watched-header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}



.watched-view {

  display: flex;
  justify-content: space-between;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}

</style>
