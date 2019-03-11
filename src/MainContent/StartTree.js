import React, {useState} from 'react'
import IdeaInput from './IdeaInput'

const StartTree = () => {

    return (
        <div className="startTree">
            <h1>today's tree hasn't been started yet</h1>
            <h2>spark it here</h2>
            <IdeaInput />
        </div>
    )
}

export default StartTree