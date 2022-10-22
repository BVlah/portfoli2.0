import React from "react";
import Logo from "../../assets/nameLogo.png"

function Nav(props) {
    const tabs = ['About Me','Portfolio','Contact Me'];
      
    return (
        <header>
            <h2>
                <a href="/">
                    <img className="logo" src={Logo} alt="Brennan Vlahcevic Logo"></img>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {tabs.map((tab) => (
                        <li className={props.currentPage === tab ? "nav-item is-active" : "nav-item"} key={tab}>
                            <a href={"#" + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab ? "nav-link active" : "nav-link"}><div className="tab">{tab}</div></a>
                        </li>
                    ))}
                    <li><a href="https://docs.google.com/document/d/1ChmcZUcu8XuKWlAe4QRP5IksQl7MQOSIcLToTL9Fofo/edit?usp=sharing" target="_blank" rel="noreferrer"><div className="tab">Resume</div></a></li>
                </ul>
            </nav>
        </header>
      );
}

export default Nav;