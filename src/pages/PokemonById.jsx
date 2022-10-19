import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import './styles/pokemonbyid.css'

const PokemonById = () => {

  const { id } = useParams()
  const [pokemon, setpokemon] = useState()
  const [haserror, sethaserror] = useState(false)


  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => {
        setpokemon(res.data)
        sethaserror(false)
      })
      .catch(err => {
        console.log(err)
        sethaserror(true)
      })

  }, [])

  console.log(pokemon)

  if (haserror) {

    return <Pokemon404 />
  } else {

    return (
      <article className='card__pokemon'>
        <header className= {`poke__header bg-${pokemon?.types[0].type.name}`}>
          <div className={`poke__header-bg`}>
            <img className='poke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
        </header>
        <div className='poke__body'>
          <h2 className='poke__id'>{`# ${pokemon?.id}`}</h2>
          <h2 className='poke__name'>{pokemon?.name}</h2>
          <div className='poke__container'>

            <div className='poke__peso'>
              <p className=''>peso</p>
              <p>{pokemon?.weight}</p>
            </div>
            <div className='poke__altura'>
              <p>altura</p>
              <p>{pokemon?.height}</p>
            </div>
          </div>
          <div className='padre__container'>

            <p className='poke__tipo-label'>types:
              <div className='tipo__container'>

                {pokemon?.types.map(type => (
                  <p className='tipo__item'>{type.type.name}</p>
                ))

                }
              </div>
            </p>

            <p className='poke__ability-label'>abilities:
              <div className='ability__container'>
                {pokemon?.abilities.map(ability => (
                  <p className='ability__item'>{ability.ability.name}</p>
                ))

                }

              </div>
            </p>

          </div>
                <div className='stats__container'>
                  <h3 className='stats__title'>stats</h3>
                  {
                    pokemon?.stats.map(stat=>(
                      <div className='stat__container'>
                        <span className='cardppoke__stat-label'>{stat.stat.name}</span>
                        <span className={`cardpoke__stat-number letter__${pokemon?.types[0].type.name}`}>{ stat.base_stat}</span>
                        <div className='barra__padre'>
                          <div className='barra__avance'></div>
                        </div>

                      </div>
                    ))
                  }

                </div>
                <div className='separator__footer'></div>
        </div>

      </article>
    )
  }
}

export default PokemonById