<template lang="html">
  <div>
    <h1>Studio Ghibli Films</h1>
      <div class="film-view">
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

  h1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 20px
  }

  .film-view {

    display: flex;
    justify-content: space-between;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;

  }



</style>
