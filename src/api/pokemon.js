export const getPokemons = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    return response.json()
}