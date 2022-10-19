import axios from 'axios'
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import Pagination from '../components/pokedexId/Pagination'
import './styles/pokedex.css'

const Pokedex = () => {

  const username = useSelector(state => state.userName)
  const [pokemons, setpokemons] = useState()
  const [typeSelected, settypeSelected] = useState('all pokemons')

  useEffect(() => {
    if (typeSelected !== 'all pokemons') {

      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          console.log(result)
          setpokemons(result)
        })
        .catch(err => console.log(err))

    } else {

      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(url)
        .then(res => setpokemons(res.data.results))
        .catch(err => console.log(err))
    }



  }, [typeSelected])
/*  logica de paginacion */ 
const [page, setpage] = useState(1)
const [pokeperpage, setpokeperpage] = useState(8)
const initialpoke = (page -1)*pokeperpage
const finalpoke= page * pokeperpage

  return (
    <div>
      <header className='header'>
        
        <div className='header__red'>
          <div className='header__black'> 
        </div>
        <div className='header__circle'>
            <div className='header__circle-int'></div>
          </div>
        </div>
        <img className='pokedex__img' src='/images/home/pokedex.png' alt="" />
        <p className='pokedex__hi'>welcome <span className='pokedex__name'>{`${username}`}</span>, here you can find your favorite pokemon </p>
      </header>
      <aside>
        <InputSearch />
        <SelectByType settypeSelected={settypeSelected} setpage={setpage} />
        <Pagination 
        page={page}
        pageslength={pokemons && Math.ceil(pokemons.length / pokeperpage)}
        setpage={setpage}
        />
      </aside>
      <main>
        <div className='card__container' >
          {
            pokemons?.slice(initialpoke,finalpoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}

              />
            ))
          }
        </div>
        <Pagination 
        page={page}
        pageslength={pokemons && Math.ceil(pokemons.length / pokeperpage)}
        setpage={setpage}
        />
      </main>
   
    </div>
  )
}

export default Pokedex