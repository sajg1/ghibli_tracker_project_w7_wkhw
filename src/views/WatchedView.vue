<template lang="html">
  <div>
      <h2>Already Watched</h2>
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

  h2 {
    margin: 0;
    text-align: left;
    background-color: #990033;
    color: #f3e8d9;
    padding: 25px;
  }



  .watched-view {

    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #990033;

  }

</style>
