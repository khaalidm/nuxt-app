<template>
  <div class="fluid">
    <h1 class="text-center text-bg-gray-900 mb-6">Sign Up</h1>
    <form class="mb-6" action="/contact" method="post">
      <p>
        <label
          for="gender"
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          >Gender</label
        >
        <select
          id="gender"
          v-model="gender"
          name="movie"
          class="border py-2 px-3 text-grey-darkest"
          required
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </p>

      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-lg text-grey-darkest"
          for="first_name"
          >First Name</label
        >
        <input
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="first_name"
          id="first_name"
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
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="last_name"
          id="last_name"
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
  </div>
</template>

<script>
export default {}
</script>

<style></style>
