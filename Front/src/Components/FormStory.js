import React, { Component } from 'react'
import Input from './Input';

import './Formstory.css'

class FormStory extends Component {

  render() {
    return (
      <div className="formstory">
        <form>
          <div className="infos">
          <h4>Informations sur l'inventeur</h4>
          <Input title="Nom / Prénom"/>
          <Input title="Date de naissance" />
          <Input title="Date de décès" />
          <Input tilte="Pays et/ou origines" />
          <Input title="Métier" />

          <h4>Informations sur l'invention</h4>
          <Input title="titre de l'invention" />
          <Input title="date de l'invention" />

          <div className="storytelling">
            <label className="title-txtarea">Histoire de l'invention :</label>
            <textarea className="textarea-custom"></textarea>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default FormStory
