import './App.css';
import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import User from './components/User'
import Root from './components/Root'
import { browserHistory } from "react-router";
import { createBrowserHistory } from 'history'
import { Router, Route, IndexRoute } from "react-router";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true,
        };
        this.onGreet = this.onGreet.bind(this);
        this.onChangeLinkName = this.onChangeLinkName.bind(this);
        this.onChangeHomeMounted = this.onChangeHomeMounted.bind(this);
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        browserHistory.listen(location => {
            browserHistory.push('/super/url');
        });
        const router = (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    …
              </Route>
            </Router>
        );
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        Hello!
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-18 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button
                            className="btn btn-primary"
                            onClick={this.onChangeHomeMounted}
                        >
                            (Un Mount Home Component)
                            </button>
                    </div>
                </div> */}

                <hr />
                <Router history={browserHistory}>
                    <Route path={"/root"} component={Root}>
                        <IndexRoute component={Home} />
                        <Route path={"User"} component={User} />
                        <Route path={"Home"} component={Home} />
                    </Route>
                    <Route path={"home"} component={Home} />
                </Router>

            </div>

        );
    }
}
export default App;
