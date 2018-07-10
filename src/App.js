import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './components/navigation';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className="app-wrapper">
          <Navigation />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
