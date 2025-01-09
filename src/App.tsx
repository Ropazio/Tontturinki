import React from 'react';
import './App.css';

import Wishlist from './components/Wishlist';

function App() {
  let items = ["load", "of", "rubbish"];

  return (
    <div className="App">
      <div className="App-header">
        <Wishlist name="user" items={items}/>
      </div>
    </div>
  );
}

export default App;
