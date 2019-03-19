import React from 'react'
import IdeaTree from './IdeaTree'

const TodaysTree = (props) => {

    if (props.viewDate.toDateString() !== new Date().toDateString()){
        props.getTree(new Date())
    }

    return(
        <div>
            <IdeaTree 
                treesData={props.treesData}/>}/>
        </div>
    )
}

export default TodaysTree