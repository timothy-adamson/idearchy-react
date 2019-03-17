import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './shared/navbar';
import Home from './MainContent/Home';
import Trees from './MainContent/Trees';
import Archive from './MainContent/Archive';
import About from './MainContent/About';
import Footer from './shared/footer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      treesData: []
    }
    this.getData = this.getTree.bind(this)
  }

  componentDidMount(){
    this.getTree(new Date().toISOString());
  }

  getTree(date) {
    fetch(`https://localhost:5001/api/trees?date=${date}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          treesData: data
        })
        console.log(this.state.treesData)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/trees' render={(props) => (<Trees {...props} treesData={this.state.treesData}/>)}/>
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
