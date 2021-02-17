export interface PokemonState {
	pokemonList: Pokemon[];
	count: number;
}

export interface Pokemon {
	loggedIn: boolean,
	loginError?: string,
	userName?: string,
	expiration?: number,
}
