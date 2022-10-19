import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardpoke.css'

const CardPoke = ({url}) => {
  
 const [pokemon, setpokemon] = useState()
 
    useEffect(()=>{
        axios.get(url)
        .then(res=>setpokemon(res.data))
        .catch(err=>console.log(err))

  },[])
  const navigate= useNavigate()
  
const handleclick= ()=>{
navigate(`/pokedex/${pokemon.id}`)
}

console.log(pokemon)
    return (
    <article className={`cardpoke border__${pokemon?.types[0].type.name}`}  onClick={handleclick}  >
        <header className={`cardpoke__header bg-${pokemon?.types[0].type.name}`}>
        <img className='cardpoke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='cardpoke__body'>
            <h3 className={`cardpoke__name letter__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='cardpoke__types-container'>
                {
                    pokemon?.types.map(type=>(
                        <li key={type.slot} className='cardpoke__item'> {type.type.name}</li>
                    ))
                }
            </ul>
            <p className='cardpoke__label'>type</p>
        </section>
            <ul className='cardpoke__stats-container'>
                {
                    pokemon?.stats.map(stat =>(
                        <li key={stat.stat.name} className='cardpoke__stat'>
                            <span className='cardppoke__stat-label'>{stat.stat.name}</span>
                            <span className={`cardpoke__stat-number letter__${pokemon?.types[0].type.name}`}>{ stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
    </article>
  )
}

export default CardPoke