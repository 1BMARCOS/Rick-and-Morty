const users = require('../utils/users');
const user = require ('../utils/users') // "Importa tu arreglo de usuarios"

const login =  (req, res) => {

const {email, password} = req.query; // "Deberás obtener los datos email y password que recibes mediante Query.""

// Verifica si dentro de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por Query.
const userFound = users.find ((user) => user.email === email && user.password === password )

// En el caso de que haya un usuario que cumpla esa condición,
// devolver una respuesta con status 200, y, en formato JSON, un objeto con una propiedad access: true.
return userFound
? res.status (200).json ({acces: true})
: res.status (200).json ({acces: false})  // Caso contrario devuelve lo mismo pero con la propiedad access: false.

}
module.exports = { 
    login
}









// // Supongamos que tienes un arreglo de usuarios
// const usuarios = [
//     { email: 'usuario1@example.com', password: 'contraseña1' },
//     { email: 'usuario2@example.com', password: 'contraseña2' },
//     // ... otros usuarios ...
// ];

// server.get('/login', (req, res) => {
//     const { email, password } = req.query;

//     if (email && password) {
//         // Verificar si existe un usuario con el email y contraseña proporcionados
//         const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password);

//         if (usuarioEncontrado) {
//             // Si encontramos un usuario que coincide, responder con acceso: true
//             return res.status(200).json({ access: true });
//         }
//     }

//     // Si no se encontró un usuario que coincida o si faltan datos, responder con acceso: false
//     return res.status(200).json({ access: false });
// });