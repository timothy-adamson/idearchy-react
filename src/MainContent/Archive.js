import React, {useState, useEffect} from 'react'
import './Archive.css'
import IdeaTree from './IdeaTree'
import '../shared/spinner.css'

const Archive = (props) => {

    // Hooks for dynamic date display and loading spinner
    const [showingLastWeek, setShowingLastWeek] = useState(false)
    const [loading, setLoading] = useState(true)

    // Returns the date of the Sunday previous of the most recent (Start of the week previous week)
    const lastWeekStart = () => {
        let refDate = new Date()
        refDate.setDate(refDate.getDate() - refDate.getDay() - 7)

        return refDate
    }

    // Side effect hook checks and sets visual hooks on state changes
    useEffect(() => {
        if ((props.viewDate.toDateString() === lastWeekStart().toDateString()) !== showingLastWeek){
            setShowingLastWeek(!showingLastWeek)
            setLoading(false)
        }
    })

    // Check if the current view is This weeks tree, set to previous weeks by default
    if (props.viewDate.toDateString() === new Date().toDateString()){
        props.getTree(lastWeekStart())
    }

    // Navigation methods
    const nextWeek = () => {
        let refDate = new Date(props.viewDate)
        refDate.setDate(refDate.getDate() + 7)

        props.getTree(refDate)
    }

    const prevWeek = () => {
        let refDate = new Date(props.viewDate)
        refDate.setDate(refDate.getDate() - 7)

        props.getTree(refDate)
    }
    
    const formatDate = () => {
        let refDate = new Date(props.viewDate)
        refDate.setDate(refDate.getDate() + 6)
        const endOfWeek = new Date(refDate)

        const options = {
            month: "long",
            day:"numeric"
        }

        return showingLastWeek ? "Last Week" : `${props.viewDate.toLocaleDateString('en-GB',options)} - ${endOfWeek.toLocaleDateString('en-GB',options)}`
    }

    return (
        <div>
            {loading ?
                <div className="loadingContainer">
                    <div className="loadingSpinner"></div>
                </div> :
                <div>
                    <div className="dateSelector">
                        <h3 className="selectorBtn" onClick={prevWeek}>Previous Week</h3>
                        <h1 className="selectorHeading">{formatDate()}</h1>
                        {!showingLastWeek ? <h3 className="selectorBtn" onClick={nextWeek}>Next Week</h3> : ""}
                    </div>
                    <IdeaTree
                        treesData={props.treesData}
                        archiveTree={true}
                        apiUri={props.apiUri}/>
                </div>
            }
        </div>
    )
}

export default Archive