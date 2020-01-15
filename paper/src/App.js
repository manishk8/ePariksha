import React, { Component } from 'react';
import './App.css';
import MainLayout from './Modules/Layout/MainLayout';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

class App extends Component {
  render() {

    const theme = createMuiTheme({
      palette: {
        primary: { 500: '#000F55' }
      },
    });

    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
