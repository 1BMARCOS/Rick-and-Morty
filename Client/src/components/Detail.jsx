import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";




const Detail = () => {
    const {id} = useParams ()

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:5173/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h1>ENTRASTE AL DETAIL PAPU</h1>

        {character?
        <div>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin ? character.origin.name : null}</h2>
        <img src={character.image} alt="" />
         </div>:null  
        }
        </div>
    )
}

export default Detail;