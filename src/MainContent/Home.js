import React, {Component} from 'react'
import Splash from './splash'

class MainContent extends Component{
    constructor(){
        super()
        this.state = {
            page: 'home'
        }
    }

    render(){
        return(
            <Splash />
        )
    }
}

export default MainContent