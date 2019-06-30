<template>
  <div id="app">
    <ghibli-navbar />
    <ghibli-header title="STUDIO GHIBLI Film Tracker"/>
    <div id="background-image">
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
      return this.watchedFilms.map(watchedFilm => this.films.find( film => watchedFilm === film))
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => this.films = data)
    eventBus.$on('film-watched', film => this.watchedFilms.push(film))

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

  #background-image {
    background-image: url('./assets/backgroundImg.jpg');
    background-size: cover;
    height: 700px;
  }




</style>
