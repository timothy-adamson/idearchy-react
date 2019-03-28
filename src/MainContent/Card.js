import React, {useState} from 'react'
import IdeaInput from './IdeaInput';


const Card = (props) => {

    const attributes = props.nodeData.attributes
    const [inputMode,setInputMode] = useState(false)
    const [displayedScore,setDisplayedScore] = useState(attributes.score)

    const cardColor = {borderColor: 'cadetblue'}

    const formatDate = () => {
        const postDate = new Date(attributes.date)
        const timeElapsed = Date.now() - postDate

        const seconds = timeElapsed / 1000
        if (seconds > 60){
            const minutes = seconds / 60
            if (minutes > 60){
                const hours = minutes / 60
                if (hours > 24){
                    const days = hours / 24
                    return `${Math.floor(days)}d`
                }
                else{
                    return `${Math.floor(hours)}h`
                }
            }
            else{
                return `${Math.floor(minutes)}m`
            }
        }
        else{
            return `${Math.floor(seconds)}s`
        }
    }

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
                    {formatDate()}
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