import React, {useState} from 'react'
import IdeaInput from './IdeaInput';


const Card = (props) => {

    const [inputMode,setInputMode] = useState(false)

    const attributes = props.nodeData.attributes
    const cardColor = {borderColor: 'cadetblue'}
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateFormat = new Date(attributes.date)
    const weekday = days[dateFormat.getDay()]

    const handleResponseClick = (e) => {
        setInputMode(!inputMode)

        e.stopPropagation()
    }

    return(
        <div className="card" style={cardColor}>
            <div className="cardDetails">
                <p className="ideaText">
                    {attributes.text}
                </p>
                <div>
                    <h5
                        className={"cardType inactive " + (attributes.isConundrum ? "conundrum" : "idea")}
                        onClick={handleResponseClick}>
                        {attributes.isConundrum ? "Conundrum" : "Solution"}
                    </h5>
                </div>
                <div className="lineBreak"></div>
                <p className="date">
                    Sparked on {weekday}
                </p>
                <p className="location">Origin: {attributes.location}</p>
            </div>
            {inputMode ? <IdeaInput cardID={attributes.key} getTree={attributes.getTree}/> : ""}
        </div>
    )
}

export default Card