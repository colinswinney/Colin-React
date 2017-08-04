import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './css/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



class App extends React.Component {
  render(props) {
    return (
      <Router>
        <ScrollToTop>
          <Route render={ () => (
            <div className="app">
              
              <Header {...this.props} />

              <Main {...this.props} />

              <Footer />
              
            </div>
          )}/>
        </ScrollToTop>
      </Router>
    )
  }
}


export default App