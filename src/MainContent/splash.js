import React, {useState} from 'react'
import './splash.css'
import {Route, Redirect} from 'react-router-dom'
import Card from './Card';

const Splash = () => {

    const [redirect,useRedirect] = useState(false)
    
    const sampleCardAttributes = {
        attributes: {
            text: 'This is an idea card. Let the poster know their idea got you thinking, or respond to them with the buttons on the right',
            key: null,
            date: (Date.now() - 259200000),
            isConundrum: false,
            location: 'Hong Kong',
            score: 6,
            getTree: () => {},
            archiveTree: false,
            apiUri: "#"
        }
    }

    return (
        <Route exact path="/" render={() => (
            redirect ? (
                <Redirect to="/trees"/>
            ) : (
                <div>
                    <div className="splash">
                        <h1>idearchy</h1>
                        <h3>debate ideas that matter to you...</h3>
                        <input placeholder="All cars should be self-driving!"></input>
                        <span><button onClick={() => useRedirect(true)}>Share</button></span>
                        <h3>...get a new perspective</h3>
                        <div className='problemCard'>
                            "will we still be using cars in the future?"
                        </div>
                    </div>
                    <div className="description">
                        <div>
                            <h1>What is idearchy?</h1>
                            <p>
                                <b>idearchy</b> is a simple tool that lays out discussion and debate visually.
                            </p>
                            <p>
                                When we hear an idea, we always have more than just one thought or response about it we'd like to share.
                                That's why idearchy lays out your ideas in a dynamic tree diagram, where a single idea can branch into many.
                            </p>
                            <p>
                                Click on 'This weeks tree' in the navigation bar to view the current discussion or 'Archive' to view previous ones.
                            </p>
                        </div>
                        <Card nodeData={sampleCardAttributes}/>
                    </div>
                </div>
            )
        )}/>
    )
}

export default Splash