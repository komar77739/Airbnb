import  React from "react"; 
import image from "../assets/img/photo-grid.png";

export default function Hero(){
    return(
        <section className="hero">
            <img src={image} alt="logo" />
            <div className="content">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}