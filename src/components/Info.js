import React from "react";
import img from "../profile-cropped.JPG"

function Info() {
    return (
        <div>
            <img src={img} alt="Cynthia Phan's profile" />
            <h1>Cynthia Phan</h1>
            <p>First-year Student @ UdeM</p>
            <button></button>
            <button></button>
        </div>
    )
}

export default Info;