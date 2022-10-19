import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/UserName.slice'

const FormHome = () => {
 
const dispatch= useDispatch()
const navigate = useNavigate()

const submit = (e)=>{
e.preventDefault()
const name = e.target.name.value.trim()
console.log(name)
dispatch(setUserNameGlobal(name))
navigate('/pokedex')
}
 
    return (
    <form onSubmit={submit} className='pokedex__form' action="">
        <input id='name' className='pokedex__input' type="text" placeholder='Tu nombre..' />
        <button className='pokedex__btn'>catch them all</button>
      </form>
  )
}

export default FormHome