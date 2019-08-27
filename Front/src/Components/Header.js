import React, { Component } from 'react'
import './Header.css'
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="title-home">Le saviez-vous ?</h1>
                <div className="container-intro">
                    <p className="introduction">  Il existe de nombreuses inventions qui ont changés le monde de manière drastique. Parfois en bien, parfois moins, mais quoi qu'il en soit certaines ont révolutionné la société et participé à un changement d'envergure pour notre civilisation.<br/><br/>
                    Etrangement, il perdure dans la transmission de connaissance des erreurs d'attribution de réussite. C'est assez commun, ça existe aussi pour d'autre sujets : la découverte de territoire (coucou <a href="https://fr.wikipedia.org/wiki/Leif_Erikson">Leif Erikson</a> le premier européen de l'an 1000 à avoir mis un pied en Amérique.), les premiers essais cliniques... On nous ment, soit par volonté, par ommission, ou alors dans l'intention peu louable d'entretenir un manque de savoir, peu importe. La vérité est là : si vous cherchez, vous trouverez toujours un sujet où ce qui se dit, n'est pas ce qui s'est passé. Ce qui se raconte, ce qui s'illustre ou s'apprend à l'école n'est pas la véritable histoire. <br/><br/>
                    Ce site a pour but de rendre à Kunta ce qui est à Kunta. Oui bon, vous avez compris l'idée ! <br/>
                    De nombreuse inventions ont étés faites par des africains, des afro-américains, des antillais. L'idée est que de manière générale, les savants noirs à l'époque travaillaient en groupe et leur maître de travaux s'attribuait les mérites de leurs réussites. <br/><br/>
                    Ici donc vous découvrirez peut-être des inventions marquantes de l'histoire dont vous croyez connaître l'auteur...</p>
                </div>
            </div>
        )
    }
}

export default Header
