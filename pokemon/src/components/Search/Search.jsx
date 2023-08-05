import Pokemonlist from '../Pokemonlist/Pokemonlist.jsx';
import './Search.css';
function Search(){
    return (
        <div className="search-wrapper">
            <input type="text" id="search" placeholder="search pokemon"/>
            <Pokemonlist />
            
           
        </div>
    )
}
export default Search;