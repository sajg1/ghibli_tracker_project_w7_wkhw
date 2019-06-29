<template lang="html">
  <div class="film-info">
    <p>Title: {{film.title}}</p>
    <p>Director: {{film.director}}</p>
    <p>Release Date:{{film.release_date}}</p>
    <p>Rotten Tomatoes Rating: {{film.rt_score}}</p>
    <br>
    <p>Description:</p>
    <p>{{film.description}}</p>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: "film-info",
  props: ['film'],
  method: {

  }

}
</script>

<style lang="css" scoped>
  .film-info {
      background-color: #1d938a;
      color: #f3e8d9;
      border-radius: 5px;
      margin: 20px;
      padding: 5px;

      width: 70%;
  }

</style>
