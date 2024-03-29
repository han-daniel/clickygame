import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="/" id="logo"><h3>Clicky Game</h3></a>
        <h5 className="ml-auto mt-2" id="counters">Score: {props.score} | Highest score: {props.top} </h5>
    </nav>
)

export default Navbar;