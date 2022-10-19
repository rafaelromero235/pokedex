import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (
    <div>
        <h1>Pokemon not found ..</h1>
        <Link to='/pokedex'>Go back</Link>
    </div>
  )
}

export default Pokemon404