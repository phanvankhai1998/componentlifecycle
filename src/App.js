import './App.css';
import React from 'react';
import Header from './components/Header'
import Home from './components/Home'

class App extends React.Component {
    constructor(props) {
        super();
        // this.state = {
        //     homeLink: "Home",
        //     homeMounted: true,
        // };
        this.onGreet = this.onGreet.bind(this);
    }

    onGreet() {
        alert("Hello!");
    }

    // onChangeName(newName) {
    //     this.setState({
    //         homeLink: newName
    //     });
    // }

    // onChangeHomeMounted() {
    //     this.setState({
    //         homeMounted: !this.state.homeMounted
    //     });
    // }

    render() {
        //let homeCmp = "";
        // if (this.state.homeMounted) {
        //     homeCmp = <Home
        //         name={"Max"}
        //         initialAge={27}
        //         greet={this.onGreet}
        //         changeLink={this.onChangeLinkName.bind(this)}
        //         initialLinkName={this.state.homeLink}
        //     />
        // }

        // var user = {
        //     name: "Anna",
        //     hobbies: ["Sports", "Ball", "Billdal"]
        // }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        Hello!
                        <Header homeLink="Home" />
                        {/* <Header homeLink={this.state.homeLink} /> */}
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-xs-18 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Max"}
                            initalAge={27}
                            greet={this.onGreet}
                        />
                        {/* <p>This is a paragraph!</p>
                        {/* <button
                            className="btn btn-primary"
                            onClick={this.onChangeHomeMounted.bind(this)}
                        >(Un)Muont Home Component</button> */}
                    </div>
                </div>

            </div>
        );
    }
}


// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//         </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//         </a>
//             </header>
//         </div>
//     );
// }

export default App;
