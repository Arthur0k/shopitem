<template>
  <h1>search --{{ $route.name }}+++++id:{{ $route.params.id }}</h1>
</template>

<script>
  export default {
  data() {
  return { msg: "haha" }
  },
  methods: {},
  watch: {
  $route(to, from) {
  console.log(this.$route)
  console.log(this.$router)
  this.$router.push({name: 'shop'})
  }
  }
  }
</script>
