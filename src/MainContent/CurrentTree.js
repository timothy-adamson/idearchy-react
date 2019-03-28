import React, {useState,useEffect} from 'react'
import IdeaTree from './IdeaTree'
import '../shared/spinner.css'

const CurrentTree = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (props.viewDate.toDateString() === new Date().toDateString()){
            setLoading(false)
        }
    })

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
                    apiUri={props.apiUri}/>
            }
        </div>
    )
}

export default CurrentTree