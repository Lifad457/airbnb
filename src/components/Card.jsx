import React from "react"

function Card(props) {
    return (
        <div className="card">
            <div>
            <img src={`../../public/assets/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
        </div>
    )
}

export default Card