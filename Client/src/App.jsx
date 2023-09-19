import style from './App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation ();
   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'marcoss.cs@hotmail.com';
const PASSWORD = 'marq1';

function login (userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {

      const filteredCharacters = characters.filter((character) => character.id !== Number (id));
      setCharacters (filteredCharacters);

   }

;

   return (
      <div className={style.App}>
         {location.pathname!=="/"? <Nav onSearch={onSearch}/>:null}
         <Routes>
            <Route path='/home' element = {<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/detail/:id' element= {<Detail/>}/>
            <Route path='/' element= {<Form login ={login}/>}/>
         </Routes>
      </div>
   );
}


export default App;
