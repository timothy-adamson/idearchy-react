import React from 'react'
import IdeaInput from './IdeaInput'

const StartTree = (props) => {

    return (
        <div className="startTree">
            <h1>this weeks tree hasn't been started yet</h1>
            <h2>start it here</h2>
            <IdeaInput
                startCard={true}
                getTree={props.getTree}
                apiUri={props.apiUri}/>
        </div>
    )
}

export default StartTree