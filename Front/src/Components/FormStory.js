import React, { Component } from 'react'
import Input from './Input';

class FormStory extends Component {
  render() {
    return (
      <div className="formstory">
        <form>
        <Input title="nom de l'inventeur"/>
        <Input title="nom de l'invention" />
        <Input title="date de l'invention" />
        </form>
        
      </div>
    )
  }
}

export default FormStory
