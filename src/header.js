import './header.css';
import React from 'react';
import Jumbo from "./jumbo";
import './header.css';
import Image from './IMG_5844.jpg';

class Header extends React.Component {
render() {
    return (
            <header className="masthead" style={{ backgroundImage: `url(${Image})`}}>
              <nav className="navi">
                <ul className="navi-list">
                  <li>
                    <a style={{textAlign: "center",fontSize: "18px", color: "white"}}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a style={{color: "white", fontSize: "25px", textAlign: "center"}}>
                     JJ Media Co.
                    </a>
                  </li>
                  <li>
                    <a style={{color: "white", fontSize: "18px", textAlign: "center"}}>
                      Book
                    </a>
                  </li>
                </ul>
              </nav>
                <Jumbo></Jumbo>
              </header>
    );
  }
}

export default Header;
