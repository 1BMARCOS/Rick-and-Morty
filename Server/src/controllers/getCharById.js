const axios = require ('axios') 
const url = `https://rickandmortyapi.com/api/character/`

const getCharById = (req, res ) => {
    const { id } = req.params
    axios(`${url}/${id}`)
      .then(({data}) => {
        if (data.name){
            const character = { 
                id : data.id,
                status: data.status,
                name: data.name, 
                species: data.species, 
                origin: data.origin, 
                image: data.image, 
                gender: data.gender}
            return res.json (character);
        }
        return res.status (404).send ('Not found');
    
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
        

}
module.exports = getCharById;