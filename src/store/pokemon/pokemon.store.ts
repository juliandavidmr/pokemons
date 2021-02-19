import { createStore } from 'vuex'
import { Pokemon, PokemonState } from "./pokemon.model";

export const store = createStore<PokemonState>({
	state(): PokemonState {
		return {
			count: 0,
			loading: false,
			pokemonList: []
		}
	},
	getters: {
		pokemonList: state => [ ...state.pokemonList ],
		pokemonListStared: state => [ ...state.pokemonList ].filter(p => p.stared),
		loading: state => state.loading
	},
	actions: {
		loadPokemon(context) {
			context.commit('loading', true);
			return fetch(`https://pokeapi.co/api/v2/pokemon`)
				.then(r=> r.json())
				.then((r: { results: Pokemon[] }) => {
					context.commit('setPokemonList', { list: r.results })
					setTimeout(() => {
						context.commit('loading', false);
					}, 1000)
				})
		},
		changeCheckedState(context, payload) {
			context.commit('setChecked', payload)
		}
	},
	mutations: {
		loading(state: PokemonState, payload: boolean) {
			return state.loading = payload;
		},
		setPokemonList(state, payload: { list: Pokemon[] }) {
			state.pokemonList = [ ...payload.list ];
		},
		setChecked(state, payload: { name: string }) {
			state.pokemonList = state.pokemonList.map((pokemon) => {
				if (pokemon.name === payload.name) {
					pokemon.stared = !pokemon.stared;
				}
				return pokemon;
			})
		}
	},
})
