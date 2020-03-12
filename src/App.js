import React from 'react';
import './Styles/App.css';
import APIClient from './apiClient';


// Took Specifics
import Header from './Components/Header';
import Footer from './Components/Footer';
import LeftBar from './Components/LeftBar';
import RightBar from './Components/RightBar';
import Maps from './Components/Maps';

import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
    state = {
       value: 0,
       repos: [],
       user: {},
       events: []
     };
    async componentDidMount() {
     }
  render() {
      return (
        <div className="App">
            <Header />
            <Switch>
               <Route path="/">
                  <div>
                    <div className="left">
                      <LeftBar />
                    </div>
                    <div className="right">
                      <RightBar />
                    </div>
                    <div>
                      <Maps />
                    </div>
                  </div>
                </Route>
            </Switch>
            <Footer />
        </div>
      );
  }
}

export default App;
