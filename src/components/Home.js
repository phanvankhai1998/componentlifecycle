import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
        //this.onMakeOlder = this.onMakeOlder.bind(this);
    }

    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        console.log('Props is:', this.props);
        console.log('state is:', this.state);
        return (
            <div className="container">
                <p>Your name is {this.props.name}, your age is {this.age}</p>
                <hr />
                <button
                    className="btn btn-primary"
                    // onClick={this.onMakeOlder}
                    //ES6: Arrow Func
                    onClick={() => this.onMakeOlder()}
                >
                    Make me older!
                </button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Home;