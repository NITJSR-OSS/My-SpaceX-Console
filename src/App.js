import React, { Component } from "react";
import logo from "./assets/logo.svg";
// import Aux from "./hoc/Auxillary/Auxillary";
import "./App.css";
import MySpaceX from "./containers/MySpaceX/MySpaceX";

class App extends Component {
  state = {
      loading : true    
  }

  componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          loading : false
        }) ; 
      },4000) ; 
  } ; 
  
  render() {
      
    return (
        <div className="App">
           {
             this.state.loading ?   <header className="App-header">
             <div className="App-logo-container">
               <img src={logo} className="App-logo" alt="logo" />
             </div>
             <h1>WELCOME TO SPACE-X </h1>
           </header> : <MySpaceX/>
           }
        </div>
    );
  }
}

export default App;
