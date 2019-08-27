import React, { Component } from 'react'
import './Card_inventor.css'

class Card_inventor extends Component {
    render() {
        return (
            <div className="card-profil">
                <p>Photo</p>
                <h3>Nom Prénom</h3>
                <p>Date de naissance / mort</p>
                <p>Pays, lieux de vie ou origines</p>
                <p>Métier</p>
                <p>Histoire</p>
                
            </div>
        )
    }
}

export default Card_inventor
