import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonById from './pages/PokemonById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokemonById/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
