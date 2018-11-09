import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import './App.css';
import HomePage from './pages/HomePage';

class App extends React.Component {
  public render() {
    return (
      <div>
        <MuiThemeProvider>
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
