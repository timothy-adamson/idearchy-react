import React, {useState,useEffect} from 'react'
import IdeaTree from './IdeaTree'
import '../shared/spinner.css'

const CurrentTree = (props) => {

    // Loading spinner visual hook
    const [loading, setLoading] = useState(true)

    // Remove loading spinner when tree data is loaded
    useEffect(() => {
        if (props.viewDate.toDateString() === new Date().toDateString()){
            setLoading(false)
        }
    })

    // Load this week's tree if it is not the current view
    if (props.viewDate.toDateString() !== new Date().toDateString()){
        props.getTree(new Date())
    }

    return(
        <div>
            {loading ?
                <div className="loadingContainer">
                    <div className="loadingSpinner"></div>
                </div> :
                <IdeaTree 
                    treesData={props.treesData}
                    apiUri={props.apiUri}
                    getTree={props.getTree}/>
            }
        </div>
    )
}

export default CurrentTree