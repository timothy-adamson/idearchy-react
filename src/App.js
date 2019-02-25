import React, { Component } from 'react';
import './App.css';
import Navbar from './shared/navbar';
import MainContent from './MainContent/MainContent'
import Footer from './shared/footer';
import customJson from './content/MOCK_DATA'

class App extends Component {
  constructor(){
    super()
    this.state = {
      ideasData: [],
      problemsData: []
    }
  }

  componentDidMount(){
    console.log(customJson);
  }

  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        <Footer />
        <p> here</p>
      </div>
    );
  }
}

export default App;
