<template lang="html">
  <div>
    <h3>Below is a full list of all films produced by Studio Ghibli. Select 'Film Info' to find out more.</h3>

    <div class="films-view">
      <film-list :films="films" :watchedFilms="watchedFilms"></film-list>
      <film-info v-if= "selectedFilm != null" v-show="selectedFilm" :film="selectedFilm"></film-info>
    </div>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList';
import FilmInfo from '@/components/FilmInfo';
import { eventBus } from '@/main.js';

export default {
  props: ['films',"watchedFilms"],
  data() {
    return {
      selectedFilm: null
    }
  },
  components: {
    "film-list": FilmList,
    "film-info": FilmInfo
  },
  mounted() {
    eventBus.$on('film-selected', film => this.selectedFilm = film)
  }
}
</script>

<style lang="css" scoped>

  h3 {
    opacity: 0.8;
    margin: 0;
    background-color: #990033;
    padding: 20px;
    text-align: left;

  }

  .films-view {

    display: flex;
    justify-content: space-between;
    text-align: center;

  }



</style>
