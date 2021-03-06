import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        {/* ul.nav.navbar-nav */}
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;