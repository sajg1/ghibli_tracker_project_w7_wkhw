<template>
  <div id="app">
    <ghibli-navbar />
    <ghibli-header title="STUDIO GHIBLI Film Tracker"/>
    <h2 v-if="allFilms">&#9733;&#9733;&#9733; You've watched the entire Collection! &#9733;&#9733;&#9733;</h2>
    <div :class="allFilms ? 'all-films-watched':'background-image'">
      <router-view :films="films" :watchedFilms="watchedFilms" :watched="watched" id="view"/>
    </div>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
import GhibliNavBar from '@/components/GhibliNavBar'
import GhibliHeader from '@/components/GhibliHeader'
export default {
  name: 'app',
  data() {
    return {
      films: [],
      watchedFilms: []
    }
  },
  components: {
    "ghibli-navbar": GhibliNavBar,
    "ghibli-header": GhibliHeader
  },
  computed: {
    watched: function(){
      return this.watchedFilms.map(watchedFilm => this.films.find( film => watchedFilm === film));
    },
    allFilms: function(){
      if (this.films.length === this.watchedFilms.length)
        return true;
    }
  },
  methods: {
    removeFromWatched: function (film){
      const index = this.watchedFilms.indexOf(film);
      this.watchedFilms.splice(index, 1);
    },
    addToWatched: function(film){
      this.watchedFilms.push(film);
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => this.films = data)
    eventBus.$on('film-watched', film => this.addToWatched(film))

    eventBus.$on('film-removed', film => this.removeFromWatched(film))

  }


}
</script>

<style lang="css" scoped>

  #app {
    margin: 0;
    color: #f3e8d9;
    background-color: #f3e8d9;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  .background-image {
    background-image: url('./assets/backgroundImg.jpg');
    background-size: cover;
    height: 700px;
  }

  .all-films-watched {
    background-image: url('./assets/allFilmsWatched.jpg');
    background-size: cover;
    height: 700px;
  }

  h2 {
    color: #f3e8d9;
    background-color: #688b79;
    margin: 0;
    padding: 15px;
    font-weight: bold;
    text-align: center;
  }




</style>
