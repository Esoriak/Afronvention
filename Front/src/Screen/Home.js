import React, { Component } from 'react'
import Header from '../Components/Header';

import '../Screen/Home.css'
import Card_inventor from '../Components/Card_inventor';
import Footer from '../Components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <title>Les inventions aux origines Africaines </title>
                
                <Header />
                <Card_inventor />
                <Footer />
            </div>
        )
    }
}

export default Home
