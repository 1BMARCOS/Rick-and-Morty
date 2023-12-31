import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import {connect} from 'react-redux'
import { useState } from "react";
import { useEffect } from "react";
 function Card({id, name, status, species, gender, origin, image, onClose,
    removeFav, addFav, myFavorites}) {
      const [isFav, setIsFav] = useState (false)

      const handleFavorite = () => {
         if (isFav){
            setIsFav (false);
            removeFav (id);
         }
         else {
            setIsFav (true),
            addFav ({id, name, status, species, gender, origin, image})
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);
   return (
      <>
      
        <div key = {id}>
            {
           isFav ? (            
              <button onClick={handleFavorite}>❤️</button>
           ) : (
              <button onClick={handleFavorite}>🤍</button>
           )
         }
           <button onClick={() => onClose (id)} >X</button>
           <Link to={`/detail/${id}`} >
               <h3 className="card-name">{name}</h3>
            </Link>
           <h2>{species}</h2>
           <h2>{gender}</h2>
           <h2>{status}</h2>
           <h2>{origin}</h2>
           <img src={image} alt='' />
        
        </div>
      </>
   );
}
const mapStatetoProps = (state) => {
   return {myFavorites: state.myFavorites}
}
const mapDispatchtoProps = (dispatch) => {
   return {
      addFav : (character) => { dispatch(addFav(character))},
      removeFav: () => {dispatch(removeFav(id))}
   }
}

export default connect (
   mapStatetoProps,
   mapDispatchtoProps
)(Card)
