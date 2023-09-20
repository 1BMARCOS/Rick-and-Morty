import React from 'react';
import SearchBar from './SearchBar';
import style from "./Nav.module.css"
import { Link } from 'react-router-dom';

export default function Nav({onSearch}){
    
    return (
        <div className={style.container}>
            <SearchBar  onSearch={onSearch} />

        <button >
            <Link to ='/about'>ABOUT</Link>
        </button>
        <button>
            <Link to ='/home'>HOME</Link>
        </button>

        <button>
            <Link to ='/favorites'>Favorites</Link>
        </button>
        
        </div>
    )
}

