import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.status = {
    //         age: props.initialAge,
    //         status: 0,
    //         homeLink: props.initialLinkName
    //     };
    //     setTimeout(() => {
    //         this.setState({
    //             status: 1
    //         });
    //     }, 3000)
    //     console.log('Constructor')
    // }

    componentWillMount() {
        console.log('Component Will mount');
    }

    componentDidMount() {
        console.log('Component Did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component Will receive', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Will Update', nextProps, nextState);
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component did Update', prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    render() {
        console.log('Props is:', this.props);
        console.log('state is:', this.state);
        let content = '';
        if (true) {
            content = <p>Hello!!! This content.</p>
        }
        return (
            <div className="container">
                {content}
                {0.9 == 1 ? "Yes" : "No"}<br />
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobbies, index) => <li key={index}>{hobbies}</li>)}
                    </ul>
                </div>
                <hr />
                {this.props.children}
                <p>In a new Component!</p>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialName: PropTypes.string,
    children: PropTypes.element.isRequired,
};


export default Home;