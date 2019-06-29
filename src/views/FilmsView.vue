<template lang="html">
  <div>
    <div class="films-header">
    <!-- <h1>Studio Ghibli Films Tracker</h1> -->
    <p>Below is a full list of all films produced by Studio Ghibli. This app has been made to help you keep track of which films you have seen.</p>
    </div>

      <div class="films-view">
        <film-list :films="films"></film-list>
        <film-info v-if= "selectedFilm != null" v-show="selectedFilm" :film="selectedFilm"></film-info>
      </div>
    </div>
</template>

<script>
import FilmList from '@/components/FilmList';
import FilmInfo from '@/components/FilmInfo'
import { eventBus } from '@/main.js';

export default {
  props: ['films'],
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
    margin: 0;
    background-color: #990033;
    color: #f3e8d9;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 25px;

  }

  .films-view {

    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #990033;

  }



</style>
