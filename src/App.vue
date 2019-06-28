<template>
  <div id="app">
    <nav>
    <router-link :to="{ name: 'films'}">Films</router-link>
    <router-link :to="{ name: 'watched'}">Already Watched</router-link>
    </nav>

    <router-view :films="films" id="view"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      films: []
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => this.films = data)
  }


}
</script>

<style lang="css" scoped>

  a {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

</style>
