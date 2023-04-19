import  React from "react"; 

export default function Card(props){
    return(
        <div className="card">
            <img src={require(`../assets/img/${props.img}`)} className="card--image" alt="person"/>
            <div className="card--stats">
                <img src={require("../assets/img/star.png")} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}Zaferes</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}