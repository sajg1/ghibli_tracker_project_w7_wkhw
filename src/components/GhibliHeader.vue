<template lang="html">
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "ghibli-header",
  props: ["title"]
}
</script>

<style lang="css" scoped>

h1 {
  color: white;
  background-color: #319CAC;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
