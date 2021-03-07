import React from "react";

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav"> {/* ul.nav.navbar-nav */}
                        <li>
                            <a href="">
                                Home
                            </a>
                            <a href="">
                                User
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header