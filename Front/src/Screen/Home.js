import React, { Component } from 'react'

import Header from '../Components/Header';
import Card_inventor from '../Components/Card_inventor';
import Footer from '../Components/Footer';
import SaviezVous from '../Components/SaviezVous';

import '../Screen/Home.css'
import '../Components/Header.css'

class Home extends Component {
    render() {
        return (
            <div>
                <title>Les inventions aux origines Africaines </title>
                
                <Header />
                <SaviezVous />
                <Card_inventor />
                <Footer />
            </div>
        )
    }
}

export default Home
