<template>
  <div class="text-center">
    <h1 class="display-4">About us Page</h1>
    <p class="lead">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
    
    <button @click="goToContactUs" class="btn btn-primary">Contact US now</button>

  </div>
</template>

<script>
export default {
  methods: {
    goToContactUs() {
      this.$router.push('contact-us')
    }
  }
}
</script>
