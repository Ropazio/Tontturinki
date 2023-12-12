import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WishListFrame />
      </header>
    </div>
  );
}

function IndividualWishList() {
  return (
    <div>
      <p>hi!</p>
    </div>
  );
}

function WishListFrame() {
  return (
    <div>
      <IndividualWishList />
    </div>
  );
}

export default App;
