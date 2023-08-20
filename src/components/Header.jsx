import React from "react"
import airbnb from "../../public/assets/airbnb_1.png"

function Header() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}
export default Header