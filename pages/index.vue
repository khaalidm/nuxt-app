<template>
  <div class="container">
    <button
      class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
      type="button"
      @click="signUp"
    >
      Sign Up
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signUp() {
      this.$router.push('basic')
    },
  },
}
</script>

<style></style>
