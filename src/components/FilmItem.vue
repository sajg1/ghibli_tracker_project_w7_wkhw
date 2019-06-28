<template lang="html">
  <div class= "film-item">
    <li>{{film.title}}</li>
    <button v-on:click="displayFilmInfo">Film Info</button>
    <button v-on:click="addToWatched">I've Seen This!</button>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
export default {
  name: 'film-item',
  props: ['film'],
  methods: {
    displayFilmInfo: function(){
      eventBus.$emit('film-selected', this.film )
    },
    addToWatched: function(){
      eventBus.$emit('film-watched', this.film)
    }
  }
}
</script>

<style lang="css" scoped>

.film-item {

  margin: 20px;
}
</style>
