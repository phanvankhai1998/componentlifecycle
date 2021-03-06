import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initalAge,
            status: 0
        };
        //this.onMakeOlder = this.onMakeOlder.bind(this);
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
        console.log(this.age);
    }

    render() {
        console.log('Props is:', this.props);
        console.log('state is:', this.state);
        return (
            <div className="container">
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button
                    className="btn btn-primary"
                    // onClick={this.onMakeOlder}
                    //ES6: Arrow Func
                    onClick={() => this.onMakeOlder()}
                >
                    Make me older!
                </button>
                <hr />
                <button
                    className="btn btn-primary"
                    onClick={this.props.greet}
                >Greet
                </button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initalAge: PropTypes.number,
    greet: PropTypes.func,
};

export default Home;