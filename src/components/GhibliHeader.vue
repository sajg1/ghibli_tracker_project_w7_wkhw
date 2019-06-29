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
  color: #f3e8d9;
  background-color: #c04a52;
  margin: 0;
  padding: 25px;
  font-weight: bold;
  text-align: left;
}
</style>
