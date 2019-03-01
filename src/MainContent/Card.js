import React from 'react'


const Card = (props) => {

    const attributes = props.nodeData.attributes
    const cardColor = {borderColor: 'cadetblue'}
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateFormat = new Date(attributes.date)
    const weekday = days[dateFormat.getDay()]

    return(
        <div className="card" style={cardColor}>
            <p className="ideaText">
                {attributes.text}
            </p>
            <h5 className="cardType">
                {attributes.isConundrum ? "Conundrum" : "Solution"}
            </h5>
            <div className="lineBreak"></div>
            <p className="date">
                Sparked on {weekday}
            </p>
            <p className="location">Origin: {attributes.location}</p>
        </div>
    )
}

export default Card