import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './shared/navbar';
import Home from './MainContent/Home';
import TodaysTree from './MainContent/TodaysTree';
import Archive from './MainContent/Archive';
import About from './MainContent/About';
import Footer from './shared/footer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      treesData: [],
      viewDate: new Date()
    }
    this.apiUri = 'https://idearchyapi.azurewebsites.net'

    this.getTree = this.getTree.bind(this)
  }

  componentDidMount(){
    this.getTree(this.state.viewDate);
  }

  getTree(date) {

    fetch(`${this.apiUri}/api/trees?date=${date.toISOString()}`)
      .then(res => {
        if (res.status !== 404){
          return res.json()
        }
        else{
          return this.setState({
            treesData: [],
            viewDate: date
          })
        }
      })
      .then(data => {
        this.setState({
          treesData: data,
          viewDate: date
        })
        console.log(this.state.treesData)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar getTree={this.getTree}/>
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/trees' render={() => <TodaysTree
                          treesData={this.state.treesData}
                          viewDate={this.state.viewDate}
                          getTree={this.getTree}
                          apiUri={this.apiUri}/>}/>
                        <Route path='/archive' render={() => <Archive
                          treesData={this.state.treesData}
                          viewDate={this.state.viewDate}
                          getTree={this.getTree}
                          apiUri={this.apiUri}/>}/>
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
