import { connect } from "react-redux"
import Card from "../Card"
const Favorites = ({myFavorites}) => {
    return (
        <>
        {
            myFavorites?.map ( fav =>{
                return (
                    <Card
                        key = {fav.id}
                        id = {fav.id}
                        name = {fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                    />
                )
            })
        }
        
        
        </>

    )
}

const mapStatetoProps = (state) => {
    return {myFavorites: state.myFavorites}
 }


export default connect(
    mapStatetoProps,
    null
) (Favorites)