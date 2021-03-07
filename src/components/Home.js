import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initalAge,
            status: 0,
            homeLink: props.initalLinkName
            // homeLink: "Changed Link"
        };
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onHanlerChange = this.onHanlerChange.bind(this);
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

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHanlerChange(event) {
        this.setState({
            homeLink: event.target.value
        })
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
                    onClick={() => this.onMakeOlder()}//ES6: Arrow Func
                >
                    Make me older!
                </button>

                <hr />
                <button
                    className="btn btn-primary"
                    onClick={this.props.greet}
                >Greet
                </button>

                <hr />
                <input
                    type="text"
                    value={this.state.homeLink}
                    onChange={this.onHanlerChange}
                ></input>
                <button
                    className="btn btn-primary"
                    onClick={this.onChangeLink}
                >
                    Change Header Link
                </button>

            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initalAge: PropTypes.number,
    greet: PropTypes.func,
    initalLinkName: PropTypes.string,
};

export default Home;