<template lang="html">
  <div>
    <p>Below is a full list of all films produced by Studio Ghibli. This app has been made to help you keep track of which films you have seen. Click on 'Already Watched' to see your list.</p>

    <div class="films-view">
      <film-list :films="films" :watchedFilms="watchedFilms"></film-list>
      <film-info v-if= "selectedFilm != null" v-show="selectedFilm" :film="selectedFilm"></film-info>
    </div>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList';
import FilmInfo from '@/components/FilmInfo'
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

  p {
    opacity: 0.8;
    margin: 0;
    background-color: #990033;
    padding: 25px;

  }

  .films-view {

    display: flex;
    justify-content: space-between;
    text-align: center;

  }



</style>
