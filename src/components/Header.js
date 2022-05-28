import React from 'react';

function Header(props) {
    return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">React</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="">Repo</a></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Header;