import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="foot-content" >
          <ul className=" ul-foot">
            <a href="/"><li className="li-foot">Accueil</li></a>
            <a href="/random"><li className="li-foot">Découvrir un inveteur</li></a>
          </ul>

          <ul className=" ul-foot">
            <a href="/inventions"><li className="li-foot">Liste des inventions</li></a>
            <a href="/submit"><li className="li-foot">Soumettre une histoire</li></a>
          </ul>

          <ul className=" ul-foot">
            <div className='logo-foot'>
              <a href="https://www.linkedin.com/in/solene-mahaut/" target="_blank" rel="noopener noreferrer" ><img className="icon-footer" src="http://culliganrecrute.fr/wp-content/uploads/2018/01/linkedin-icon.png" alt="" /></a>
            </div>
          </ul>
        </div>
        <p>© Mahaut Solène - 2019 Tout droit reservé</p>
      </footer>
    )
  }
}

export default Footer