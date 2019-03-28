import React, {useState} from 'react'
import './splash.css'
import {Route, Redirect} from 'react-router-dom'

const Splash = () => {

    const [redirect,useRedirect] = useState(false)
    console.log(redirect)

    return (
        <Route exact path="/" render={() => (
            redirect ? (
                <Redirect to="/trees"/>
            ) : (
                <div className='splash'>
                    <h1>idearchy</h1>
                    <h3>debate ideas that matter to you...</h3>
                    <input placeholder="All cars should be self-driving!"></input>
                    <span><button onClick={() => useRedirect(true)}>Share</button></span>
                    <h3>...get a new perspective</h3>
                    <div className='problemCard'>
                        "will we still be using cars in the future?"
                    </div>
                </div>
            )
        )}/>
    )
}

export default Splash