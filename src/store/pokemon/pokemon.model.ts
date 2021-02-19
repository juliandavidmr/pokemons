export interface PokemonState {
	pokemonList: Pokemon[];
	count: number;
	loading: boolean;
}

export interface Pokemon {
	name: string
	link: string
	stared: boolean;
}
