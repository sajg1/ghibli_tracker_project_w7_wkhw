<template lang="html">
  <div>
    <div class="watched-header">
      <h2>Already Watched</h2>
    </div>
    <div class="watched-view">
      <film-list :films="watchedFilms"></film-list>
      <film-info v-if= "selectedFilm != null" v-show="selectedFilm" :film="selectedFilm"></film-info>
    </div>
  </div>
</template>

<script>

import FilmList from '@/components/FilmList';
import FilmInfo from '@/components/FilmInfo';
import { eventBus } from '@/main.js'
export default {
  data() {
    return {
      selectedFilm: null
    }
  },
  components: {
    "film-list": FilmList,
    "film-info": FilmInfo
  },
  props: ['watchedFilms',],
  mounted(){
      eventBus.$on('film-selected', film => this.selectedFilm = film )
    }
}
</script>

<style lang="css" scoped>
/* h2 {

  background-color: #319CAC;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
} */

.watched-header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}



.watched-view {

  display: flex;
  justify-content: space-between;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}

</style>
