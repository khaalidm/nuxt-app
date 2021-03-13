<template>
  <form class="mb-4" action="/basic" method="post">
    <p>Do you agree to having your data stored on an external database.</p>
    <br />

    <input id="acceptTerms" type="radio" name="acceptTerms" value="true" />
    <label for="acceptTerms">Accept Terms</label><br />
    <button
      class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
      @click="persistData"
    >
      Finalize
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    persistData() {
      this.$axios.post('/api/user', {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        gender: localStorage.getItem('gender'),
        phoneNumber: localStorage.getItem('phoneNumber'),
        email: localStorage.getItem('email'),
        height: localStorage.getItem('height'),
        weight: localStorage.getItem('weight'),
        isSick: localStorage.getItem('isSick'),
      })
      localStorage.clear()
    },
  },
}
</script>

<style></style>
