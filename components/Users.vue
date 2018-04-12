<template>
  <div>
    <h1 class="display-4 text-center">
      Users
    </h1>
    <!-- <h2 class="font-size-normal">Users:</h2> -->
    <div class="row">
      <div class="w-25"
        v-for="(user, index) in users" 
        :key="index"
      >
        <div class="card m-1">
          <div class="card-header p-2">{{ user.data.name }} {{ user.data.surname }}</div>
          <div class="card-body p-2">
            <ul class="list-group">
              <li class="list-group-item p-2">ID: {{ user.id }}</li>
              <li class="list-group-item p-2">Name: {{ user.data.name }}</li>
              <li class="list-group-item p-2">Surname: {{ user.data.surname }}</li>
              <li v-if="user.data.email" class="list-group-item p-2">Email: {{ user.data.email }}</li>
            </ul>
            <button class="btn btn-success mt-2" @click="view(user)">View</button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { db } from '../firebase'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const usersCollectionRef = db.collection('users').get()
      usersCollectionRef.then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users.push({id: doc.id, data: doc.data()})
        })
      })
    },
    view(user) {
      this.$router.push({name: 'user', path: '/user/:id', params: { user: user, id: user.id }})
    }
  }
}
</script>
