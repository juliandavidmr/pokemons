<template>
  <div v-if="loading" class="fixed left-0 top-0 w-full h-screen bg-white flex items-center justify-center opacity-90 pointer-events-none">
    <img src="../../assets/bola.svg" alt="bola">
  </div>

  <div class="w-full h-screen flex flex-col items-center justify-center">
    <img alt="Vue logo" src="../../assets/pikachu.svg" class="block -top-19 w-52 h-52" />
    <h2 class="font-semibold text-xl mb-4">Welcome to Pokédex</h2>
    <p class="max-w-xl text-center text-gray-600 mb-4">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    <button @click="getStared" class="rounded-3xl bg-red-600 py-1 px-5 text-white">Get started</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    getStared() {
      this.$store.dispatch('loadPokemon').then(() => {
        this.$router.push('/list')
      })
    }
  }
}
</script>

<style scoped>

</style>
