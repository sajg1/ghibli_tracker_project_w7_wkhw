<template lang="html">
  <div class= "film-item">
    <li>{{film.title}}</li>
    <p v-if="onWatchedView">&#10003;</p>
    <button v-on:click="displayFilmInfo">Film Info</button>
    <button v-if="!onWatchedView" v-on:click="addToWatched">I've Seen This!</button>
    <button v-if="onWatchedView" v-on:click="removeFromWatched" >Remove from Watched</button>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
export default {
  name: 'film-item',
  props: ['film', 'watchedFilms'],
  methods: {
    displayFilmInfo: function(){
      eventBus.$emit('film-selected', this.film )
    },
    addToWatched: function(){
      eventBus.$emit('film-watched', this.film)
    },
    removeFromWatched: function(){
      eventBus.$emit('film-removed', this.film)
    }

  },
  computed: {
    onWatchedView: function (){
      return this.watchedFilms.includes(this.film)
    },
  }
}
</script>

<style lang="css" scoped>

.film-item {

  margin: 20px;
}


</style>
