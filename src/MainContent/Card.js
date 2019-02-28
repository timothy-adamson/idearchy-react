import React from 'react'


const Card = (props) => {

    const cardColor = {borderColor: 'cadetblue'}
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateFormat = new Date(props.date)
    const weekday = days[dateFormat.getDay()]

    return(
        <div className="card" style={cardColor}>
            <p className="ideaText">
                {props.text}
            </p>
            <h5 className="cardType">
                {props.isConundrum ? "Conundrum" : "Solution"}
            </h5>
            <div className="lineBreak"></div>
            <p className="date">
                Sparked on {weekday}
            </p>
            <p className="location">Origin: {props.location}</p>
        </div>
    )
}

export default Card