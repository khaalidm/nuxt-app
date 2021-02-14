<template>
  <form class="mb-4" action="/health" method="post">
    <div class="flex flex-col mb-4">
      <label
        class="mb-2 uppercase font-bold text-lg text-grey-darkest"
        for="phone"
        >Enter your height in meters:</label
      >
      <input
        class="border py-2 px-3 text-grey-darkest"
        type="number"
        id="height"
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
        class="border py-2 px-3 text-grey-darkest"
        type="number"
        id="height"
        name="height"
        min="0"
        step="any"
      />
    </div>
    <button
      class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
      type="submit"
    >
      Next Step
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
