import React from 'react';

import NavBar from './components/navbar'
import Route from './routes'

function App() {
  return (
    <React.Fragment>
      <div className="container">
      <NavBar />
      <Route />
      </div>
    </React.Fragment>
    
  );
}

export default App;