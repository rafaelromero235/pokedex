import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = ({settypeSelected,setpage}) => {
 
    const url = 'https://pokeapi.co/api/v2/type'
    const [types, settypes] = useState()
 
    useEffect(()=>{
        axios.get(url)
        .then(res=>settypes(res.data.results))
        .catch(err => console.log(err))


    },[])

   const handlechangue = (e)=>{
       settypeSelected(e.target.value)
        setpage(1)
   }

    return (
    <select className='select__form' onChange={handlechangue}>
        <option value="all pokemons">all pokemons</option>
        {
            types?.map(type=>(
               <option key={type.url} value={type.url}>{type.name}</option> 
            ))
        }
    </select>
  )
}

export default SelectByType