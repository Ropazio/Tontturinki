import React from 'react';
import './App.css';

import Wishlist from './components/Wishlist';

function App() {
  var items = ["load", "of", "rubbish"];
  var users = ["a", "b", "c", "d", "e", "f"];

  var radius = 500;
  var centerX = window.innerWidth/2;
  var centerY = window.innerHeight/2;

  return (
    <div className="App">
      <div>
        {users.map((user, index) => {
          const angle = (2 * Math.PI * index) / users.length;
          const x = centerX + radius * Math.cos(angle) -150 // x = r cos theta
          const y = centerY + radius * Math.sin(angle) +100// y = r sin theta

          const styles = { left: `${x}px`, top: `${y}px`};

          return (
            <Wishlist 
            key={index} 
            name={user} 
            items={items}
            position={styles} 
          />
        )})}
      </div>
    </div>
  );
}

export default App;
