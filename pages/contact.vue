<template>
  <form class="mb-4" action="/health" method="post">
    <div class="flex flex-col mb-4">
      <label
        class="mb-2 uppercase font-bold text-lg text-grey-darkest"
        for="phone"
        >Enter your phone number:</label
      >
      <input
        class="border py-2 px-3 text-grey-darkest"
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />
    </div>

    <div class="flex flex-col mb-4">
      <label
        class="mb-2 uppercase font-bold text-lg text-grey-darkest"
        for="email"
        >Email</label
      >
      <input
        class="border py-2 px-3 text-grey-darkest"
        type="email"
        name="email"
        id="email"
        required
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
