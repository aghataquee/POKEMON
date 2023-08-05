import { useState } from 'react'
import Customroutes from './routes/Customroutes';
import {Link} from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <div className="outer-pokedex">
      <h1 id="heading"><Link to="/">Pokemon</Link></h1>
      <Customroutes />    
    </div>
  )
}

export default App
