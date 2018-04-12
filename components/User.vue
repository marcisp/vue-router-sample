<template>
  <div>
    <h1 class="display-4 text-center">
      User details page
    </h1>
    <div class="card">
      <div class="card-header">User</div>
      <div class="card-body">
        <p>Id: {{ $route.params.id }}</p>
        <p>name: {{ $route.params.user.data.name }}</p>
        <p>surname: {{ $route.params.user.data.surname }}</p>
        <p>email: {{ $route.params.user.data.email }}</p>
      </div>
    </div>
    <button class="btn btn-dark mt-3" @click="$router.back()">Back to list</button>
  </div>
</template>

<script>
export default {
  created() {
    
  }
}
</script>
