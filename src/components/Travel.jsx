import React from "react"


export default function Travel (props){
    return(
            <div className="card">
                <img src={props.imageUrl} alt="" />
                <div className="card-location">
                <img src= "src/assets/Fill 219.png" alt="" />
                <h3>{props.location}</h3>
                <a href={props.googleMapsurl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} -- {props.endDate}</h4>
                <p>{props.description}</p>
        </div>
    )
}