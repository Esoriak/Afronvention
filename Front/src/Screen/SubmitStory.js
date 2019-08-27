import React, { Component } from 'react'
import Header from '../Components/Header'
import FormStory from '../Components/FormStory';
import Footer from '../Components/Footer';

class SubmitStory extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormStory />
        <Footer />
      </div>
    )
  }
}

export default SubmitStory
