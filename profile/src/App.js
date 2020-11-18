import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfileLoad from './component/ProfileLoad.js';
class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={() => <ProfileLoad />} />
        </div>
      </Router>
    );
  }
}
export default App;
