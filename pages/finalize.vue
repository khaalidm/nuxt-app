<template>
  <form class="mb-4" action="/basic" method="post">
    <p>Do you agree to having your data stored on an external database.</p>
    <br />

    <input id="acceptTerms" type="radio" name="acceptTerms" value="true" />
    <label for="acceptTerms">Accept Terms</label><br />
    <button
      class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg mx-auto p-4 rounded"
      type="submit"
    >
      Finalize
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
