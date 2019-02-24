import React from 'react'
import './splash.css'

const Splash = () => {
    return (
        <div className='splash'>
            <h1>idearchy</h1>
            <h3>share ideas</h3>
            <input placeholder="shoot our garbage at the sun"></input>
            <span><button>Share</button></span>
            <h3>solve conundrums</h3>
            <div className='problemCard'>
                "i can't see my toes"
            </div>
        </div>
    )
}

export default Splash