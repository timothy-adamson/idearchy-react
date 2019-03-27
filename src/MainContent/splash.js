import React from 'react'
import './splash.css'

const Splash = () => {
    return (
        <div className='splash'>
            <h1>idearchy</h1>
            <h3>debate ideas that matter to you...</h3>
            <input placeholder="All cars should be self-driving!"></input>
            <span><button>Share</button></span>
            <h3>...get a new perspective</h3>
            <div className='problemCard'>
                "should we still be using cars in the future?"
            </div>
        </div>
    )
}

export default Splash