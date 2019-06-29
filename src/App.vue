<template>
  <div id="app">
    <ghibli-navbar />
    <ghibli-header title="Studio Ghibli Film Tracker"/>
    <router-view :films="films" :watchedFilms="watchedFilms" id="view"/>
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
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => this.films = data)

    eventBus.$on('film-watched', film => this.watchedFilms.push(film))
  }


}
</script>

<style lang="css" scoped>

</style>
