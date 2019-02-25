import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './shared/navbar';
import Home from './MainContent/Home';
import Trees from './MainContent/Trees';
import Archive from './MainContent/Archive';
import About from './MainContent/About';
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

  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/trees' component={Trees}/>
                        <Route path='/archive' component={Archive}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </div>
            <Footer />
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
