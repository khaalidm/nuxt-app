<template>
  <div>
    <h1 class="text-center text-bg-gray-900">Sign Up</h1>
    <form class="mb-4" action="/health">
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="phone"
          >Enter your phone number:</label
        >
        <input
          id="phone"
          v-model="phoneNumber"
          class="border py-2 px-3 text-grey-darkest"
          type="tel"
          name="phone"
          placeholder="0112586541"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
        />
      </div>

      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="email"
          >Email</label
        >
        <input
          id="email"
          v-model="email"
          class="border py-2 px-3 text-grey-darkest"
          type="email"
          name="email"
          placeholder="example@mail.com"
          required
        />
      </div>
      <button
        class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
        @click="saveData"
      >
        Next Step
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      email: '',
    }
  },
  methods: {
    saveData() {
      this.$store.commit('clientInfo/setPhoneNumber', this.phoneNumber)
      this.$store.commit('clientInfo/setEmail', this.email)
    },
  },
}
</script>

<style></style>
