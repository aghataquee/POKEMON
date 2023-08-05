import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import './Pokemondetails.css'
function Pokemondetails(){
    const [pokemon,setpokemon]=useState({});
    const {id}=useParams();
    async function downloadpokemon(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data)
        setpokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height,
            weight:response.data.weight,
            types:response.data.types.map((t)=>t.type.name)

        })


    }
    useEffect(()=>{
        downloadpokemon();
    },[]);

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">name:{pokemon.name}</div>
            <img className="pokemon-image" src={pokemon.image} />
            <div>Height:{pokemon.height}</div>
            <div>Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}

            </div>

        </div>
    )
}
export default Pokemondetails;