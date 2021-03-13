<template>
  <div class="fluid">
    <h1 class="text-center text-bg-gray-900">Sign Up</h1>
    <form class="mb-6" action="/contact">
      <p>
        <label
          for="gender"
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          >Gender</label
        >
        <select
          id="gender"
          name="gender"
          class="border py-2 px-3 text-grey-darkest"
          v-model="gender"
          required
        >
          <option>Male</option>
          <option>Female</option>
          <option>Na</option>
        </select>
      </p>

      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="first_name"
          >First Name</label
        >
        <input
          id="first_name"
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="first_name"
          v-model="firstName"
          required
        />
      </div>
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="last_name"
          >Last Name</label
        >
        <input
          id="last_name"
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="last_name"
          v-model="lastName"
          required
        />
      </div>
      <button
        class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
        @click="addInfo"
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
      firstName: '',
      lastName: '',
      gender: '',
    }
  },
  methods: {
    addInfo() {
      this.$store.commit('clientInfo/setFirstName', this.firstName)
      this.$store.commit('clientInfo/setLastName', this.lastName)
      this.$store.commit('clientInfo/setGender', this.gender)
    },
  },
}
</script>

<style></style>
