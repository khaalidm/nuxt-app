<template>
  <div>
    <form class="mb-4" action="/basic">
      <p>{{ displayMessage }}</p>
      <br />

      <input
        id="acceptTerms"
        v-model="acceptTerms"
        type="radio"
        name="acceptTerms"
        value="true"
      />
      <label for="acceptTerms">Accept Terms</label><br />
      <button
        class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
        type="button"
        @click="persistData"
      >
        Finalize
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMessage:
        'Do you agree to having your data stored on an external database.',
      acceptTerms: false,
    }
  },
  methods: {
    async persistData() {
      const myRouter = this.$router
      console.log(this.acceptTerms)
      if (this.acceptTerms === 'true') {
        await this.$axios.post('/api/user', {
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
        this.displayMessage = 'Your data has been sucessfully saved !'
        setTimeout(function () {
          myRouter.push('basic')
        }, 2500)
      } else {
        this.displayMessage =
          'Your data has not been saved. redirecting to home page'
        setTimeout(function () {
          myRouter.push('/')
        }, 2500)
      }
    },
  },
}
</script>

<style></style>
