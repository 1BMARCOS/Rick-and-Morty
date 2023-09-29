const router = require ('express').Router()

const getCharById = require ('../controllers')
const login = require ('../controllers')
const postFav = require ('../controllers')
const deleteFav = require ('../controllers')

router.get ("/character/:id", getCharById)
router.get ('/login', login)
router.post ('/fav', postFav)
router.post ('/fav/:id', deleteFav) 





module.exports = {
    router
}