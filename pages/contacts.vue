<template>
  <div>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Sick</th>
      </tr>
      <tr v-for="user of users" :key="user.id">
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.phone_number }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.height }} m</td>
        <td>{{ user.weight }} kg</td>
        <td>{{ user.is_sick }}</td>
        <td>
          <button
            class="bg-gray-900 hover:bg-gray-600 text-white"
            @click="deleteUser(user.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
    <button
      class="block bg-gray-900 hover:bg-gray-600 text-white uppercase text-lg border-4 mx-auto p-1 rounded"
      @click="$fetch"
    >
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  async fetch() {
    this.users = await fetch(
      'http://localhost:3000/api/user/list'
    ).then((res) => res.json())
  },
  head() {
    return {
      title: 'View Contacts',
    }
  },
  mounted() {
    this.$fetch()
  },
  methods: {
    async deleteUser(id) {
      await this.$axios.post('/api/user/delete', { userId: id }).then(() => {
        console.log("Hey I'm here")
        this.$fetch()
      })
    },
  },
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
