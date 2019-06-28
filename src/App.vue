<template>
  <div id="app">
    <nav>
    <router-link :to="{ name: 'films'}">Films</router-link>
    <router-link :to="{ name: 'watched'}">Already Watched</router-link>
    </nav>

    <router-view :films="films" :watchedFilms="watchedFilms" id="view"/>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
export default {
  name: 'app',
  data() {
    return {
      films: [],
      watchedFilms: []
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

  a {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
  }

</style>
