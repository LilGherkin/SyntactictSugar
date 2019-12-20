import React from "react";
import "./style.css";

function Burger(props) {
    return (
        <header id="masthead">
            <div>
                <a href="#" id="hamburger" onClick={() => props.click}><span></span></a>
            </div>
            <div>
                <a href="#" class="logoAndTitleMobile"></a>
            </div>
            <nav className="mobileNavigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Burger;