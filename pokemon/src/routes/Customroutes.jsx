import {Routes,Route} from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex.jsx';
import Pokemondetails from '../components/Pokemondetails/Pokemondetails.jsx'
function Customroutes(){
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>}></Route>
            <Route path="/pokemon/:id" element={<Pokemondetails/>}></Route>
        </Routes>
    )
}
export default Customroutes;