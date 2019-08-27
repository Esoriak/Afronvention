import React, { Component } from 'react'
import  {NavLink} from 'react-router-dom'

import './Header.css'


class Navbar extends Component {
    render() {
        return (
            <>
            <div className="container">
                <NavLink exact to="/" className="link">Accueil</NavLink>
                <NavLink to="/random" className="link">Découvrir un inventeur au hasard</NavLink>
                <NavLink to="/submit" className="link">Soumettre une histoire </NavLink>
                <NavLink to="/inventions" className="link">Liste des inventions</NavLink>
            </div>
            </>
        )
    }
}

export default Navbar
