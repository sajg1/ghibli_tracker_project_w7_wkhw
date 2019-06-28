<template lang="html">
  <div class="film-info">
    <p>Title: {{film.title}}</p>
    <p>Director: {{film.director}}</p>
    <p>Release Date:{{film.release_date}}</p>
    <p>Rotten Tomatoes Rating: {{film.rt_score}}</p>
  </div>
</template>

<script>
export default {
  name: "film-info",
  props: ['film']
}
</script>

<style lang="css" scoped>
  .film-info {
      margin-top: 60px;
      width: 70%;
  }

</style>
