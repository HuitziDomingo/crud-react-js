import { useState, useEffect } from 'react'
import { getPokemons } from '../api/pokemon'

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([])

    const loadPokemons = async () => {
        let data = await getPokemons()
        setPokemons(data.results)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-3">Lista de Pokemons con su informacion.</h1>
                {
                    pokemons.map((x, k) => (
                        <div key={k} className="card text-center">
                            <p>{`Nombre: ${x.name}`}</p>
                            <a href={x.url}><p className='text-info'>{`Info: ${x.url}`}</p></a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pokemon
