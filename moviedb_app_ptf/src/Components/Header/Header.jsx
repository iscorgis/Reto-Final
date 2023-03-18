import React from 'react';
import Combobox from "react-widgets/Combobox";

import { NavLink } from 'react-router-dom';
import '../Header/Header.scss'
import {ListBox} from 'react-widgets';


const Header = props =>{
    return(<header>

        <div>
        
        <NavLink to="/searchByOverview">
            <span className="searchByOverview">Peliculas Overview</span>
        </NavLink>

        <NavLink to="/searchByOriTitle">
            <span className="searchByOriTitle">Peliculas OriTitle</span>
        </NavLink>

        <NavLink to="/searchByTitle">
            <span className="searchByTitle">Peliculas UpComing</span>
        </NavLink>

        <NavLink to="/topTen">
            <span className="searchByTitle">Peliculas Top 10</span>
        </NavLink>

        <NavLink to="/">
           
        </NavLink>


        </div>
    </header>

    )
}

export default Header;