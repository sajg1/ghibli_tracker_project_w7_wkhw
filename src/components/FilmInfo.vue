<template lang="html">
  <div class= "film-info">
    <h2>{{film.title}}</h2>
    <p>Director: {{film.director}}</p>
    <p>Release Date: {{film.release_date}}</p>
    <p>Rotten Tomatoes Rating: {{film.rt_score}}</p>
    <br>
    <p>Description:</p>
    <p>{{film.description}}</p>
    <p v-if="onWatchedView">{{location.name}}</p>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: "film-info",
  props: ['film'],
}
</script>

<style lang="css" scoped>
  .film-info {
      opacity: 0.8;
      background-color: #c04a52;
      color: #f3e8d9;
      border-radius: 5px;
      margin: 20px;
      padding: 20px;
      height: 530px;
      width: 70%;
  }



</style>
