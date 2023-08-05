import {useEffect} from 'react'
import {useState} from 'react';
import axios from 'axios';
import './Pokemonlist.css';
import Pokemon from '../Pokemon/Pokemon';
function Pokemonlist(){
    const [isloading,setloading]=useState(true);
    const [pokemonlist,setpokemon]=useState([]);
    const [currUrl,setUrl]=useState(['https://pokeapi.co/api/v2/pokemon'])
    const [nextUrl,setnextUrl]=useState('');
    const [prevUrl,setprevUrl]=useState('');
    async function Downloadpokemon(){
        setloading(true);
        
        const response=await axios.get(currUrl);
        const pokemonResults=response.data.results;
        setnextUrl(response.data.next);
        setprevUrl(response.data.previous);
        const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const pokemondata=await axios.all(pokemonPromise);
        //console.log(pokemondata);
        const pokemondetails=pokemondata.map((pokemon)=>{
            const pokemondetail=pokemon.data;
            return {
                id:pokemondetail.id,
                name:pokemondetail.name,
                image:(pokemondetail.sprites.other)?pokemondetail.sprites.other.dream_world.front_default:pokemondetails.sprites.front_shinny,
                types:pokemondetail.types


            }
        })
        setpokemon(pokemondetails);
        setloading(false);
        //console.log(response.data);

    }
    useEffect(()=>{
        Downloadpokemon();
        

    },[currUrl]);
    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">{(isloading) ? 'loading...':
             pokemonlist.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
            </div>
            <div className="btns">
                <button disabled ={prevUrl==null} onClick={()=>setUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl==null} onClick={()=>setUrl(nextUrl)}>Next</button>
            </div>
             
             
        </div>
    )
}
export default Pokemonlist;