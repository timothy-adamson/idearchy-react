import React from 'react'
import IdeaInput from './IdeaInput'

const StartTree = (props) => {

    return (
        <div className="startTree">
            <h1>today's tree hasn't been started yet</h1>
            <h2>spark it here</h2>
            <IdeaInput startCard={true} getTree={props.getTree}/>
        </div>
    )
}

export default StartTree