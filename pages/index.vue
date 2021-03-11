<template>
  <div class="container">
    <h1>Front Page</h1>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit('initialiseStore')
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
