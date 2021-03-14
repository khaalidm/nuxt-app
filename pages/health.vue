<template>
  <div>
    <h1 class="text-center text-bg-gray-900">Sign Up</h1>
    <form class="mb-4" action="/finalize">
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="phone"
          >Enter your height in meters:</label
        >
        <input
          id="height"
          v-model="height"
          class="border py-2 px-3 text-grey-darkest"
          type="number"
          name="height"
          min="0"
          step="any"
          required
        />
      </div>
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="phone"
          >Enter your weight in Kilograms:</label
        >
        <input
          id="weight"
          v-model="weight"
          class="border py-2 px-3 text-grey-darkest"
          type="number"
          name="weight"
          min="0"
          step="any"
        />
      </div>
      <label
        class="mb-2 uppercase font-bold text-lg text-grey-darkest"
        for="phone"
        >Have you recently been sick :</label
      >
      <input
        id="isSick"
        v-model="isSick"
        type="radio"
        name="isSick"
        value="true"
      />
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
      height: '',
      weight: '',
      isSick: '',
    }
  },
  methods: {
    saveData() {
      this.$store.commit('clientInfo/setHeight', this.height)
      this.$store.commit('clientInfo/setWeight', this.weight)
      if (this.isSick === '') {
        this.isSick = false
      }
      this.$store.commit('clientInfo/setIsSick', this.isSick)
    },
  },
}
</script>

<style></style>
