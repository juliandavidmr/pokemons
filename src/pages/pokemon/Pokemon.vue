<template>
  <div class="pokemon-page w-full max-w-lg h-screen mx-auto p-8 relative">
    <input type="search" placeholder="Buscar" class="px-3 py-2 w-full rounded border-gray-200 mb-8">
    <ul>
      <template v-for="item in list" :key="item.name">
        <li v-if="bottomTab === 0 || (bottomTab === 1 && item.stared)">
          <div class="flex justify-between py-4">
            <span class="cursor-pointer" @click="openDetail(item)">{{ item.name }}</span>
            <button @click="changeCheckedState(item.name)" class="outline-none">
              <img v-if="item.stared" src="../../assets/star-checked.svg" alt="star checked">
              <img v-if="!item.stared" src="../../assets/star-unchecked.svg" alt="star unchecked">
            </button>
          </div>
        </li>
      </template>
    </ul>

    <div class="pokemon-page__bottom-bar fixed left-0 bottom-0 h-16 w-full bg-white flex items-center justify-center">
      <button class="mx-5 rounded-3xl w-8 p-1 w-44 border-2 text-white font-semibold"
              @click="bottomTab = 0"
              :class="bottomTab === 0 ? 'bg-red-600': 'bg-gray-200'">
        All
      </button>
      <button class="mx-5 rounded-3xl w-8 p-1 w-44 border-2 text-white font-semibold flex flex-row justify-center items-center"
              @click="bottomTab = 1"
              :class="bottomTab === 1 ? 'bg-red-600': 'bg-gray-200'">
        <img src="../../assets/star-unchecked.svg" alt="star unchecked" class="text-white" width="16" height="16">
        &nbsp;
        Favorites
      </button>
    </div>
  </div>

  <PokemonDetail v-if="details" :details="details" :close="closeDetail"></PokemonDetail>
</template>

<script lang="ts">
import PokemonDetail from '../../components/PokemonDetail.vue'
import { Pokemon } from "../../store/pokemon/pokemon.model";

export default {
  name: "Pokemon",
  components: {
    PokemonDetail
  },
  data(): { bottomTab: boolean; filter: string; details: Pokemon } {
    return {
      bottomTab: 0,
      filter: '',
      details: void 0
    }
  },
  mounted() {
    if (this.list.length === 0) {
      this.$router.push('/')
    }
  },
  computed: {
    list(): Pokemon[] {
      return this.$store.getters.pokemonList;
    }
  },
  methods: {
    changeCheckedState(name: string) {
      this.$store.dispatch('changeCheckedState', { name });
    },
    openDetail(pokemon: Pokemon) {
      this.details = pokemon;
    },
    closeDetail() {
      this.details = void 0;
    }
  }
}
</script>

<style scoped>
.pokemon-page {
  /* background-color: #E5E5E5; */
}

.pokemon-page__bottom-bar {
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
</style>
