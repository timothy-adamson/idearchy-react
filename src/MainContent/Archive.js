import React, {useState} from 'react'
import './Archive.css'
import IdeaTree from './IdeaTree'

const Archive = (props) => {

    let yestDate = new Date()
    yestDate.setDate(yestDate.getDate() - 1)

    const showingYesterday = props.viewDate.toDateString() === yestDate.toDateString()
    console.log(showingYesterday)

    if (props.viewDate.toDateString() === new Date().toDateString()){
        let refDate = new Date()
        refDate.setDate(refDate.getDate() - 1)

        props.getTree(refDate)
    }

    const nextDay = () => {
        let refDate = new Date(props.viewDate)
        refDate.setDate(refDate.getDate() + 1)

        props.getTree(refDate)
    }

    const prevDay = () => {
        let refDate = new Date(props.viewDate)
        refDate.setDate(refDate.getDate() - 1)

        props.getTree(refDate)
    }

    const formatDate = () => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: "long",
            day:"numeric"
        }

        return showingYesterday ? "Yesterday" : props.viewDate.toLocaleDateString('en-GB',options)
    }

    return (
        <div>
            <div className="dateSelector">
                <h3 className="selectorBtn" onClick={prevDay}>Previous day</h3>
                <h1 className="selectorHeading">{formatDate()}</h1>
                {!showingYesterday ? <h3 className="selectorBtn" onClick={nextDay}>Next Day</h3> : ""}
            </div>
            <IdeaTree treesData={props.treesData} archiveTree={true}/>
        </div>
    )
}

export default Archive