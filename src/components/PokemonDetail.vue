<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 pb-20 m-4 sm:m-0 text-center sm:block sm:p-0">

      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative"
          role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <img src="../assets/background.png" alt="background">
        <div class="bg-white pt-5 pb-4 sm:p-3 sm:pb-2">
          <div class="sm:flex sm:items-start">
            <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="mt-2">
                <ul v-if="info">
                  <li class="border-b-2 py-1"><b>Name</b>: {{ details.name }}</li>
                  <li class="border-b-2 py-1"><b>Weight</b>: {{ info.weight }}</li>
                  <li class="border-b-2 py-1"><b>Height</b>: {{ info.height }}</li>
                  <li class="border-b-2 py-1"><b>Types</b>: {{ info.types.map(t => t.type.name).join(', ') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 py-3 sm:px-3 flex justify-between">
          <button @click="shareData()" type="button"
                  class="w-52 mx-auto inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Share to my friends
          </button>
          <button @click="close()" type="button"
                  class="inline-flex justify-center rounded-full border-none px-3.5 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm absolute right-1.5 top-1.5">
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonDetail",
  props: {
    details: Object,
    close: Function
  },
  data() {
    return {
      info: void 0
    }
  },
  mounted() {
    this.loadInfo();
  },
  methods: {
    loadInfo() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.details.name}`)
          .then(r => r.json())
          .then(info => {
            console.log('info', info)
            this.info = info;
          })
    },
    shareData() {
      const ob = [this.details.name, this.info.weight, this.info.height, this.info.types.map(t => t.type.name).join(', ')];
      window.prompt("Copy to clipboard: Ctrl+C, Enter", ob.join(','));
    }
  }
}
</script>

<style scoped>

</style>
