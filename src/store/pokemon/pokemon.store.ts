import { createStore } from 'vuex'
import { PokemonState } from "./pokemon.model";

export const store = createStore<PokemonState>({
	state() {
		return {
			count: 0,
			pokemonList: []
		}
	},
	getters: {
		pokemonList: state => [ ...state.pokemonList ],
		count: state => state.count
	},
	mutations: {
		increment(state: PokemonState) {
			state.count++
		},
		loadPokemon(state, payload) {

		}
	},
})
