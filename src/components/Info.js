import React from "react";
import img from "../profile-cropped.JPG";

function Info() {
    return (
        <div className="info">
            <img src={img} alt="Cynthia Phan's profile" width="100%"/>
            <h1 className="info--name">Cynthia Phan</h1>
            <p className="info--description">First-year Student in BSc Computer Science @ UdeM</p>
            <div className="info--buttons">
                <button className="info--email">
                    <img src="https://cdn-icons-png.flaticon.com/512/3296/3296467.png" alt="Email" width="16px"/>
                    <p>Email</p>
                </button>
                <button className="info--linkedin">
                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" alt="LinkedIn" width="16px"/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    );
}

export default Info;