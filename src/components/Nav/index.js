import React from "react";
import Logo from "../../assets/nameLogo.png"

function Nav() {
    const tabs = ['About Me','Portfolio','Contact Me','Resume'];

    function tabSelected(tab) {
        console.log(`${tab} clicked`)
    }
      
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
                        <li key={tab}>
                            <span onClick={() => tabSelected(tab)}>{tab}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
      );
}

export default Nav;