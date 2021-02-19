<template>
  <h1>{{ msg }}</h1>
  <button @click="incrementCounter">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  computed: {
    count() {
      return this.$store.getters.count
    }
  },
  setup: () => {
    // const count = ref(0)
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    return { useScriptSetup, useTsPlugin }
  },
  methods: {
    incrementCounter() {
      this.$store.commit('loadPol');
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
