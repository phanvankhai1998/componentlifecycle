import React from 'react';
import Header from './Header'

class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        Hello!
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-18 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Root;
