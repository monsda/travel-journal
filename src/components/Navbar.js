import React from "react";
import { FaGlobeAsia } from "@react-icons/all-files/fa/FaGlobeAsia";

export default function Navbar() {
    return ( 
        <div className="nav-bar">
            <FaGlobeAsia id="globe-icon"/>
            <p id="header">my travel journal</p>
        </div>
    )
}