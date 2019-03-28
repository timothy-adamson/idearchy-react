import React, {useState} from 'react'
import IdeaInput from './IdeaInput';


const Card = (props) => {

    const attributes = props.nodeData.attributes
    const [inputMode,setInputMode] = useState(false)
    const [displayedScore,setDisplayedScore] = useState(attributes.score)

    const cardColor = {borderColor: 'cadetblue'}
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateFormat = new Date(attributes.date)
    const weekday = days[dateFormat.getDay()]

    const handleResponseClick = (e) => {
        if (!attributes.archiveTree){
            setInputMode(!inputMode) 
        }

        e.stopPropagation()
    }

    const patchCall = (storageItemExists) => {
        fetch(`${attributes.apiUri}/api/ideas/${attributes.key}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(!storageItemExists)
        })
            .then(res => {
                if(res.status !== 404){
                    setDisplayedScore(displayedScore + (storageItemExists ? -1 : 1))
                    localStorage.setItem(attributes.key,!storageItemExists)
                }
            })
    }

    const handleVoteClick = (e) => {
        const storageItem = JSON.parse(localStorage.getItem(attributes.key))
    
        const storageItemExists = storageItem === null ? false : storageItem

        patchCall(storageItemExists)

        e.stopPropagation()
    }

    return(
        <div className="card" style={cardColor}>
            <div className="cardDetails">
                <p className="ideaText">
                    {attributes.text}
                </p>
                <div className="scoreArea">
                    <h5 className="score">
                        {displayedScore}
                    </h5>
                    <h5 className="btn vote" onClick={handleVoteClick}>
                        This changed my mind
                    </h5>
                </div>
                <div className="lineBreak"></div>
                <h5 className="respondBtn" onClick={handleResponseClick}>
                    Respond
                </h5>
                <p className="date">
                    Sparked on {weekday}
                </p>
                <p className="location">Origin: {attributes.location}</p>
            </div>
            {inputMode ? <IdeaInput
                cardID={attributes.key}
                getTree={attributes.getTree}
                apiUri={attributes.apiUri}/> : ""}
        </div>
    )
}

export default Card