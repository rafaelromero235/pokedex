import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputsearch.css'
const InputSearch = () => {

const navigate = useNavigate()

const submit =(e)=>{
e.preventDefault()

navigate(`/pokedex/${e.target.inputpokemon.value.trim().toLowerCase()}`)

}


  return (
    <form className='form' onSubmit={submit} action="">
        <input className='form__input' type="text" id='inputpokemon' placeholder='search a pokemon' />
        <button className='form__btn'>search</button>
    </form>
  )
}

export default InputSearch